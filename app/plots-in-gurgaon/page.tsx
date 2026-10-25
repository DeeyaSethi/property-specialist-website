import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";

export const metadata: Metadata = {
  title: "Plots & Farmhouse Land in Gurgaon",
  description:
    "Plots and farmhouse land in Gurgaon, from New Gurgaon and the Dwarka Expressway belt to Sohna and Pataudi. We check DTCP approval and title, and visit the site with you.",
  alternates: { canonical: "/plots-in-gurgaon" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27m%20looking%20for%20plots%20in%20Gurgaon";

export default function PlotsInGurgaonPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="py-10 md:py-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
            Gurgaon (Gurugram), Haryana
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Plots &amp; Farmhouse Land in Gurgaon</h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            We work the plot and farmhouse side of Gurgaon, from New Gurgaon and the Dwarka Expressway belt to the farmhouse pockets near Sohna. Honest advice on what your budget actually gets. 28 years in these markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Where we work in Gurgaon</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">Prices here swing a lot from one sector to the next, so we point you to the pockets that fit your budget and your reason for buying.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">New Gurgaon (Sectors 80 to 95)</h3>
              <p className="text-gray-600 text-sm">Licensed plotted and group-housing sectors off NH-48, more affordable than old Gurgaon.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Dwarka Expressway belt</h3>
              <p className="text-gray-600 text-sm">Sectors along the now-open Dwarka Expressway, a fast-developing corridor towards Delhi.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Sohna</h3>
              <p className="text-gray-600 text-sm">Weekend-farmhouse country along Sohna Road and the Aravalli foothills, south of the city.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Pataudi &amp; Tauru</h3>
              <p className="text-gray-600 text-sm">Agricultural and farmhouse land further out, for buyers who want acreage at a lower rate.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">What we check before we recommend a plot</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">A cheap plot with a messy title is not cheap. This is what we go through before you put any money down.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Approval</h3>
              <p className="text-gray-600 text-sm">Whether the colony holds a DTCP licence or is HSVP, and not an unauthorised layout.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Clear title</h3>
              <p className="text-gray-600 text-sm">We trace the title and mutation on Jamabandi, so you know the seller can actually sell.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Land use</h3>
              <p className="text-gray-600 text-sm">For farmhouse land, whether a CLU (change of land use) is in place or possible, plus road access.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Why people are buying in Gurgaon</h2>
          <ul className="content grid gap-3 text-gray-700">
            <li>The Dwarka Expressway is now open, opening up New Gurgaon and the sectors along it.</li>
            <li>Gurgaon has one of the NCR&apos;s biggest office and job markets, which keeps steady demand for homes and plots.</li>
            <li>The Sohna and Aravalli belt remains the go-to for weekend farmhouses near the city.</li>
            <li>Rates differ sharply by sector and approval status, so the right advice saves real money.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-6">We will give you the real rate for a specific sector when you call, not a headline number.</p>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy]">Want to see plots in Gurgaon?</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will shortlist a few and take you to see them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
          <p className="text-sm text-gray-600">Also looking elsewhere? See <a href="/plots-in-sonipat" className="font-semibold text-[--color-navy] underline">plots in Sonipat</a> or <a href="/farmland-near-vrindavan" className="font-semibold text-[--color-navy] underline">farmland near Vrindavan</a>.</p>
        </div>
      </Section>
    </main>
  );
}
