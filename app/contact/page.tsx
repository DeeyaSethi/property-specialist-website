import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Looking to buy, sell, or partner? Let's talk.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="pt-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[--color-navy] tracking-tight">Contact Us</h1>
          <p className="lead mt-4">Looking to buy, sell, or partner? Let’s talk.</p>
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-3xl">
          <form className="mt-2 grid grid-cols-1 gap-4" action="/api/contact" method="post">
            <input name="name" placeholder="Name" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-brand]" required />
            <input name="email" type="email" placeholder="Email" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-brand]" required />
            <input name="phone" placeholder="Phone" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-brand]" />
            <select name="type" className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-brand]">
              <option>Buyer</option>
              <option>Developer</option>
              <option>Investor</option>
            </select>
            <input type="text" name="company" className="hidden" tabIndex={-1} aria-hidden="true" />
            <div className="flex flex-wrap gap-4">
              <Button type="submit">Submit</Button>
              <a
                className="inline-flex items-center justify-center rounded-md bg-white border-2 border-[--color-navy] text-[--color-navy] px-5 py-3 text-sm font-medium shadow-sm transition hover:bg-[--color-muted] focus:outline-none focus:ring-2 focus:ring-[--color-brand]"
                href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20talk"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </form>
        </div>
      </Section>
    </main>
  );
}


