// Listings data layer.
// Source of truth is one Google Sheet, published to the web as CSV.
// Set LISTINGS_CSV_URL (the published-CSV link) in the environment to connect it.
// With no URL set, the site shows an honest empty state (never fake plots).

export type Listing = {
  id: string;
  title: string;
  city: string;
  locality: string;
  type: string;
  size: string;
  price: string;
  status: string;
  approval: string;
  highlights: string;
  photo: string;
  map: string;
};

// Minimal CSV parser: handles quoted fields, embedded commas/newlines and "" escapes.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function rowsToListings(rows: string[][]): Listing[] {
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const col = (r: string[], name: string) => {
    const i = headers.indexOf(name);
    return i >= 0 && i < r.length ? r[i].trim() : "";
  };
  return rows
    .slice(1)
    .map((r) => ({
      listing: {
        id: col(r, "id"),
        title: col(r, "title"),
        city: col(r, "city"),
        locality: col(r, "locality"),
        type: col(r, "type"),
        size: col(r, "size"),
        price: col(r, "price"),
        status: col(r, "status") || "Available",
        approval: col(r, "approval"),
        highlights: col(r, "highlights"),
        photo: col(r, "photo"),
        map: col(r, "map"),
      } as Listing,
      published: col(r, "published").toLowerCase(),
    }))
    .filter(
      (x) =>
        x.listing.title !== "" &&
        x.published !== "no" &&
        x.published !== "false" &&
        x.published !== "0",
    )
    .map((x) => x.listing);
}

export async function getListings(): Promise<Listing[]> {
  const url = process.env.LISTINGS_CSV_URL;
  if (!url) return [];
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    // Strip a leading BOM (Google published CSVs sometimes include one).
    const text = (await res.text()).replace(/^﻿/, "");
    return rowsToListings(parseCsv(text));
  } catch {
    return [];
  }
}
