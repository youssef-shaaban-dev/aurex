import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aurexegypt.com/"),
  title: "شركة تكييف مركزي ومقاولات كهروميكانيكية في مصر | أوريكس",
  description: "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر. حلول VRF/VRV وChilled Water والدكت ومكافحة الحريق.",
  keywords: [
    "أوريكس",
    "Aurex",
    "تكييف مركزي مصر",
    "مقاولات كهروميكانيكية",
    "موزع معتمد كاريير",
    "موزع معتمد ميديا",
    "موزع معتمد هاير",
    "دكت تكييف",
    "مكافحة الحريق",
    "VRF",
    "Chilled Water"
  ],
  authors: [{ name: "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية" }],
  openGraph: {
    title: "شركة تكييف مركزي ومقاولات كهروميكانيكية في مصر | أوريكس",
    description: "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر. حلول VRF/VRV وChilled Water والدكت ومكافحة الحريق.",
    url: "https://www.aurexegypt.com",
    siteName: "أوريكس - Aurex",
    images: [
      {
        url: "/images/logo.webp",
        width: 800,
        height: 800,
        alt: "لوجو أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  alternates: {
    canonical: "https://www.aurexegypt.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5HZD5562');`,
          }}
        />
        {/* Structured Data (JSON-LD) */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://aurexegypt.com/#organization",
                  "name": "AUREX أوريكس للمقاولات الكهروميكانيكية",
                  "url": "https://aurexegypt.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://aurexegypt.com/wp-content/uploads/2026/09/aurex-logo.png"
                  },
                  "description": "أوريكس شركة مصرية متخصصة في أنظمة التكييف المركزي والمقاولات الكهروميكانيكية، وتشمل خدماتها Chilled Water وVRV/VRF والدكت ومواسير الفريون ومكافحة الحريق.",
                  "email": "sales@aurexegypt.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "مول ميديكال سنتر، الدور الثالث، مكتب 355، الحي الثامن، مدينة نصر",
                    "addressLocality": "مدينة نصر",
                    "addressRegion": "القاهرة",
                    "addressCountry": "EG"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Egypt"
                  },
                  "brand": [
                    { "@type": "Brand", "name": "Carrier" },
                    { "@type": "Brand", "name": "Midea" },
                    { "@type": "Brand", "name": "Haier" }
                  ],
                  "knowsAbout": [
                    "Central Air Conditioning",
                    "Chilled Water Systems",
                    "VRV Systems",
                    "VRF Systems",
                    "HVAC",
                    "Ductwork",
                    "Thermal Insulation",
                    "Copper Piping Networks",
                    "Fire Fighting Systems",
                    "Fire Alarm Systems",
                    "MEP Contracting",
                    "Electromechanical Contracting"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aurexegypt.com/#website",
                  "url": "https://aurexegypt.com/",
                  "name": "AUREX أوريكس",
                  "publisher": { "@id": "https://aurexegypt.com/#organization" },
                  "inLanguage": "ar-EG"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://aurexegypt.com/#webpage",
                  "url": "https://aurexegypt.com/",
                  "name": "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر",
                  "isPartOf": { "@id": "https://aurexegypt.com/#website" },
                  "about": { "@id": "https://aurexegypt.com/#organization" },
                  "description": "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر، متخصصة في Chilled Water وVRV/VRF والدكت ومواسير الفريون ومكافحة الحريق.",
                  "inLanguage": "ar-EG"
                },
                {
                  "@type": "Service",
                  "@id": "https://aurexegypt.com/#central-air-conditioning",
                  "name": "أنظمة التكييف المركزي",
                  "serviceType": "Central Air Conditioning Systems",
                  "provider": { "@id": "https://aurexegypt.com/#organization" },
                  "areaServed": { "@type": "Country", "name": "Egypt" },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "أنظمة التكييف المركزي والتبريد",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chilled Water Systems" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VRV / VRF Systems" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concealed Air Conditioning" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Package Units" } }
                    ]
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://aurexegypt.com/#ductwork",
                  "name": "تصنيع وتوريد وتركيب الدكت",
                  "serviceType": "Ductwork Manufacturing and Installation",
                  "provider": { "@id": "https://aurexegypt.com/#organization" },
                  "areaServed": { "@type": "Country", "name": "Egypt" }
                },
                {
                  "@type": "Service",
                  "@id": "https://aurexegypt.com/#copper-piping",
                  "name": "تأسيس شبكات ومواسير الفريون",
                  "serviceType": "Copper Piping and Refrigerant Networks",
                  "provider": { "@id": "https://aurexegypt.com/#organization" },
                  "areaServed": { "@type": "Country", "name": "Egypt" }
                },
                {
                  "@type": "Service",
                  "@id": "https://aurexegypt.com/#firefighting",
                  "name": "مكافحة الحريق والأعمال الكهروميكانيكية",
                  "serviceType": "Fire Fighting and Electromechanical Contracting",
                  "provider": { "@id": "https://aurexegypt.com/#organization" },
                  "areaServed": { "@type": "Country", "name": "Egypt" }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-cairo antialiased bg-slate-50 text-slate-900 selection:bg-aurex-navy selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HZD5562"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
