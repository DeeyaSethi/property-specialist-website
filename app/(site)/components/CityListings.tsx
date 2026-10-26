import Section from "./ui/Section";
import ListingCard from "./ListingCard";
import { getListings } from "../../lib/listings";

// Server component: shows a city's current plots from the sheet.
// Renders nothing when that city has no listings, so city pages never show empty filler.
export default async function CityListings({ city, title }: { city: string; title: string }) {
  const items = (await getListings()).filter(
    (l) => l.city.toLowerCase() === city.toLowerCase(),
  );
  if (items.length === 0) return null;
  return (
    <Section className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-6">{title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l, i) => (
            <ListingCard key={`${l.id}-${i}`} l={l} />
          ))}
        </div>
      </div>
    </Section>
  );
}
