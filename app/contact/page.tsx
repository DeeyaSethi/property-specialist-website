import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Badge from "../(site)/components/ui/Badge";
import ContactForm from "../(site)/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Looking to buy or sell land in Vrindavan, Sonipat or Gurgaon? Let's talk.",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge>Get in touch</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-4">
            Contact us
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Looking to buy or sell land in Vrindavan, Sonipat or Gurgaon? Let&apos;s talk.
          </p>
        </div>
      </Section>
      <Section bg="white">
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
