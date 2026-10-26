import type { Listing } from "../../lib/listings";

function statusClasses(status: string): string {
  const s = status.toLowerCase();
  if (s.includes("sold")) return "bg-gray-200 text-gray-600";
  if (s.includes("hold")) return "bg-amber-100 text-amber-800";
  return "bg-green-100 text-green-800";
}

function waLink(l: Listing): string {
  const text = `Hi, I'm interested in: ${l.title}${l.id ? ` (${l.id})` : ""}`;
  return `https://wa.me/919910070102?text=${encodeURIComponent(text)}`;
}

export default function ListingCard({ l }: { l: Listing }) {
  return (
    <div className="premium-card rounded-xl overflow-hidden flex flex-col">
      <div className="relative h-44 bg-[--color-navy] flex items-center justify-center">
        {/^https?:\/\//i.test(l.photo) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={l.photo} alt={l.title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <span className="text-white/80 text-sm font-semibold tracking-wide">{l.type || "Land"}</span>
        )}
        <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full ${statusClasses(l.status)}`}>{l.status}</span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-[--color-navy] mb-1">{l.title}</h3>
        <p className="text-sm text-gray-600">{[l.locality, l.city].filter(Boolean).join(", ")}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700">
          {l.size ? <span><span className="text-gray-500">Size:</span> {l.size}</span> : null}
          {l.price ? <span className="font-bold text-[--color-navy]">{l.price}</span> : null}
        </div>
        {l.approval ? <p className="mt-2 text-xs font-semibold text-[--color-dark-gold]">{l.approval}</p> : null}
        {l.highlights ? <p className="mt-2 text-sm text-gray-600">{l.highlights}</p> : null}
        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
          <a href="tel:+919910070102" className="text-sm font-semibold text-[--color-navy] hover:text-[--color-gold]">Call</a>
          <a href={waLink(l)} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[--color-navy] hover:text-[--color-gold] underline">Ask on WhatsApp</a>
          {l.map ? <a href={l.map} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[--color-navy] hover:text-[--color-gold]">Map</a> : null}
        </div>
      </div>
    </div>
  );
}
