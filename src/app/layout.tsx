import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أوريكس للأعمال الكهروميكانيكية والإنشاءات | Aurex Electromechanical",
  description: "شركة أوريكس المتخصصة في أنظمة التكييف المركزي (Chilled Water, VRF, Concealed)، تصنيع وتوريد الدكت، مواسير الفريون، موزع معتمد لكاريير، ميديا، هاير وتوشيبا، وأعمال مكافحة الحريق في مصر.",
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
  authors: [{ name: "Aurex Electromechanical" }],
  openGraph: {
    title: "أوريكس للأعمال الكهروميكانيكية والإنشاءات",
    description: "الرائدون في أنظمة التكييف المركزي والمقاولات الكهروميكانيكية في مصر.",
    url: "https://aurex-eg.com",
    siteName: "أوريكس - Aurex",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Aurex Electromechanical Logo",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased bg-slate-50 text-slate-900 selection:bg-aurex-navy selection:text-white">
        {children}
      </body>
    </html>
  );
}
