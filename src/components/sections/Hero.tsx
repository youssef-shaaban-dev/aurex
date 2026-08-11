"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, ShieldCheck, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 hero-light-pattern overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-aurex-navy/10 via-aurex-green/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-7 text-right">
            
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-aurex-navy-subtle border border-aurex-navy/20 text-aurex-navy text-xs sm:text-sm font-black shadow-xs">
              <ShieldCheck className="w-4 h-4 text-aurex-green" />
              <span>أوريكس للأعمال الكهروميكانيكية والإنشاءات</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.2]">
              أنظمة التكييف المركزي <br />
              <span className="text-aurex-navy font-black">
                والمقاولات الكهروميكانيكية
              </span>
            </h1>

            {/* Subheading from PDF */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-bold">
              تقديم حلول متكاملة وعصرية في أنظمة التكييف والتوريد والأعمال المقاولاتية (Chilled Water, VRV/VRF, Concealed)، تصنيع الدكت، وتأسيس الشبكات بجودة عالية ومعايير احترافية.
            </p>

            {/* PDF Verified Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "موزع معتمد رسمياً: (Carrier - Midea - Haier)",
                "سلسلة مشاريع كبرى منفذة في جميع محافظات مصر",
                "تصنيع وتوريد مجاري الهواء والدكت والعزل الحراري",
                "تأسيس شبكات مواسير الفريون وأعمال مكافحة الحريق"
              ].map((bullet, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-black text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Clean WhatsApp Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/2${COMPANY_INFO.phone1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-aurex-green hover:bg-aurex-green-dark text-white font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>مراسلة عبر الواتساب</span>
              </a>

              <Link
                href="#services"
                className="px-8 py-3.5 rounded-full bg-aurex-navy hover:bg-aurex-navy-dark text-white font-black text-sm shadow-xs transition-colors"
              >
                <span>استكشف خدمات أوريكس</span>
              </Link>
            </div>

            {/* Authorized Distributor Bar */}
            <div className="pt-6 border-t border-slate-200 space-y-2">
              <p className="text-xs text-slate-600 font-extrabold">توكيلات وموزّع معتمد رسمياً:</p>
              <div className="flex flex-wrap gap-3">
                {["ميراكو كاريير (Miraco Carrier)", "ميديا (Midea)", "هاير (Haier)"].map((brand, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-black text-slate-800 shadow-xs"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-3 shadow-xl">
                
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/site/chillers.png"
                    alt="أنظمة تكييف أوريكس الكهروميكانيكية"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Card Callout */}
                <div className="mt-3 p-4 rounded-2xl bg-aurex-navy-subtle border border-aurex-navy/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-aurex-navy text-white flex items-center justify-center font-bold flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-slate-900">تنفيذ موقعي هندسي معتمد</h4>
                      <p className="text-[11px] font-bold text-slate-600">محطات الشيلرات وأنظمة التكييف المركزي للأبراج والمولات</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
