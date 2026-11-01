import type { Metadata } from "next";
import Image from "next/image";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const metadata: Metadata = {
  title: "About Manoj Sethi",
  description:
    "Manoj Sethi has worked in real estate since 2010, with 28 years of professional experience overall. We help buyers find plots and farmland in Delhi NCR and Vrindavan, and check the paperwork before we recommend anything.",
  alternates: { canonical: "/about" },
};

const WA = whatsapp("Hi Manoj, I'd like to talk about a plot");

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <Section bg="gradient" size="lg" width="wide" className="overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Badge>About Property Specialist</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-navy) leading-[1.08] mb-5">
              Manoj Sethi
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I have worked in real estate since 2010, helping families and investors buy plots and farmland
              across Delhi NCR and Vrindavan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button href={TEL_HREF}>Call us</Button>
              <Button href="#how-we-work" variant="secondary">
                How we work
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/manoj-sethi.jpg"
                alt="Manoj Sethi, Property Specialist"
                fill
                sizes="(max-width: 1024px) 80vw, 460px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-4 sm:-right-5 bg-white rounded-2xl shadow-lg ring-1 ring-black/5 px-5 py-4 text-center">
              <div className="font-serif text-3xl font-bold text-(--color-navy) leading-none">16</div>
              <div className="text-sm text-gray-600 mt-1">Years in real estate</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Background */}
      <Section id="expertise" className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-6">Our background</h2>
            <div className="text-left space-y-5">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Manoj brings 28 years of working experience across education, loans and real estate, so we
                understand both the money side of a purchase and the paperwork behind it.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Manoj moved into real estate full time in 2010, and today our focus is plots and farmland in
                Sonipat, Gurgaon and around Vrindavan. Over that time we have closed more than &#8377;250
                crore in deals.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="text-3xl font-bold text-(--color-navy) font-serif mb-2">16</div>
              <div className="text-gray-600 font-medium">Years in real estate</div>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="text-3xl font-bold text-(--color-navy) font-serif mb-2">&#8377;250 Cr+</div>
              <div className="text-gray-600 font-medium">In deals closed</div>
            </div>
            <div className="premium-card p-7 rounded-xl text-center">
              <div className="text-3xl font-bold text-(--color-navy) font-serif mb-2">3</div>
              <div className="text-gray-600 font-medium">Markets we know well</div>
            </div>
          </div>
        </div>
      </Section>

      {/* How we work */}
      <Section id="how-we-work" className="bg-gradient-to-br from-(--color-navy) to-(--color-brand) text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">How we work</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-white">
              &ldquo;My job is to tell you the truth about a plot before you buy it. I check the title, the
              approvals and who is really selling, and I come to the site with you. If a plot is not right
              for you, I will say so.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Why buyers work with us */}
      <Section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy)">Why buyers work with us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-5 premium-card p-6 rounded-xl">
              <div className="w-14 h-14 bg-(--color-navy) text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-(--color-navy) mb-2">An honest read on price</h3>
                <p className="text-gray-600 leading-relaxed">
                  We tell you what a plot is actually worth, not just what the seller is asking.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 premium-card p-6 rounded-xl">
              <div className="w-14 h-14 bg-(--color-navy) text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-(--color-navy) mb-2">Local knowledge</h3>
                <p className="text-gray-600 leading-relaxed">
                  We have worked these markets for years, so we know which pockets are worth it and which to
                  avoid.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 premium-card p-6 rounded-xl">
              <div className="w-14 h-14 bg-(--color-navy) text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-(--color-navy) mb-2">Paperwork checked first</h3>
                <p className="text-gray-600 leading-relaxed">
                  We check the title, the mutation and the approvals before we recommend any plot, so there
                  are no surprises later.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5 premium-card p-6 rounded-xl">
              <div className="w-14 h-14 bg-(--color-navy) text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-(--color-navy) mb-2">With you to the end</h3>
                <p className="text-gray-600 leading-relaxed">
                  We come to the site with you and stay involved through registry. You deal with us directly,
                  not a call centre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section bg="muted" className="border-t border-gray-200">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-4">
            Let us talk about what you are looking for
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Tell us your budget and what the land is for, and we will point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href={TEL_HREF}>Call Manoj Sethi</Button>
            <Button href={WA} target="_blank" rel="noopener noreferrer" variant="secondary">
              WhatsApp us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
