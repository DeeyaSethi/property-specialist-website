import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Manoj Sethi",
  description:
    "Marketing and sales professional with 25+ years experience in real estate. Building systems, teams, and brand positioning.",
  alternates: { canonical: "/about" },
};

import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-background.jpg" alt="" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
                Founder & CEO
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[--color-navy] mb-4 leading-tight">
                Meet Manoj Sethi
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Transforming real estate dreams into reality with 25+ years of unmatched expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#experience">
                  <Button className="px-8 py-4 text-lg">Discover My Journey</Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary" className="px-8 py-4 text-lg">Get In Touch</Button>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[--color-brand] to-[--color-navy] rounded-3xl transform rotate-2 opacity-20"></div>
                <Image
                  src="/images/manoj-sethi.jpg"
                  alt="Manoj Sethi - Property Specialist Founder & CEO"
                  width={500}
                  height={600}
                  className="relative rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[--color-brand]">25+</div>
                    <div className="text-base text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience & Expertise Section */}
      <Section id="experience" className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-4">Professional Journey</h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A marketing and sales professional with over 25 years of business experience, 
              including significant achievements in real estate across Delhi NCR and Vrindavan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[--color-navy] mb-6">Core Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[--color-brand] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-navy] mb-1">End-to-End Business Systems</h4>
                    <p className="text-gray-600 text-sm">Creating comprehensive business systems for developers from concept to execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[--color-brand] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-navy] mb-1">Team Building Excellence</h4>
                    <p className="text-gray-600 text-sm">Building high-performing sales and marketing teams from scratch with proven methodologies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[--color-brand] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-navy] mb-1">Strategic Framework Design</h4>
                    <p className="text-gray-600 text-sm">Designing comprehensive frameworks for operations, HR, R&D, and finance management.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[--color-brand] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[--color-navy] mb-1">Brand Positioning & Marketing</h4>
                    <p className="text-gray-600 text-sm">Positioning and branding projects to attract the right investors and buyers effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[--color-muted] to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[--color-navy] mb-6">360° Real Estate Approach</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With a proven track record across Delhi NCR and Vrindavan, I bring a comprehensive 
                360° approach to real estate — covering everything from residential to commercial, 
                farmhouses to strategic land investments.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-[--color-brand]">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-[--color-brand]">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-[--color-brand]">₹500Cr+</div>
                  <div className="text-sm text-gray-600">Deals Closed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-[--color-brand]">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <div className="bg-[--color-brand] text-white p-6 rounded-xl">
                <h4 className="font-bold mb-2">Vision Statement</h4>
                <p className="text-sm opacity-90">
                  "To make Property Specialist the go-to brand for real estate advisory, 
                  investment, and project sales management in India."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Let's Connect
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-4">Ready to Transform Your Real Estate Journey?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            Connect with me directly to discuss your real estate goals and discover how my expertise can help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102">
              <Button className="px-10 py-4 text-lg">📞 Call Manoj Sethi</Button>
            </a>
            <a 
              href="https://wa.me/919910070102?text=Hi%20Manoj%2C%20I%27d%20like%20to%20discuss%20real%20estate%20opportunities%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="px-10 py-4 text-lg">💬 WhatsApp Direct</Button>
            </a>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Direct Contact</h3>
                <p className="text-gray-600">📧 manojsethi@propertyspecialist.com</p>
                <p className="text-gray-600">📱 +91 99100 70102</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Office Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Service Areas</h3>
                <p className="text-gray-600">Delhi NCR, Noida, Gurgaon</p>
                <p className="text-gray-600">Vrindavan & Nearby Areas</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


