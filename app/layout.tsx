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
    default: "Plots & Farmland in Vrindavan, Sonipat & Gurgaon | Property Specialist",
    template: "%s | Property Specialist",
  },
  description:
    "Buy verified residential plots, farmland & farmhouses in Vrindavan, Sonipat and Gurgaon. 25+ years' expertise with title-checked (MVDA / DTCP / RERA) deals. Book a free site visit on WhatsApp.",
  icons: {
    icon: "/images/logo-no-bg.png",
    apple: "/images/logo-no-bg.png",
  },
  openGraph: {
    type: "website",
    title: "Plots & Farmland in Vrindavan, Sonipat & Gurgaon | Property Specialist",
    description:
      "Verified residential plots, farmland & farmhouses in Vrindavan, Sonipat and Gurgaon. 25+ years' expertise. Free site visit on WhatsApp.",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-THHBSG8M');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`antialiased ${inter.variable} ${playfairDisplay.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THHBSG8M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Property Specialist",
              url: "https://propertyspecialist.in",
              areaServed: ["Vrindavan", "Mathura", "Sonipat", "Gurgaon", "Delhi NCR", "Noida"],
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              telephone: "+919910070102",
              sameAs: ["https://www.instagram.com/propertyspecialist.in/"],
              knowsAbout: [
                "Residential plots",
                "Farmland & farmhouses",
                "Agricultural land",
                "Land investment advisory",
                "Property finance & loans",
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
