import Link from "next/link";
import Image from "next/image";
import Section from "./(site)/components/ui/Section";
import Button from "./(site)/components/ui/Button";
import Badge from "./(site)/components/ui/Badge";
import Accordion from "./(site)/components/ui/Accordion";
import { TEL_HREF, PHONE_DISPLAY, whatsapp } from "./lib/contact";

const CITIES = ["Sonipat", "Gurgaon", "Vrindavan"] as const;

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
              Straight answers on price, approvals and what&apos;s actually worth buying. We check the
              paperwork and visit the site with you. Just call or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button href="#contact">Talk to us</Button>
              <Button href="#sections" variant="secondary">
                Browse by location
              </Button>
            </div>
            <div>
              <p className="text-xs font-semibold text-(--color-navy)/70 uppercase tracking-[0.18em] mb-3">
                Where we work
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                {CITIES.map((city) => (
                  <a
                    key={city}
                    href={`#${city.toLowerCase()}`}
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

      {/* Meet Manoj Sethi */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) leading-tight">
            Meet <span className="text-(--color-gold)">Manoj Sethi</span>
          </h2>

          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            <Image
              src="/images/manoj-sethi.jpg"
              alt="Manoj Sethi, Property Specialist"
              fill
              sizes="224px"
              className="object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-2 -right-2 bg-(--color-royal-gold) text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border-4 border-white">
              16 Years
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
            <span className="font-semibold text-(--color-navy)">16 years</span> in real estate and{" "}
            <span className="font-semibold text-(--color-navy)">&#8377;250+ crore</span> in deals closed.
            Manoj works across Delhi NCR and Vrindavan, and he will tell you what a plot is really worth
            before you buy it.
          </p>

          <Button href="/about">More about Manoj</Button>
        </div>
      </Section>

      {/* Sonipat */}
      <Section id="sonipat" bg="muted" width="wide" className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/sonipat-farmhouse.png"
              alt="Plots and farmland in Sonipat"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Sonipat</h3>
              <p className="text-base text-white/90">Plots &amp; farmland</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-5">
              Plots &amp; farmland in Sonipat
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most buyers here are weighing plots around Kundli, NH-44, the KMP Expressway and the new
              university belt. Tell us your budget and how you want to use it, and we&apos;ll show you which
              pockets are worth it and which to avoid. We check DTCP approval and clear title before
              recommending anything, and we take you to the site.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button href={TEL_HREF}>Call about Sonipat</Button>
              <Button
                href={whatsapp("Hi, I'm interested in plots in Sonipat")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                WhatsApp us
              </Button>
            </div>
            <Link
              href="/plots-in-sonipat"
              className="inline-block mt-5 font-semibold text-(--color-navy) hover:text-(--color-gold)"
            >
              View all plots in Sonipat &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Gurgaon */}
      <Section id="gurgaon" bg="white" width="wide" className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-5">
              Plots &amp; farmhouse land in Gurgaon
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We work the plot and farmhouse side of Gurgaon. Think New Gurgaon sectors, the Dwarka
              Expressway belt, and farmhouse land towards Sohna and Pataudi. Tell us how you want to use it
              and we&apos;ll give you an honest read on what your budget gets, and what to check before you
              pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button href={TEL_HREF}>Call about Gurgaon</Button>
              <Button
                href={whatsapp("Hi, I'm interested in plots in Gurgaon")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                WhatsApp us
              </Button>
            </div>
            <Link
              href="/plots-in-gurgaon"
              className="inline-block mt-5 font-semibold text-(--color-navy) hover:text-(--color-gold)"
            >
              View all plots in Gurgaon &rarr;
            </Link>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/gurgaon-skyline.png"
              alt="Plots and farmhouse land in Gurgaon"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Gurgaon</h3>
              <p className="text-base text-white/90">Plots &amp; farmhouse land</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vrindavan */}
      <Section id="vrindavan" bg="muted" width="wide" className="border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/vrindavan-luxury.png"
              alt="Plots and farmland near Vrindavan"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Vrindavan</h3>
              <p className="text-base text-white/90">Plots &amp; farmland</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-5">
              Plots &amp; farmland near Vrindavan
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Plots and farmland around Vrindavan and Mathura, close to the temples, Parikrama Marg and the
              Yamuna Expressway. A lot of land here changes hands without clean approvals, so we check MVDA
              approval and title first, and walk the site with you before you decide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button href={TEL_HREF}>Call about Vrindavan</Button>
              <Button
                href={whatsapp("Hi, I'm interested in plots and farmland near Vrindavan")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                WhatsApp us
              </Button>
            </div>
            <Link
              href="/farmland-near-vrindavan"
              className="inline-block mt-5 font-semibold text-(--color-navy) hover:text-(--color-gold)"
            >
              View farmland near Vrindavan &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="sections" bg="muted" width="wide" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">How we help</h2>
          <p className="text-lg text-gray-600">
            Whether you&apos;re buying land to live on, to invest, or to build.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Link
            href="/investors"
            className="group premium-card rounded-xl overflow-hidden h-full flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src="/images/investors.jpg"
                alt="For investors and HNIs"
                fill
                sizes="(max-width: 1024px) 50vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Investors &amp; HNIs</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                Land picked for investors, with approvals and title checked first.
              </p>
              <span className="flex items-center text-(--color-navy) font-semibold group-hover:text-(--color-gold) transition-colors">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </div>
          </Link>

          <Link
            href="/buyers"
            className="group premium-card rounded-xl overflow-hidden h-full flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src="/images/hero-buyers.jpg"
                alt="For home buyers"
                fill
                sizes="(max-width: 1024px) 50vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Home buyers</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                Help finding and buying a plot or home across Delhi NCR and Vrindavan.
              </p>
              <span className="flex items-center text-(--color-navy) font-semibold group-hover:text-(--color-gold) transition-colors">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </div>
          </Link>

          <Link
            href="/finance"
            className="group premium-card rounded-xl overflow-hidden h-full flex flex-col"
          >
            <div className="relative h-48">
              <Image
                src="/images/Finance.jpg"
                alt="Finance and loans"
                fill
                sizes="(max-width: 1024px) 50vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Finance &amp; loans</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                Home loans, loan against property and NRI support.
              </p>
              <span className="flex items-center text-(--color-navy) font-semibold group-hover:text-(--color-gold) transition-colors">
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </div>
          </Link>

          <Link
            href="/about"
            className="group rounded-xl border border-(--color-navy)/10 overflow-hidden h-full flex flex-col bg-gradient-to-br from-(--color-navy) to-(--color-gold) sm:col-span-2 lg:col-span-1"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="w-11 h-11 bg-white/95 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-(--color-navy)" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">About Manoj Sethi</h3>
              <p className="text-white/90 text-sm mb-4 flex-1">In real estate since 2010.</p>
              <span className="flex items-center text-white font-semibold">
                Meet the founder
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </div>
          </Link>
        </div>
      </Section>

      {/* What we handle */}
      <Section bg="white" width="wide" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">What we handle</h2>
          <p className="text-lg text-gray-600">
            The kinds of land we work with across Delhi NCR and Vrindavan.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
            <Image
              src="/images/ResidentialProperties.jpg"
              alt="Residential plots"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-bold text-white">Plots</h3>
              <p className="text-sm text-white/90">Gated and sector plots</p>
            </div>
          </div>
          <div className="group relative h-64 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
            <Image
              src="/images/LuxuryFarmhouses.jpg"
              alt="Farmland and farmhouse land"
              fill
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <h3 className="text-xl font-bold text-white">Farmland</h3>
              <p className="text-sm text-white/90">Farmhouse and agricultural land</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section className="border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">
            Why buyers choose us
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            16 years in real estate across Delhi NCR and Vrindavan, and straight with you at every step.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="w-16 h-16 bg-(--color-navy) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold font-serif">16</span>
              </div>
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Years in real estate</h3>
              <p className="text-gray-600 text-sm">
                Selling plots and farmland across Delhi NCR and Vrindavan since 2010.
              </p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="w-16 h-16 bg-(--color-navy) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold font-serif">3</span>
              </div>
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Markets we know</h3>
              <p className="text-gray-600 text-sm">
                Sonipat, Gurgaon and Vrindavan. We stick to the areas we know well instead of claiming
                everywhere.
              </p>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="w-16 h-16 bg-(--color-navy) rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold font-serif">28</span>
              </div>
              <h3 className="text-lg font-bold text-(--color-navy) mb-2">Years of experience</h3>
              <p className="text-gray-600 text-sm">
                Across education, loans and real estate, behind every deal we do today.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted" className="border-t border-gray-200">
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
                    "We work across Delhi NCR (Sonipat, Gurgaon, Delhi) and Vrindavan, and the areas nearby.",
                },
                {
                  id: "invest",
                  question: "What types of land do you cover?",
                  answer:
                    "Mainly residential plots, farmland and farmhouse plots across Vrindavan, Sonipat and Gurgaon.",
                },
                {
                  id: "process",
                  question: "How do you handle due diligence?",
                  answer:
                    "We check the title, the mutation and the approvals, and we tell you who is really selling, before we recommend a plot.",
                },
                {
                  id: "experience",
                  question: "What makes Property Specialist different?",
                  answer:
                    "16 years in real estate, and we check the approvals and title before we recommend a plot. No pressure, and no surprises later.",
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
