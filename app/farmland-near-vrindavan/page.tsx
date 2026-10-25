import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";

export const metadata: Metadata = {
  title: "Farmland & Plots near Vrindavan",
  description:
    "Plots and farmland near Vrindavan and Mathura, close to the temples, Parikrama Marg and the Yamuna Expressway. We check MVDA approval and clear title, and walk the site with you.",
  alternates: { canonical: "/farmland-near-vrindavan" },
};

const btn =
  "inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
const btnPrimary = `${btn} bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] hover:scale-105`;
const btnSecondary = `${btn} bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg`;
const WA = "https://wa.me/919910070102?text=Hi%2C%20I%27m%20interested%20in%20farmland%20near%20Vrindavan";

export default function FarmlandNearVrindavanPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" className="py-10 md:py-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-[--color-brand] text-[--color-brand] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[--color-brand] rounded-full"></span>
            Vrindavan &amp; Mathura, Uttar Pradesh
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[--color-navy] mb-6 leading-tight">Plots &amp; Farmland near Vrindavan &amp; Mathura</h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Land close to the temples, Parikrama Marg and the Yamuna Expressway. A lot of land here sells without clean approvals, so we check MVDA approval and title first. 28 years in this market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Where we work around Vrindavan</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">We know which approaches and colonies are clean, and which to stay away from, so you buy with your eyes open.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Chhatikara Road</h3>
              <p className="text-gray-600 text-sm">The main Vrindavan approach off the Yamuna Expressway, with gated plotted projects and farmland.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Parikrama Marg &amp; temple side</h3>
              <p className="text-gray-600 text-sm">Closer to Banke Bihari and Prem Mandir, for a second home within reach of the temples.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Goverdhan &amp; Chhata</h3>
              <p className="text-gray-600 text-sm">Farmland and larger parcels around Goverdhan, popular for farmhouses and for holding.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-[--color-navy] mb-2">Along the Yamuna Expressway</h3>
              <p className="text-gray-600 text-sm">Land with fast road access to Noida and Agra, and to the new Noida (Jewar) airport.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">What we check before we recommend land</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">Vrindavan has a lot of unapproved land changing hands. This is what we go through before you put any money down.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">MVDA approval</h3>
              <p className="text-gray-600 text-sm">Whether the colony is approved by the Mathura-Vrindavan Development Authority, not an unapproved layout.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Clear title</h3>
              <p className="text-gray-600 text-sm">We check the title and mutation in the Bhulekh UP records, so you know the seller can actually sell.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-[--color-navy] mb-2">Land use</h3>
              <p className="text-gray-600 text-sm">Whether farmland is still agricultural, and what a Section 143 conversion to residential involves.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-[--color-muted]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-navy] mb-3">Why people are buying near Vrindavan</h2>
          <ul className="content grid gap-3 text-gray-700">
            <li>Steady demand from devotees and families who want a second home near the temples.</li>
            <li>The Yamuna Expressway puts it within easy reach of Noida, Agra and the new Noida (Jewar) airport.</li>
            <li>Farmland around Goverdhan and Chhata suits buyers who want acreage and a quiet retreat.</li>
            <li>Because so much land here is unapproved, clean MVDA-approved plots hold their value better.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-6">We will give you the real rate for a specific pocket when you call, not a headline number.</p>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-[--color-muted]">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[--color-navy]">Want to see land near Vrindavan?</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will shortlist a few and walk the site with you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+919910070102" className={btnPrimary}>Call us</a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Ask on WhatsApp</a>
          </div>
          <p className="text-sm text-gray-600">Also looking elsewhere? See <a href="/plots-in-sonipat" className="font-semibold text-[--color-navy] underline">plots in Sonipat</a> or <a href="/plots-in-gurgaon" className="font-semibold text-[--color-navy] underline">plots in Gurgaon</a>.</p>
        </div>
      </Section>
    </main>
  );
}
