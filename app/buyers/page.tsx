import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Buyers (B2C)",
  description:
    "Find your dream property in Delhi NCR & Vrindavan: plots, builder floors, apartments, villas.",
  alternates: { canonical: "/buyers" },
};

import Section from "../(site)/components/ui/Section";
import Image from "next/image";
import Button from "../(site)/components/ui/Button";

export default function BuyersPage() {
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
              Home Buying
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Home Buyers (B2C)</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Shortlisted options matched to your needs and budget, with transparent guidance.</p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact"><Button className="px-8 py-3">Get Options</Button></a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image 
                src="/images/hero-buyers.jpg" 
                alt="Home Buying Experience" 
                width={500} 
                height={400} 
                className="rounded-2xl shadow-2xl opacity-100 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[--color-brand]/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-8">What We Help You Buy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Apartments</h3>
              <p className="text-gray-600 text-sm">Ready-to-move and under-construction apartments</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏡</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Builder Floors</h3>
              <p className="text-gray-600 text-sm">Builder floors and plotted developments</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏨</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Luxury Villas</h3>
              <p className="text-gray-600 text-sm">Luxury villas and spiritual townships in Vrindavan</p>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact"><Button className="px-8 py-4 text-lg">Find Your Dream Home</Button></a>
          </div>
        </div>
      </Section>
      
      <Section id="contact" className="border-t bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Buy?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-navy]">Find Your Perfect Home</h2>
          <p className="text-lg mb-8 text-gray-700">Let us help you discover the ideal property that matches your dreams and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102">
              <Button className="px-8 py-3">📞 Call Now</Button>
            </a>
            <a href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20find%20my%20dream%20home" target="_blank" rel="noopener noreferrer">
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
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Consultation Hours</h3>
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


