import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://propertyspecialist.in"),
  title: {
    default: "Property Specialist — Premier Real Estate in Delhi NCR & Vrindavan",
    template: "%s | Property Specialist",
  },
  description:
    "Premier real estate advisory with 25+ years expertise. Residential, commercial, farmhouses, and land deals in Delhi NCR & Vrindavan.",
  icons: {
    icon: "/images/logo-no-bg.png",
    apple: "/images/logo-no-bg.png",
  },
  openGraph: {
    type: "website",
    title: "Property Specialist — Your Trusted Partner",
    description:
      "End-to-end real estate advisory for developers, investors, and home buyers.",
    url: "https://propertyspecialist.in",
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
      <head>
        <link rel="icon" href="/images/logo-no-bg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-no-bg.png" />
      </head>
      <body className={`antialiased ${inter.variable} ${playfairDisplay.variable}`}>
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Property Specialist",
              url: "https://propertyspecialist.in",
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
