"use client";

import { useState } from "react";
import Button from "./ui/Button";

const btn =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const inputCls =
  "border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-brand]";
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20plot";

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
      <div className="rounded-xl border-2 border-[--color-navy] bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-[--color-navy] mb-2">Thanks, we have your details.</h3>
        <p className="text-gray-700 mb-6">We will call or message you back shortly. If it is urgent, reach us directly.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919910070102" className={btnPrimary}>Call 99100 70102</a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp us</a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 grid grid-cols-1 gap-4">
      <input name="name" placeholder="Name" className={inputCls} required />
      <input name="email" type="email" placeholder="Email" className={inputCls} required />
      <input name="phone" placeholder="Phone" className={inputCls} />
      <select name="type" className={inputCls} defaultValue="Buyer">
        <option>Buyer</option>
        <option>Developer</option>
        <option>Investor</option>
      </select>
      {/* honeypot: real people leave this empty */}
      <input type="text" name="company" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please call or WhatsApp us instead.</p>
      )}
      <div className="flex flex-wrap gap-4 items-center">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Submit"}
        </Button>
        <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp Us</a>
      </div>
    </form>
  );
}
