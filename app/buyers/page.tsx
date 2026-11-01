import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For Home Buyers",
  description:
    "Help finding and buying a plot or farmhouse plot in Vrindavan, Sonipat and Gurgaon, with the paperwork checked and a site visit before you decide.",
  alternates: { canonical: "/buyers" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-(--color-gold) focus:ring-offset-2";
const btnPrimary = `${btn} bg-(--color-navy) text-white shadow-lg hover:shadow-xl hover:bg-(--color-gold) hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-(--color-navy) text-(--color-navy) hover:bg-(--color-gold) hover:text-white hover:border-(--color-gold) shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27m%20looking%20to%20buy%20a%20plot";

export default function BuyersPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/ResidentialProperties.jpg" alt="" fill priority className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-(--color-navy)/20" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-(--color-brand) text-(--color-brand) px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-(--color-brand) rounded-full"></span>
              For home buyers
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-(--color-navy) mb-6 leading-tight">Buying a plot or home</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">We will shortlist a few plots that fit your budget, check the paperwork, and take you to see them before you decide.</p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className={btnPrimary}>Tell us what you want</a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image src="/images/CommercialSpaces.jpg" alt="Buying a plot" width={500} height={400} className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-(--color-brand)/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-(--color-navy) mb-8">What we help you buy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">Residential plots</h3>
              <p className="text-gray-600 text-sm">Approved plots in developing sectors, ready to build on.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">Farmhouse plots</h3>
              <p className="text-gray-600 text-sm">Land for a weekend place or second home near the city.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">Farmland</h3>
              <p className="text-gray-600 text-sm">Agricultural land around Vrindavan, Goverdhan and beyond.</p>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact" className={btnPrimary}>Find the right plot</a>
          </div>
        </div>
      </Section>

      <Section id="contact" className="border-t bg-(--color-muted)">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-(--color-brand) text-(--color-brand) px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-(--color-brand) rounded-full animate-pulse"></span>
            Ready to buy?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-(--color-navy)">Find the right plot</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will show you what fits.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp us</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
