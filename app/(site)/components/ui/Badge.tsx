import type { ReactNode } from "react";

// Small "eyebrow" pill used above section headings for context.
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-(--color-gold)/60 bg-(--color-gold)/10 px-4 py-1.5 text-sm font-semibold text-(--color-navy)">
      <span className="h-1.5 w-1.5 rounded-full bg-(--color-gold)" aria-hidden />
      {children}
    </span>
  );
}
