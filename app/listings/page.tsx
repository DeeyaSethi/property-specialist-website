import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import ListingsBrowser from "../(site)/components/ListingsBrowser";
import { getListings } from "../lib/listings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Plots & Farmland for Sale",
  description:
    "Current plots and farmland for sale in Vrindavan, Sonipat and Gurgaon. Call or WhatsApp us for details and a site visit.",
  alternates: { canonical: "/listings" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20please%20send%20me%20your%20current%20plots%20list";

export default async function ListingsPage() {
  const listings = await getListings();

  return (
    <main className="font-sans">
      <Section bg="gradient" className="py-10 md:py-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Plots &amp; Farmland for Sale</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our current plots and farmland across Vrindavan, Sonipat and Gurgaon. Prices and availability change often, so call or WhatsApp us for the latest and to book a site visit.
          </p>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        {listings.length > 0 ? (
          <ListingsBrowser listings={listings} />
        ) : (
          <div className="max-w-2xl mx-auto text-center py-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Fresh plots on request</h2>
            <p className="text-gray-700 mb-8">We update our available plots regularly. Call or WhatsApp us and we will send you the current list that fits your budget and location.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
              <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
            </div>
          </div>
        )}
      </Section>
    </main>
  );
}
