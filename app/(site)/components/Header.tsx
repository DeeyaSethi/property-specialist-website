"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/listings", label: "Plots" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo-no-bg.png"
            alt="Property Specialist"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-(--color-navy) font-bold text-lg font-serif">Property Specialist</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-(--color-navy) hover:text-(--color-gold) transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-(--color-navy) text-white px-5 py-2.5 font-semibold hover:bg-[#16306b] transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-(--color-navy)"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open ? (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="mx-auto max-w-6xl px-6 py-3 grid gap-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 font-medium text-(--color-navy)"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="py-2 font-semibold text-(--color-navy)"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
