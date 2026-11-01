"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { TEL_HREF, PHONE_DISPLAY, whatsapp } from "../../lib/contact";

const inputCls =
  "w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-(--color-gold) focus:border-(--color-navy)";

const WA_GENERAL = whatsapp("Hi, I'd like to talk about a plot");

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
      let ok = res.ok;
      try {
        const data = await res.json();
        ok = ok && data?.ok !== false;
      } catch {
        /* response was not JSON; fall back to the HTTP status */
      }
      if (ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-xl border-2 border-(--color-navy) bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-(--color-navy) mb-2">Thanks, we have your details.</h3>
        <p className="text-gray-600 mb-6">
          We will call or message you back shortly. If it is urgent, reach us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={TEL_HREF}>Call {PHONE_DISPLAY}</Button>
          <Button href={WA_GENERAL} target="_blank" rel="noopener noreferrer" variant="secondary">
            WhatsApp us
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-(--color-navy) mb-1">
          Name
        </label>
        <input id="name" name="name" placeholder="Your name" className={inputCls} required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-(--color-navy) mb-1">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className={inputCls} required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-(--color-navy) mb-1">
          Phone
        </label>
        <input id="phone" name="phone" placeholder="Your phone number" className={inputCls} />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-(--color-navy) mb-1">
          I am a
        </label>
        <select id="type" name="type" className={inputCls} defaultValue="Buyer">
          <option>Buyer</option>
          <option>Investor</option>
        </select>
      </div>
      {/* honeypot: real people leave this empty */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call or WhatsApp us instead.</p>
      )}
      <div className="flex flex-wrap gap-3 items-center">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit"}
        </Button>
        <Button href={WA_GENERAL} target="_blank" rel="noopener noreferrer" variant="secondary">
          WhatsApp us
        </Button>
      </div>
    </form>
  );
}
