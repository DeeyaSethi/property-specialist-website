"use client";

import { useMemo, useState } from "react";
import type { Listing } from "../../lib/listings";
import ListingCard from "./ListingCard";

const CITY_ORDER = ["Sonipat", "Gurgaon", "Vrindavan"];

export default function ListingsBrowser({ listings }: { listings: Listing[] }) {
  const cities = useMemo(() => {
    const present = Array.from(new Set(listings.map((l) => l.city).filter(Boolean)));
    present.sort((a, b) => {
      const ia = CITY_ORDER.indexOf(a);
      const ib = CITY_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    return present;
  }, [listings]);

  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? listings : listings.filter((l) => l.city === active);

  return (
    <div className="max-w-6xl mx-auto">
      {cities.length > 1 ? (
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", ...cities].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === c
                  ? "bg-[--color-navy] text-white"
                  : "bg-white border border-gray-200 text-[--color-navy] hover:border-[--color-gold]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((l, i) => (
          <ListingCard key={`${l.id}-${i}`} l={l} />
        ))}
      </div>
    </div>
  );
}
