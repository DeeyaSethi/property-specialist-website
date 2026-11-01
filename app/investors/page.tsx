import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Icon from "../(site)/components/ui/Icon";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Investors & HNIs",
  description:
    "Plots and farmland for investors in Vrindavan, Sonipat and Gurgaon, with the title and approvals checked before you buy.",
  alternates: { canonical: "/investors" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20investing%20in%20land";

export default function InvestorsPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/investors.jpg" alt="" fill priority className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[--color-navy]/20" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
              Land for investors
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Investing in land</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Plots and farmland we have checked ourselves, in markets we know. We will tell you honestly what a piece of land is worth and what it is likely to do.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className={btnPrimary}>Talk to us</a>
              <a href="/buyers" className={btnSecondary}>For home buyers</a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image src="/images/LuxuryFarmhouses.jpg" alt="Farmland for investment" width={500} height={400} className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-4">What we help investors buy</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Land we have checked ourselves, with the approvals, title and access confirmed.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="home" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Residential plots</h3>
            <p className="text-gray-600 text-sm">Approved plots in developing sectors across Sonipat and Gurgaon.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="building" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Farmland &amp; farmhouses</h3>
            <p className="text-gray-600 text-sm">Agricultural and farmhouse land around Vrindavan and the Gurgaon belt.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Due diligence</h3>
            <p className="text-gray-600 text-sm">We trace the title and mutation and confirm approvals before you commit.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className={btnPrimary}>Talk to us about options</a>
        </div>
      </Section>

      <Section id="contact" className="border-t bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to invest?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-navy]">Tell us what you are after</h2>
          <p className="text-lg mb-8 text-gray-700">Share your budget and what you want from the land, and we will shortlist a few and take you to see them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp us</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
