import type { Metadata } from "next";
import Image from "next/image";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const metadata: Metadata = {
  title: "Finance & Loans",
  description:
    "Home loans, loan against property and NRI support through lenders we work with.",
  alternates: { canonical: "/finance" },
};

export default function FinancePage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg" width="wide" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>Finance</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">
              Finance &amp; loans
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Home loans, loan against property, and help for buyers living abroad, arranged through lenders
              we have worked with for years.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button href="#contact">Ask about finance</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/MarketAnalysis.jpg"
                alt="Finance for buying land"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="muted" className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-10">What we help arrange</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Home loans</h3>
              <p className="text-gray-600 text-sm">Loans to buy a plot or build a home.</p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Loan against property</h3>
              <p className="text-gray-600 text-sm">Raise funds against property you already own.</p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">NRI support</h3>
              <p className="text-gray-600 text-sm">
                Documentation and coordination for buyers living abroad.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button href="#contact">Ask about finance</Button>
          </div>
        </div>
      </Section>

      <Section id="contact" bg="muted" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Badge>Need help with finance?</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">
            Tell us what you are buying
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Let us know what you are planning, and we will connect you with the right lender and help with
            the paperwork.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={TEL_HREF}>Call us</Button>
            <Button
              href={whatsapp("Hi, I'd like help with finance for a plot")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              WhatsApp us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
