"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo-no-bg.png"
            alt="Property Specialist Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-(--color-brand) font-bold text-lg font-serif">Property Specialist</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/listings" className="font-medium hover:text-(--color-gold) transition-colors">Plots</a>
          <a href="/about" className="font-medium hover:text-(--color-gold) transition-colors">About</a>
          <a href="/contact" className="rounded-md bg-(--color-navy) text-white px-4 py-2 font-medium hover:bg-(--color-gold) transition-colors">Contact</a>
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
            <a href="/listings" className="py-2 font-medium">Plots</a>
            <a href="/about" className="py-2 font-medium">About</a>
            <a href="/contact" className="py-2 font-medium text-(--color-navy)">Contact</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
