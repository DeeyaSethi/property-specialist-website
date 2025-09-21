import type { Metadata } from "next";
import "./globals.css";
import Header from "./(site)/components/Header";
import Footer from "./(site)/components/Footer";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
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
