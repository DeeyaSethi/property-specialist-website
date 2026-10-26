import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import CityListings from "../(site)/components/CityListings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Plots in Sonipat & Kundli",
  description:
    "Residential plots and farmland in Sonipat and Kundli, near NH-44 and the KMP Expressway. We check approvals and clear title, and visit the site with you.",
  alternates: { canonical: "/plots-in-sonipat" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27m%20looking%20for%20plots%20in%20Sonipat";

export default async function PlotsInSonipatPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="py-10 md:py-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
            Sonipat &amp; Kundli, Haryana
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Plots &amp; Farmland in Sonipat &amp; Kundli</h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Honest advice on where to buy near NH-44, the KMP Expressway and the education-city belt, and what to check before you pay. 28 years working this market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
        </div>
      </Section>

      <CityListings city="Sonipat" title="Plots we have in Sonipat right now" />

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Where we work in Sonipat</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">We stick to the pockets we know well, so we can tell you honestly which ones fit your budget and your plan.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Kundli</h3>
              <p className="text-gray-600 text-sm">On the Delhi border along NH-44, close to the KMP Expressway interchange. Suits buyers who want to stay near the city.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Sectors 34, 35 &amp; 63</h3>
              <p className="text-gray-600 text-sm">Developed residential sectors with plotted options. We will tell you which are DTCP-approved and registry-ready.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Rajiv Gandhi Education City</h3>
              <p className="text-gray-600 text-sm">Home to Ashoka University, with O.P. Jindal also in Sonipat. The area keeps steady student and rental demand.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Ganaur &amp; Kharkhoda</h3>
              <p className="text-gray-600 text-sm">More affordable land further out, including the belt near the new Maruti plant at Kharkhoda. Better for holding than for building right away.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">What we check before we recommend a plot</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">A cheap plot with a messy title is not cheap. This is what we go through before you put any money down.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Approval</h3>
              <p className="text-gray-600 text-sm">Whether the colony is DTCP-licensed or HSVP, and not an unauthorised layout.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Clear title</h3>
              <p className="text-gray-600 text-sm">We trace the title and mutation on Jamabandi, so you know the seller can actually sell.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Access and use</h3>
              <p className="text-gray-600 text-sm">Road width, electricity and water, and whether the land is residential or still agricultural.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Why people are buying in Sonipat</h2>
          <ul className="content grid gap-3 text-gray-700">
            <li>It sits on NH-44, with the KMP (Kundli-Manesar-Palwal) Expressway linking it across the NCR.</li>
            <li>The new Maruti plant at Kharkhoda is bringing jobs and roadwork to the district, and a Namo Bharat rapid-rail line to Panipat is planned through here.</li>
            <li>The education-city belt around Ashoka University keeps rental demand steady.</li>
            <li>Plots here still cost a fraction of Gurgaon, so it suits first-time land buyers and long-term holders.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-6">We will give you the real rate for a specific sector when you call, not a headline number.</p>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy]">Want to see plots in Sonipat?</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will shortlist a few and take you to see them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
          <p className="text-sm text-gray-600">Also looking elsewhere? See <a href="/plots-in-gurgaon" className="font-semibold text-[--color-navy] underline">plots in Gurgaon</a> or <a href="/farmland-near-vrindavan" className="font-semibold text-[--color-navy] underline">farmland near Vrindavan</a>.</p>
        </div>
      </Section>
    </main>
  );
}
