import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import ContactForm from "../(site)/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Looking to buy, sell, or partner? Let's talk.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="pt-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[--color-navy] tracking-tight">Contact Us</h1>
          <p className="lead mt-4">Looking to buy, sell, or partner? Let&apos;s talk.</p>
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
