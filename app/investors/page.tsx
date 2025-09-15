import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors & HNIs",
  description:
    "Smart real estate investments with expert management across residential, commercial, farmhouses, and land.",
  alternates: { canonical: "/investors" },
};

import Section from "../(site)/components/ui/Section";
import Icon from "../(site)/components/ui/Icon";
import Image from "next/image";
import Button from "../(site)/components/ui/Button";

export default function InvestorsPage() {
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
              Premium Investments
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Investors & HNIs</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Smart real estate investments with expert management and transparent execution.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact"><Button className="px-8 py-3">Discuss Deals</Button></a>
              <a href="/buyers"><Button variant="secondary" className="px-8 py-3">For Buyers</Button></a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image 
                src="/images/hero-investors.jpg" 
                alt="Premium Investment Properties" 
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-4">Investment Opportunities</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Curated investment options with comprehensive due diligence</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="home" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Residential</h3>
            <p className="text-gray-600 text-sm">Plots, builder floors, and luxury apartments.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="building" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Commercial</h3>
            <p className="text-gray-600 text-sm">Offices, retail spaces, and showrooms.</p>
          </div>
          <div className="text-center p-6 rounded-xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="shield" className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[--color-navy] mb-2">Land & Due Diligence</h3>
            <p className="text-gray-600 text-sm">Farmhouses, industrial, and agriculture-linked land deals.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#contact"><Button className="px-8 py-4 text-lg">Explore Investment Options</Button></a>
        </div>
      </Section>
      
      <Section id="contact" className="border-t bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Ready to Invest?
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-navy]">Start Your Investment Journey</h2>
          <p className="text-lg mb-8 text-gray-700">Connect with our investment experts for personalized opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102">
              <Button className="px-8 py-3">📞 Call Now</Button>
            </a>
            <a href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20discuss%20investment%20opportunities" target="_blank" rel="noopener noreferrer">
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
                <h3 className="text-lg font-semibold mb-2 text-[--color-navy]">Investment Hours</h3>
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


