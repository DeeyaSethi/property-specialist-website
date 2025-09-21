import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Manoj Sethi",
  description:
    "Leading real estate authority with 28 years experience. Data-driven insights, strategic guidance, and contribution-focused solutions in Delhi NCR & Vrindavan.",
  alternates: { canonical: "/about" },
};

import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <Section bg="gradient" className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/About_Expertise.jpg" alt="" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-shadow-lg">
                Manoj Sethi
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed text-shadow font-medium">
                Leading authority in real estate, providing clients with research-driven insights, strategic guidance, and contribution-focused solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#expertise">
                  <Button className="px-10 py-4 text-lg font-bold">Discover My Approach</Button>
                </a>
                <a href="tel:+919910070102">
                  <Button variant="secondary" className="px-10 py-4 text-lg font-bold bg-white/95 text-[--color-brand] hover:bg-[--color-gold] hover:text-white">📞 Connect Now</Button>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-brand] to-[--color-gold] rounded-3xl transform rotate-3 opacity-30"></div>
                <Image
                  src="/images/manoj-sethi.jpg"
                  alt="Manoj Sethi - Property Specialist"
                  width={500}
                  height={600}
                  className="relative rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[--color-brand]">28</div>
                    <div className="text-base text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Professional Journey Section */}
      <Section id="expertise" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">Professional Journey</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                With a total professional experience of <strong className="text-[--color-brand]">28 years</strong>, Manoj has built expertise across multiple sectors, including education, loans, and real estate, developing skills in marketing, sales, operations, and business development.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Since <strong className="text-[--color-brand]">2020</strong>, he has been fully dedicated as a Property Specialist, focusing on the real estate markets of <strong className="text-[--color-brand]">Delhi NCR and Vrindavan</strong>, handling residential, commercial, farmhouses, and land investment opportunities.
              </p>
            </div>
          </div>
          
          {/* Track Record */}
          <div className="bg-gradient-to-br from-[--color-muted] to-white p-8 md:p-12 rounded-3xl mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-4 font-serif">Proven Track Record</h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                In the last five years, Manoj has successfully closed deals worth around <strong className="text-[--color-brand] text-2xl">₹250 crores</strong>, bringing a data-driven, strategic, and contribution-oriented approach to every property decision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">₹250Cr+</div>
                <div className="text-gray-600 font-medium">Deals Closed (5 Years)</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">28</div>
                <div className="text-gray-600 font-medium">Years Total Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[--color-brand] mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years as Property Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-gradient-to-br from-[--color-navy] to-[--color-brand] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">My Philosophy</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              "Real estate is not about selling—it's about <span className="text-[--color-gold] font-bold">adding value</span>, providing <span className="text-[--color-gold] font-bold">clarity</span>, and ensuring clients make <span className="text-[--color-gold] font-bold">informed and confident</span> property choices."
            </p>
          </div>
        </div>
      </Section>

      {/* Why Work With Manoj Section */}
      <Section className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">Why Work with Manoj Sethi</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience the difference of working with a true property specialist who prioritizes your success above all else.
            </p>
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
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Data-Driven Insights</h3>
                  <p className="text-gray-600 leading-relaxed">Every property evaluated with a research-backed, realistic approach that ensures you make informed decisions based on solid market data.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Market Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">In-depth knowledge of emerging locations, infrastructure growth, and investment-worthy projects across Delhi NCR and Vrindavan markets.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Strategic Contribution</h3>
                  <p className="text-gray-600 leading-relaxed">Guides clients through every stage of acquisition, ensuring long-term value creation and strategic positioning for maximum returns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[--color-brand] text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[--color-navy] mb-3 font-serif">Trusted Specialist</h3>
                  <p className="text-gray-600 leading-relaxed">Acts as a partner, not just a consultant, contributing meaningfully to every property decision with genuine care for your success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-[--color-muted] border-t border-gray-200">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-6 py-3 rounded-full text-sm font-bold mb-8">
            <span className="w-3 h-3 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Get Started?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-6 font-serif">Let's Discuss Your Property Goals</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Experience the difference of working with a data-driven, contribution-focused property specialist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="tel:+919910070102">
              <Button className="px-12 py-5 text-lg font-bold">📞 Call Manoj Sethi</Button>
            </a>
            <a 
              href="https://wa.me/919910070102?text=Hi%20Manoj%2C%20I%27d%20like%20to%20discuss%20real%20estate%20opportunities%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="px-12 py-5 text-lg font-bold">💬 WhatsApp Direct</Button>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}