import Image from "next/image";
import Link from "next/link";
import { TEL_HREF, PHONE_DISPLAY_FULL, EMAIL } from "../../lib/contact";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { href: "/listings", label: "Plots" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/buyers", label: "Home buyers" },
      { href: "/investors", label: "Investors" },
      { href: "/finance", label: "Finance & loans" },
    ],
  },
  {
    title: "Locations",
    links: [
      { href: "/plots-in-sonipat", label: "Plots in Sonipat" },
      { href: "/plots-in-gurgaon", label: "Plots in Gurgaon" },
      { href: "/farmland-near-vrindavan", label: "Farmland near Vrindavan" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--color-navy) text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-no-bg.png"
                alt="Property Specialist"
                width={44}
                height={44}
                className="object-contain brightness-0 invert"
              />
              <span className="font-bold text-xl font-serif text-white">Property Specialist</span>
            </div>
            <p className="text-sm text-white/80">
              Plots and farmland in Vrindavan, Sonipat and Gurgaon.
            </p>
            <a
              href={TEL_HREF}
              className="inline-block font-semibold text-(--color-royal-gold) hover:text-white transition-colors"
            >
              {PHONE_DISPLAY_FULL}
            </a>
            <p className="text-sm text-white/80">
              Cottage No 13 A, Balraj Khanna Marg, near Shadipur Metro Station, Patel Nagar, New Delhi
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h3 className="font-bold text-lg text-white">{col.title}</h3>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/80 hover:text-(--color-royal-gold) transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/80">
          <div>© {new Date().getFullYear()} Property Specialist · In real estate since 2010</div>
          <div>
            <a
              href={`mailto:${EMAIL}`}
              className="text-white/80 hover:text-(--color-royal-gold) transition-colors"
            >
              {EMAIL}
            </a>{" "}
            · Open every day, 9 AM to 7 PM
          </div>
        </div>
      </div>
    </footer>
  );
}
