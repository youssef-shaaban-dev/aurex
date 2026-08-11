import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt={COMPANY_INFO.fullName}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white">
                  AUREX <span className="text-aurex-green">أوريكس</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  للمقاولات الكهروميكانيكية والإنشاءات
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-md">
              أوريكس هي الشركة الرائدة في مصر في تقديم دراسات وتوريد وتنفيذ أنظمة التكييف المركزي والمقاولات الكهروميكانيكية، وموزع معتمد لكبرى التوكيلات العالمية.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400 font-bold">موزع معتمد رسمياً:</span>
              <span className="text-xs font-bold text-aurex-green bg-slate-900 border border-slate-800 px-3 py-1 rounded-md">
                Carrier - Midea - Haier - Toshiba
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white border-r-2 border-aurex-green pr-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="#hero" className="hover:text-aurex-green transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-aurex-green transition-colors">عن الشركة ورؤيتنا</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-aurex-green transition-colors">خدمات التكييف والشبكات</Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-aurex-green transition-colors">سابقة الأعمال والمشاريع</Link>
              </li>
              <li>
                <Link href="#certificates" className="hover:text-aurex-green transition-colors">شهادات وتوكيلات الموزع المعتمد</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-aurex-green transition-colors">اتصل بنا وطلب معاينة</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white border-r-2 border-aurex-navy-light pr-2">
              معلومات الاتصال والمقر
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aurex-green flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aurex-green flex-shrink-0" />
                <span className="dir-ltr text-right">{COMPANY_INFO.phone1} - {COMPANY_INFO.phone2}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aurex-green flex-shrink-0" />
                <span className="font-mono dir-ltr">{COMPANY_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-aurex-green" />
                <span>جميع الأعمال معتمدة ومكفولة بالضمان الهندسي</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. جميع الحقوق محفوظة.</p>
          <a
            href="#hero"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 hover:bg-aurex-green hover:text-white transition-colors"
            aria-label="الرجوع للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
