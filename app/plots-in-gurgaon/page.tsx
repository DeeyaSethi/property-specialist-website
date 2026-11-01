import type { Metadata } from "next";
import Section from "../(site)/components/ui/Section";
import Button from "../(site)/components/ui/Button";
import Badge from "../(site)/components/ui/Badge";
import CityListings from "../(site)/components/CityListings";
import { TEL_HREF, whatsapp } from "../lib/contact";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Plots & Farmhouse Land in Gurgaon",
  description:
    "Plots and farmhouse land in Gurgaon, from New Gurgaon and the Dwarka Expressway belt to Sohna and Pataudi. We check DTCP approval and title, and visit the site with you.",
  alternates: { canonical: "/plots-in-gurgaon" },
};

export default async function PlotsInGurgaonPage() {
  return (
    <main className="font-sans">
      <Section bg="gradient" size="lg">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge>Gurgaon (Gurugram), Haryana</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-navy) leading-[1.1] mb-5">Plots &amp; farmhouse land in Gurgaon</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We work the plot and farmhouse side of Gurgaon, from New Gurgaon and the Dwarka Expressway belt to the farmhouse pockets near Sohna. Honest advice on what your budget actually gets. 16 years in real estate across the NCR and Vrindavan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href={TEL_HREF}>Call us</Button>
            <Button href={whatsapp("Hi, I'm looking for plots in Gurgaon")} target="_blank" rel="noopener noreferrer" variant="secondary">Ask on WhatsApp</Button>
          </div>
        </div>
      </Section>

      <CityListings city="Gurgaon" title="Plots we have in Gurgaon right now" />

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">Where we work in Gurgaon</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">Prices here swing a lot from one sector to the next, so we point you to the pockets that fit your budget and your reason for buying.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">New Gurgaon (Sectors 80 to 95)</h3>
              <p className="text-gray-600 text-sm">Licensed plotted and group-housing sectors off NH-48, more affordable than old Gurgaon.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Dwarka Expressway belt</h3>
              <p className="text-gray-600 text-sm">Sectors along the now-open Dwarka Expressway, a fast-developing corridor towards Delhi.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Sohna</h3>
              <p className="text-gray-600 text-sm">Weekend-farmhouse country along Sohna Road and the Aravalli foothills, south of the city.</p>
            </div>
            <div className="premium-card rounded-xl p-6">
              <h3 className="text-xl font-bold text-(--color-navy) mb-2">Pataudi &amp; Tauru</h3>
              <p className="text-gray-600 text-sm">Agricultural and farmhouse land further out, for buyers who want acreage at a lower rate.</p>
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
              <p className="text-gray-600 text-sm">Whether the colony holds a DTCP licence or is HSVP, and not an unauthorised layout.</p>
            </div>
            <div className="premium-card p-6 rounded-xl">
              <h3 className="font-bold text-(--color-navy) mb-2">Clear title</h3>
              <p className="text-gray-600 text-sm">We trace the title and mutation on Jamabandi, so you know the seller can actually sell.</p>
            </div>
            <div className="premium-card p-6 rounded-xl">
              <h3 className="font-bold text-(--color-navy) mb-2">Land use</h3>
              <p className="text-gray-600 text-sm">For farmhouse land, whether a CLU (change of land use) is in place or possible, plus road access.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-(--color-muted)">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-navy) mb-3">Why people are buying in Gurgaon</h2>
          <ul className="content grid gap-3 text-gray-700">
            <li>The Dwarka Expressway is now open, opening up New Gurgaon and the sectors along it.</li>
            <li>Gurgaon has one of the NCR&apos;s biggest office and job markets, which keeps steady demand for homes and plots.</li>
            <li>The Sohna and Aravalli belt remains the go-to for weekend farmhouses near the city.</li>
            <li>Rates differ sharply by sector and approval status, so the right advice saves real money.</li>
          </ul>
          <p className="text-sm text-gray-600 mt-6">We will give you the real rate for a specific sector when you call, not a headline number.</p>
        </div>
      </Section>

      <Section id="contact" className="border-t border-gray-200 bg-(--color-muted)">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-(--color-navy)">Want to see plots in Gurgaon?</h2>
          <p className="text-lg mb-8 text-gray-700">Tell us your budget and what the land is for, and we will shortlist a few and take you to see them.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button href={TEL_HREF}>Call us</Button>
            <Button href={whatsapp("Hi, I'm looking for plots in Gurgaon")} target="_blank" rel="noopener noreferrer" variant="secondary">Ask on WhatsApp</Button>
          </div>
          <p className="text-sm text-gray-600">Also looking elsewhere? See <a href="/plots-in-sonipat" className="font-semibold text-(--color-navy) underline">plots in Sonipat</a> or <a href="/farmland-near-vrindavan" className="font-semibold text-(--color-navy) underline">farmland near Vrindavan</a>.</p>
        </div>
      </Section>
    </main>
  );
}
