import type { Metadata } from "next";
import Image from "next/image";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const metadata: Metadata = {
  title: "For Home Buyers",
  description:
    "Help finding and buying a plot or farmhouse plot in Vrindavan, Sonipat and Gurgaon, with the paperwork checked and a site visit before you decide.",
  alternates: { canonical: "/buyers" },
};

export default function BuyersPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg" width="wide" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>For home buyers</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">
              Buying a plot or home
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We will shortlist a few plots that fit your budget, check the paperwork, and take you to see
              them before you decide.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button href="#contact">Tell us what you want</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/ResidentialProperties.jpg"
                alt="Buying a plot or home"
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
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-10">What we help you buy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Residential plots</h3>
              <p className="text-gray-600 text-sm">
                Approved plots in developing sectors, ready to build on.
              </p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Farmhouse plots</h3>
              <p className="text-gray-600 text-sm">
                Land for a weekend place or second home near the city.
              </p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Farmland</h3>
              <p className="text-gray-600 text-sm">
                Agricultural land around Vrindavan, Goverdhan and beyond.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button href="#contact">Find the right plot</Button>
          </div>
        </div>
      </Section>

      <Section id="contact" bg="muted" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Badge>Ready to buy?</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">Find the right plot</h2>
          <p className="text-lg mb-8 text-gray-600">
            Tell us your budget and what the land is for, and we will show you what fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={TEL_HREF}>Call us</Button>
            <Button
              href={whatsapp("Hi, I'm looking to buy a plot")}
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
