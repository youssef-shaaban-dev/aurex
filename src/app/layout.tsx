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
  description: "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر. حلول Chilled Water وVRV/VRF والدكت ومكافحة الحريق، وموزع معتمد لكاريير وميديا وهاير.",
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
    description: "أوريكس للتكييف المركزي والمقاولات الكهروميكانيكية في مصر. حلول Chilled Water وVRV/VRF والدكت ومكافحة الحريق، وموزع معتمد لكاريير وميديا وهاير.",
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
