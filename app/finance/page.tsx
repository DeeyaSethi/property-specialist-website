import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Finance & Loans",
  description:
    "Home loans, loan against property and NRI support through lenders we work with.",
  alternates: { canonical: "/finance" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-(--color-gold) focus:ring-offset-2";
const btnPrimary = `${btn} bg-(--color-navy) text-white shadow-lg hover:shadow-xl hover:bg-(--color-gold) hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-(--color-navy) text-(--color-navy) hover:bg-(--color-gold) hover:text-white hover:border-(--color-gold) shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27d%20like%20help%20with%20finance%20for%20a%20plot";

export default function FinancePage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/Finance.jpg" alt="" fill priority className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-(--color-navy)/20" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-(--color-brand) text-(--color-brand) px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-(--color-brand) rounded-full"></span>
              Finance
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-(--color-navy) mb-6 leading-tight">Finance &amp; Loans</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Home loans, loan against property, and help for buyers living abroad, arranged through lenders we have worked with for years.</p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className={btnPrimary}>Ask about finance</a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image src="/images/MarketAnalysis.jpg" alt="Finance for buying land" width={500} height={400} className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-(--color-brand)/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-(--color-navy) mb-8">What we help arrange</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">Home loans</h3>
              <p className="text-gray-600 text-sm">Loans to buy a plot or build a home.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">Loan against property</h3>
              <p className="text-gray-600 text-sm">Raise funds against property you already own.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-(--color-navy) mb-2">NRI support</h3>
              <p className="text-gray-600 text-sm">Documentation and coordination for buyers living abroad.</p>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact" className={btnPrimary}>Ask about finance</a>
          </div>
        </div>
      </Section>

      <Section id="contact" className="border-t bg-(--color-muted)">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-(--color-brand) text-(--color-brand) px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-(--color-brand) rounded-full animate-pulse"></span>
            Need help with finance?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-(--color-navy)">Tell us what you are buying</h2>
          <p className="text-lg mb-8 text-gray-700">Let us know what you are planning, and we will connect you with the right lender and help with the paperwork.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp us</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
