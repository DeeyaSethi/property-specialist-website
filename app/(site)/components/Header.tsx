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
          <span className="text-[--color-brand] font-bold text-lg font-serif royal-gold-text">Property Specialist</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="/about" className="hover:royal-gold-text font-medium transition-colors">About Founder</a>
          <a href="/developers" className="hover:royal-gold-text transition-colors">Developers</a>
          <a href="/investors" className="hover:royal-gold-text transition-colors">Investors</a>
          <a href="/buyers" className="hover:royal-gold-text transition-colors">Buyers</a>
          <a href="/finance" className="hover:royal-gold-text transition-colors">Finance</a>
          <a href="/podcast" className="hover:royal-gold-text transition-colors">Podcast</a>
          <a href="/contact" className="rounded-md bg-white border-2 royal-gold-border royal-gold-text hover:royal-gold-bg hover:text-white px-3 py-2 transition-colors royal-shadow">Contact</a>
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


