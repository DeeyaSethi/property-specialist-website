import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Manoj Sethi",
  description:
    "Manoj Sethi has worked in real estate since 2010, with 28 years in business overall. He helps buyers find plots and farmland in Delhi NCR and Vrindavan, and checks the paperwork before he recommends anything.",
  alternates: { canonical: "/about" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const btnWhite = `${btn} bg-white text-[--color-navy] hover:bg-[--color-gold] hover:text-white`;
const btnOnDark = `${btn} bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[--color-navy]`;
const WA = "https://wa.me/919910070102?text=Hi%20Manoj%2C%20I%27d%20like%20to%20talk%20about%20a%20plot";

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <Section bg="gradient" className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/About_Expertise.jpg" alt="" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-shadow-lg">Manoj Sethi</h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-shadow font-medium">
                I have worked in real estate since 2010, helping families and investors buy plots and farmland across Delhi NCR and Vrindavan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#expertise" className={btnOnDark}>How I work</a>
                <a href="tel:+919910070102" className={btnWhite}>Call me</a>
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-brand] to-[--color-gold] rounded-3xl transform rotate-3 opacity-30"></div>
                <Image
                  src="/images/manoj-sethi.jpg"
                  alt="Manoj Sethi, Property Specialist"
                  width={500}
                  height={600}
                  className="relative rounded-3xl object-cover shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[--color-brand]">16</div>
                    <div className="text-base text-gray-600 font-medium">Years in real estate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Background */}
      <Section id="expertise" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">My background</h2>
            <div className="max-w-4xl mx-auto text-left">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                I have 28 years of working experience across education, loans and real estate. That means I understand both the money side of a purchase and the paperwork behind it.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Since 2010 I have focused on real estate, and today most of my work is plots and farmland in Sonipat, Gurgaon and around Vrindavan. Over that time I have closed more than &#8377;250 crore in deals.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[--color-muted] to-white p-8 md:p-12 rounded-3xl mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">16</div>
                <div className="text-gray-600 font-medium">Years in real estate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">&#8377;250 Cr+</div>
                <div className="text-gray-600 font-medium">In deals closed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">3</div>
                <div className="text-gray-600 font-medium">Markets I know well</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How I work */}
      <Section className="bg-gradient-to-br from-[--color-navy] to-[--color-brand] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">How I work</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              &ldquo;My job is to tell you the truth about a plot before you buy it. I check the title, the approvals and who is really selling, and I come to the site with you. If a plot is not right for you, I will say so.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* Why buyers work with me */}
      <Section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">Why buyers work with me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">An honest read on price</h3>
                  <p className="text-gray-600 leading-relaxed">I will tell you what a plot is actually worth, not just what the seller is asking.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Local knowledge</h3>
                  <p className="text-gray-600 leading-relaxed">I have worked these markets for years, so I know which pockets are worth it and which to avoid.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Paperwork checked first</h3>
                  <p className="text-gray-600 leading-relaxed">I check the title, the mutation and the approvals before I recommend any plot, so there are no surprises later.</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">With you to the end</h3>
                  <p className="text-gray-600 leading-relaxed">I come to the site with you and stay involved through registry. You deal with me, not a call centre.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section className="bg-[--color-muted] border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">Let us talk about what you are looking for</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Tell me your budget and what the land is for, and I will point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-4">
            <a href="tel:+919910070102" className={btnPrimary}>Call Manoj Sethi</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>WhatsApp us</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
