"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Mail, MapPin, ArrowUp, Info } from "lucide-react";
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
  const [showPartnership, setShowPartnership] = useState(false);

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
            © 2027 أوريكس - جميع الحقوق محفوظة. يُحظر تماماً الاستخدام غير المصرح به، بما في ذلك تدريب نماذج الذكاء الاصطناعي، أو إعادة الإنتاج، أو الاستغلال التجاري.
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-300 pt-1">
            <span>صُنع بكل حب في مصر ❤️</span>
            <Link href="https://mrco-egypt.com" target="_blank" rel="noopener noreferrer" className="hover:text-aurex-green-light transition-colors underline decoration-aurex-green text-white">
              تم تطوير الموقع من خلال شركة ميركو ايجيبت
            </Link>
          </div>

          {/* MRCO-Egypt Partnership Tooltip */}
          <div className="flex justify-center mt-4 pb-2 px-2">
            <div
              className="inline-flex flex-wrap items-center justify-center gap-1.5 group relative cursor-help text-center select-none"
              onClick={() => setShowPartnership(!showPartnership)}
            >
              <p dir="ltr" className="text-[10px] sm:text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed max-w-[280px] sm:max-w-none border-b border-dashed border-gray-500/50 pb-0.5">
                <span className="text-white font-bold">Aurex | </span>
                <a href="https://mrco-egypt.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:text-aurex-green-light transition-colors">Growth & Marketing by MRCO-Egypt</a>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors"> a strategy-driven digital marketing and brand communication agency in Egypt</span>
              </p>

              <Info className={`w-3.5 h-3.5 transition-colors flex-shrink-0 inline-block ${showPartnership ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'}`} />

              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[90vw] sm:w-[450px] p-4 sm:p-5 bg-[#071E3D] sm:bg-[#07254D] rounded-xl border border-amber-400/30 shadow-2xl transition-all duration-300 z-50 text-left pointer-events-none ${showPartnership
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-2 lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:translate-y-0'
                  }`}
                dir="ltr"
              >
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                  <span className="text-aurex-green-light font-bold text-xs">Growth & Marketing</span>
                </div>
                <p className="text-[11px] sm:text-[11.5px] font-light text-gray-200 leading-relaxed mb-3">
                  Aurex - Growth & Marketing by MRCO-Egypt , a strategy-driven digital marketing and brand communication agency in Egypt, for brand strategy, digital marketing, and web development.
                </p>
                <p className="text-[11px] sm:text-[11.5px] font-light text-gray-200 leading-relaxed">
                  MRCO-Egypt specializes in brand strategy, brand identity, web development, SEO, Generative Engine Optimization (GEO), and AI Optimization (AIO), helping businesses build distinctive brands and achieve measurable digital growth.
                </p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-amber-400/30"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#071E3D] sm:border-t-[#07254D] -mt-[1px]"></div>
              </div>
            </div>
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
