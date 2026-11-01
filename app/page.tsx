import Link from "next/link";
import Image from "next/image";
import Section from "./(site)/components/ui/Section";
import Button from "./(site)/components/ui/Button";
import Badge from "./(site)/components/ui/Badge";
import Accordion from "./(site)/components/ui/Accordion";
import { TEL_HREF, PHONE_DISPLAY, whatsapp } from "./lib/contact";

const CITIES = ["Sonipat", "Gurgaon", "Vrindavan"] as const;

const LOCATIONS = [
  {
    name: "Sonipat",
    img: "/images/sonipat-farmhouse.png",
    href: "/plots-in-sonipat",
    line: "Plots near Kundli, NH-44 and the KMP Expressway, out to the university belt.",
  },
  {
    name: "Gurgaon",
    img: "/images/gurgaon-skyline.png",
    href: "/plots-in-gurgaon",
    line: "Plots and farmhouse land across New Gurgaon, the Dwarka Expressway belt, Sohna and Pataudi.",
  },
  {
    name: "Vrindavan",
    img: "/images/vrindavan-luxury.png",
    href: "/farmland-near-vrindavan",
    line: "Plots and farmland near the temples, Parikrama Marg and the Yamuna Expressway.",
  },
];

const SERVICES = [
  {
    href: "/investors",
    img: "/images/investors.jpg",
    title: "Investors & HNIs",
    line: "Land picked for investors, with approvals and title checked first.",
  },
  {
    href: "/buyers",
    img: "/images/hero-buyers.jpg",
    title: "Home buyers",
    line: "Help finding and buying a plot or home across Delhi NCR and Vrindavan.",
  },
  {
    href: "/finance",
    img: "/images/Finance.jpg",
    title: "Finance & loans",
    line: "Home loans, loan against property and NRI support.",
  },
];

export default function Home() {
  return (
    <main className="font-sans">
      {/* Contact banner (homepage only) */}
      <div className="bg-(--color-navy) text-white py-2.5 px-6 flex justify-between items-center text-sm md:text-base border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="hidden md:inline font-medium opacity-90">Call Manoj directly:</span>
          <a href={TEL_HREF} className="font-bold text-white hover:text-(--color-gold) transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
        <a
          href={whatsapp("Hi, I saw propertyspecialist.in and want to talk about plots")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white hover:text-(--color-gold) transition-colors border-l border-white/20 pl-4"
        >
          WhatsApp us
        </a>
      </div>

      {/* Hero */}
      <Section bg="gradient" size="lg" width="wide" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>Plots &amp; farmland in Delhi NCR &amp; Vrindavan</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-navy) leading-[1.08] mb-5">
              Residential Plots &amp; Farmland in Vrindavan, Sonipat &amp; Gurgaon
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Straight answers on price, approvals and what a plot is actually worth. We check the paperwork
              and walk the site with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button href="#contact">Talk to us</Button>
            </div>
            <div>
              <p className="text-xs font-semibold text-(--color-navy)/70 uppercase tracking-[0.18em] mb-3">
                Where we work
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {CITIES.map((city) => (
                  <a
                    key={city}
                    href="#where-we-work"
                    className="rounded-full border border-(--color-navy)/25 bg-white px-5 py-2 text-sm font-semibold text-(--color-navy) hover:border-(--color-navy) hover:bg-(--color-navy) hover:text-white transition-colors"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-fade-in-up">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/ResidentialProperties.jpg"
                alt="Residential plots and farmland in Delhi NCR"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-lg ring-1 ring-black/5">
              <div className="font-serif text-3xl font-bold text-(--color-navy) leading-none">
                16<span className="text-base font-semibold"> yrs</span>
              </div>
              <div className="h-9 w-px bg-gray-200" />
              <div className="text-sm text-gray-600 leading-snug">
                In real estate
                <br />
                &#8377;250 cr+ closed
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Where we work */}
      <Section id="where-we-work" bg="muted" width="wide" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">Where we work</h2>
          <p className="text-lg text-gray-600">Plots and farmland across three markets we know well.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.name}
              href={loc.href}
              className="group premium-card rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={loc.img}
                  alt={`Plots and farmland in ${loc.name}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white">{loc.name}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm mb-4 flex-1">{loc.line}</p>
                <span className="flex items-center text-(--color-navy) font-semibold group-hover:text-(--color-gold) transition-colors">
                  View plots in {loc.name}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Meet Manoj */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy)">
            Meet <span className="text-(--color-gold)">Manoj Sethi</span>
          </h2>
          <div className="relative w-40 h-40 lg:w-48 lg:h-48">
            <Image
              src="/images/manoj-sethi.jpg"
              alt="Manoj Sethi, Property Specialist"
              fill
              sizes="192px"
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
            16 years in real estate and &#8377;250+ crore in deals closed, across Delhi NCR and Vrindavan.
            Manoj will tell you what a plot is really worth, and stay straight with you from the first call
            through registry.
          </p>
          <Button href="/about">More about Manoj</Button>
        </div>
      </Section>

      {/* How we help */}
      <Section bg="muted" width="wide" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">How we help</h2>
          <p className="text-lg text-gray-600">
            Whether you&apos;re buying land to live on, to invest, or to build.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className="group premium-card rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-(--color-navy) mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{svc.line}</p>
                <span className="flex items-center text-(--color-navy) font-semibold group-hover:text-(--color-gold) transition-colors">
                  Learn more
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white" className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-600">The things buyers ask us most.</p>
          </div>
          <div className="animate-fade-in-up">
            <Accordion
              items={[
                {
                  id: "areas",
                  question: "Which areas do you serve?",
                  answer:
                    "Delhi NCR (Sonipat, Gurgaon, Delhi) and Vrindavan, plus the areas nearby.",
                },
                {
                  id: "types",
                  question: "What types of land do you cover?",
                  answer:
                    "Mainly residential plots, farmland and farmhouse plots across Vrindavan, Sonipat and Gurgaon.",
                },
                {
                  id: "different",
                  question: "What makes Property Specialist different?",
                  answer:
                    "We tell you what a plot is really worth, not just the asking price, and there is no pressure. You deal with us directly and we stay involved through registry.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" bg="muted" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Badge>Have a plot in mind?</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">
            Want to see some plots?
          </h2>
          <p className="text-lg mb-8 text-gray-600 leading-relaxed">
            Call or WhatsApp and tell us what you&apos;re looking for. We&apos;ll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={TEL_HREF}>Call now</Button>
            <Button
              href={whatsapp("Hi Property Specialist, I'd like to talk about a plot")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              WhatsApp us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
