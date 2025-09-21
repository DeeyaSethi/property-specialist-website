import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast — The Real Estate Edge",
  description:
    "Trends in Delhi NCR & Vrindavan, opportunities, and interviews with developers, investors, and experts.",
  alternates: { canonical: "/podcast" },
};

import Section from "../(site)/components/ui/Section";
import Image from "next/image";
import Button from "../(site)/components/ui/Button";

export default function PodcastPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="relative overflow-hidden py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/Podcast.jpg" alt="" fill priority className="object-cover opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[--color-navy]/20" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
              Podcast & Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">The Real Estate Edge</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">Trends, opportunities, and interviews with developers, investors, and experts.</p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact"><Button className="px-8 py-3">Be a Guest</Button></a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up z-10">
            <div className="relative">
              <Image 
                src="/images/DelhiNCRSkyline.jpg" 
                alt="Real Estate Podcast & Insights" 
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
          <h2 className="text-3xl font-bold text-[--color-navy] mb-8">Upcoming Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🏡</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Vrindavan Outlook</h3>
              <p className="text-gray-600 text-sm">Vrindavan residential market outlook and opportunities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌳</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Farmhouse Investments</h3>
              <p className="text-gray-600 text-sm">Farmhouses as lifestyle and investment opportunities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[--color-brand] text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="font-bold text-[--color-navy] mb-2">Due Diligence</h3>
              <p className="text-gray-600 text-sm">Land deals and comprehensive due diligence processes</p>
            </div>
          </div>
          <div className="mt-12">
            <a href="#contact"><Button className="px-8 py-4 text-lg">Join Our Podcast</Button></a>
          </div>
        </div>
      </Section>
      
      <Section id="contact" className="border-t bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full animate-pulse"></span>
            Join the Conversation
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-navy]">Be a Guest on Our Show</h2>
          <p className="text-lg mb-8 text-gray-700">Share your real estate expertise and insights with our audience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102">
              <Button className="px-8 py-3">📞 Call Now</Button>
            </a>
            <a href="https://wa.me/919910070102?text=Hi%20Property%20Specialist%2C%20I%27d%20like%20to%20be%20a%20guest%20on%20your%20podcast" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="px-8 py-3">💬 WhatsApp Us</Button>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}


