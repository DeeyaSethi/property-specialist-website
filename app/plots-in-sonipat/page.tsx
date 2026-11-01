import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import CityListings from "../(site)/components/CityListings";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Plots in Sonipat & Kundli",
  description:
    "Residential plots and farmland in Sonipat and Kundli, near NH-44 and the KMP Expressway. We check approvals and clear title, and visit the site with you.",
  alternates: { canonical: "/plots-in-sonipat" },
};

export default async function PlotsInSonipatPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge>Sonipat &amp; Kundli, Haryana</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">Plots &amp; farmland in Sonipat &amp; Kundli</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Honest advice on where to buy near NH-44, the KMP Expressway and the education-city belt, and what to check before you pay. 16 years in real estate across the NCR and Vrindavan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={TEL_HREF}>Call us</Button>
            <Button href={whatsapp("Hi, I'm looking for plots in Sonipat")} target="_blank" rel="noopener noreferrer" variant="secondary">Ask on WhatsApp</Button>
          </div>
        </div>
      </Section>

      <CityListings city="Sonipat" title="Plots we have in Sonipat right now" />

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">Where we work in Sonipat</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">We stick to the pockets we know well, so we can tell you honestly which ones fit your budget and your plan.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Kundli</h3>
              <p className="text-gray-600 text-sm">On the Delhi border along NH-44, close to the KMP Expressway interchange. Suits buyers who want to stay near the city.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Sectors 34, 35 &amp; 63</h3>
              <p className="text-gray-600 text-sm">Developed residential sectors with plotted options. We will tell you which are DTCP-approved and registry-ready.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Rajiv Gandhi Education City</h3>
              <p className="text-gray-600 text-sm">Home to Ashoka University, with O.P. Jindal also in Sonipat. The area keeps steady student and rental demand.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Ganaur &amp; Kharkhoda</h3>
              <p className="text-gray-600 text-sm">More affordable land further out, including the belt near the new Maruti plant at Kharkhoda. Better for holding than for building right away.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">What we check before we recommend a plot</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">A cheap plot with a messy title is not cheap. This is what we go through before you put any money down.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="premium-card p-6 rounded-xl">
              <h3 className="font-bold text-(--color-navy) mb-2">Approval</h3>
              <p className="text-gray-600 text-sm">Whether the colony is DTCP-licensed or HSVP, and not an unauthorised layout.</p>
            </div>
            <div className="premium-card p-6 rounded-xl">
              <h3 className="font-bold text-(--color-navy) mb-2">Clear title</h3>
              <p className="text-gray-600 text-sm">We trace the title and mutation on Jamabandi, so you know the seller can actually sell.</p>
            </div>
            <div className="premium-card p-6 rounded-xl">
              <h3 className="font-bold text-(--color-navy) mb-2">Access and use</h3>
              <p className="text-gray-600 text-sm">Road width, electricity and water, and whether the land is residential or still agricultural.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">Why people are buying in Sonipat</h2>
          <ul className="content grid gap-3 text-gray-700">
            <li>It sits on NH-44, with the KMP (Kundli-Manesar-Palwal) Expressway linking it across the NCR.</li>
            <li>The new Maruti plant at Kharkhoda is bringing jobs and roadwork to the district, and a Namo Bharat rapid-rail line to Panipat is planned through here.</li>
            <li>The education-city belt around Ashoka University keeps rental demand steady.</li>
            <li>Plots here still cost a fraction of Gurgaon, so it suits first-time land buyers and long-term holders.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-6">We will give you the real rate for a specific sector when you call, not a headline number.</p>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-(--color-muted)">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">Want to see plots in Sonipat?</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will shortlist a few and take you to see them.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button href={TEL_HREF}>Call us</Button>
            <Button href={whatsapp("Hi, I'm looking for plots in Sonipat")} target="_blank" rel="noopener noreferrer" variant="secondary">Ask on WhatsApp</Button>
          </div>
          <p className="text-sm text-gray-600">Also looking elsewhere? See <a href="/plots-in-gurgaon" className="font-semibold text-(--color-navy) underline">plots in Gurgaon</a> or <a href="/farmland-near-vrindavan" className="font-semibold text-(--color-navy) underline">farmland near Vrindavan</a>.</p>
        </div>
      </Section>
    </main>
  );
}
