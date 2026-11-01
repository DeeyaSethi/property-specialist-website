import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import ListingsBrowser from "../(site)/components/ListingsBrowser";
import { getListings } from "../lib/listings";
import { TEL_HREF, whatsapp } from "../lib/contact";

// Re-render at most every 5 minutes so new sheet rows show up without a deploy.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Plots & Farmland for Sale",
  description:
    "Current plots and farmland for sale in Vrindavan, Sonipat and Gurgaon. Call or WhatsApp us for details and a site visit.",
  alternates: { canonical: "/listings" },
};

export default async function ListingsPage() {
  const listings = await getListings();

  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge>Current plots &amp; farmland</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">
            Plots &amp; farmland for sale
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our current plots and farmland across Vrindavan, Sonipat and Gurgaon. Prices and availability
            change often, so call or WhatsApp us for the latest and to book a site visit.
          </p>
        </div>
      </Section>

      <Section bg="muted" width="wide" className="border-t border-gray-200">
        {listings.length > 0 ? (
          <ListingsBrowser listings={listings} />
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-(--color-navy) mb-3">
              New plots come in often
            </h2>
            <p className="text-gray-600 mb-8">
              We update our available plots regularly. Call or WhatsApp us and we will send you the current
              list that fits your budget and location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={TEL_HREF}>Call us</Button>
              <Button
                href={whatsapp("Hi, please send me your current plots list")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </Section>
    </main>
  );
}
