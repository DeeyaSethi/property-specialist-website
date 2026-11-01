import type { Metadata } from "next";
import Image from "next/image";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const metadata: Metadata = {
  title: "Investors & HNIs",
  description:
    "Plots and farmland for investors in Vrindavan, Sonipat and Gurgaon, with the title and approvals checked before you buy.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg" width="wide" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>Land for investors</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">
              Investing in land
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plots and farmland we have checked ourselves, in markets we know. We will tell you honestly
              what a piece of land is worth and what it is likely to do.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href="#contact">Talk to us</Button>
              <Button href="/buyers" variant="secondary">
                For home buyers
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/LuxuryFarmhouses.jpg"
                alt="Farmland for investment"
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
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">
            What we help investors buy
          </h2>
          <p className="text-lg text-gray-600">
            Land we have checked ourselves, with the approvals, title and access confirmed.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <div className="premium-card p-7 rounded-xl text-center">
            <h3 className="text-lg font-bold text-(--color-navy) mb-2">Residential plots</h3>
            <p className="text-gray-600 text-sm">
              Approved plots in developing sectors across Sonipat and Gurgaon.
            </p>
          </div>
          <div className="premium-card p-7 rounded-xl text-center">
            <h3 className="text-lg font-bold text-(--color-navy) mb-2">Farmland &amp; farmhouses</h3>
            <p className="text-gray-600 text-sm">
              Agricultural and farmhouse land around Vrindavan and the Gurgaon belt.
            </p>
          </div>
          <div className="premium-card p-7 rounded-xl text-center">
            <h3 className="text-lg font-bold text-(--color-navy) mb-2">Due diligence</h3>
            <p className="text-gray-600 text-sm">
              We trace the title and mutation and confirm approvals before you commit.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" bg="muted" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Badge>Ready to invest?</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">
            Tell us what you are after
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Share your budget and what you want from the land, and we will shortlist a few and take you to
            see them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={TEL_HREF}>Call us</Button>
            <Button
              href={whatsapp("Hi, I'd like to talk about investing in land")}
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
