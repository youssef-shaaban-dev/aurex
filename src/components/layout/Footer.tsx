import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Mail, MapPin, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "مشاريعنا" },
  { href: "#certificates", label: "الشهادات والاعتمادات" },
  { href: "#contact", label: "اتصل بنا" },
];

export default function Footer() {
  return (
    <footer className="bg-aurex-navy-dark text-white pt-16 pb-8 border-t border-aurex-navy/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-aurex-navy/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-md">
                <Image
                  src="/images/logo.webp"
                  alt={COMPANY_INFO.fullName}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white">
                  AUREX <span className="text-aurex-green">أوريكس</span>
                </span>
                <span className="text-xs text-slate-300 font-bold">
                  للمقاولات الكهروميكانيكية والإنشاءات
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-bold max-w-md">
              أوريكس هي الشركة الرائدة في مصر في تقديم دراسات وتوريد وتنفيذ أنظمة التكييف المركزي والمقاولات الكهروميكانيكية.
            </p>
          </div>

          {/* Quick Links (Exact Navbar Order) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white border-r-4 border-aurex-green pr-3">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-slate-200">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-aurex-green-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-white border-r-4 border-aurex-navy-light pr-3">
              معلومات الاتصال والمقر
            </h4>
            
            <div className="space-y-3 text-xs font-bold text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aurex-green-light flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-aurex-green-light flex-shrink-0" />
                <a
                  href={`https://wa.me/2${COMPANY_INFO.phone1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-aurex-green-light transition-colors"
                >
                  مراسلة عبر الواتساب
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aurex-green-light flex-shrink-0" />
                <span className="font-mono dir-ltr">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Section (Matched to reference image) */}
        <div className="pt-8 space-y-3 text-center text-xs font-bold text-slate-300">
          <p>
            © {new Date().getFullYear()} أوريكس - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-300 pt-1">
            <span>صُنع بكل فخر في مصر بحب ❤️</span>
            <Link href="https://mrco-egypt.com" target="_blank" rel="noopener noreferrer" className="hover:text-aurex-green-light transition-colors underline decoration-aurex-green text-white">
              تم تصميم وتطوير الموقع من خلال شركة ميركو ايجيبت
            </Link>
          </div>

          <div className="pt-4 flex justify-center">
            <a
              href="#hero"
              className="p-2.5 rounded-full bg-aurex-navy hover:bg-aurex-green text-white transition-colors"
              aria-label="الرجوع للأعلى"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
