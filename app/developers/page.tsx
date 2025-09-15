import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Services (B2B)",
  description:
    "Launch projects in Delhi NCR & Vrindavan with sales systems, team building, and ROI-focused execution.",
  alternates: { canonical: "/developers" },
};

import Section from "../(site)/components/ui/Section";
import Icon from "../(site)/components/ui/Icon";
import Button from "../(site)/components/ui/Button";
import Image from "next/image";

export default function DevelopersPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/hero-background.jpg" alt="" fill priority className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
              B2B Solutions
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Developer Services</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Launch and scale projects with proven systems that drive sales, team performance, and ROI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact"><Button className="px-8 py-3">Talk to Us</Button></a>
              <a href="/investors"><Button variant="secondary" className="px-8 py-3">For Investors</Button></a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image 
                src="/images/hero-developers.jpg" 
                alt="Real Estate Development Projects" 
                width={500} 
                height={400} 
                className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-4">Our Developer Solutions</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Comprehensive services designed to accelerate your project success</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="briefcase" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Go-to-Market</h3>
            <p className="text-gray-600 text-sm">Positioning, messaging, and channel strategy.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="bolt" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Sales Engine</h3>
            <p className="text-gray-600 text-sm">Pipeline, lead-gen, and conversion processes.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="building" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Team & Training</h3>
            <p className="text-gray-600 text-sm">Hiring, training, and performance management.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">ROI & Liquidation</h3>
            <p className="text-gray-600 text-sm">Inventory plans with measurable outcomes.</p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-6">What We Deliver</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">From launch to sell-through, we build an accountable system that aligns product, pricing, and promotion to your absorption targets.</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Research-driven positioning and pricing support</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Marketing operations and campaign execution</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Daily sales huddles, dashboards, and reviews</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[--color-brand] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-700">Channel partners and event-led demand</span>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact"><Button className="px-8 py-4 text-lg">Get Started Today</Button></a>
          </div>
        </div>
      </Section>
      
      <Section id="contact" className="border-t bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Get Started?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-navy]">Ready to Scale Your Project?</h2>
          <p className="text-lg mb-8 text-gray-700">Let’s discuss how our proven systems can accelerate your development success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102">
              <Button className="px-8 py-3">📞 Call Now</Button>
            </a>
            <a href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20discuss%20developer%20services" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="px-8 py-3">💬 WhatsApp Us</Button>
            </a>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Direct Contact</h3>
                <p className="text-gray-600">📧 manojsethi@propertyspecialist.com</p>
                <p className="text-gray-600">📱 +91 99100 70102</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Business Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


