"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[--color-brand] font-semibold">Property Specialist</Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="/about" className="hover:text-[--color-brand] font-medium">About Founder</a>
          <a href="/developers" className="hover:text-[--color-brand]">Developers</a>
          <a href="/investors" className="hover:text-[--color-brand]">Investors</a>
          <a href="/buyers" className="hover:text-[--color-brand]">Buyers</a>
          <a href="/finance" className="hover:text-[--color-brand]">Finance</a>
          <a href="/podcast" className="hover:text-[--color-brand]">Podcast</a>
          <a href="/contact" className="rounded-md bg-white border-2 border-[--color-brand] text-[--color-brand] hover:bg-[--color-brand] hover:text-white px-3 py-2 transition-colors">Contact</a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open ? (
        <div className="md:hidden border-t bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-3 grid gap-2 text-sm">
            <a href="/about" className="py-2 font-medium">About Founder</a>
            <a href="/developers" className="py-2">Developers</a>
            <a href="/investors" className="py-2">Investors</a>
            <a href="/buyers" className="py-2">Buyers</a>
            <a href="/finance" className="py-2">Finance</a>
            <a href="/podcast" className="py-2">Podcast</a>
            <a href="/contact" className="py-2 text-[--color-brand] bg-white border-2 border-[--color-brand] rounded-md text-center">Contact</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}


