import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Property Specialist — Real Estate in Delhi NCR & Vrindavan",
    template: "%s | Property Specialist",
  },
  description:
    "Residential, commercial, farmhouses, land deals, and project sales in Delhi NCR & Vrindavan.",
  openGraph: {
    type: "website",
    title: "Property Specialist — Your Trusted Partner",
    description:
      "End-to-end real estate advisory for developers, investors, and home buyers.",
    url: "https://www.example.com",
    siteName: "Property Specialist",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Property Specialist",
              url: "https://www.example.com",
              areaServed: ["Delhi NCR", "Vrindavan", "Noida", "Gurgaon"],
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              telephone: "+919910070102",
              services: [
                "Developer Sales & Marketing Systems",
                "Investments: Residential, Commercial, Farmhouses, Land",
                "Home Buyer Advisory",
                "Finance & Loans",
              ],
            }),
          }}
        />
        <Header />
        <div className="min-h-[60vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
