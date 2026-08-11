"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Building2, Wrench, Award, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 hero-pattern text-white overflow-hidden flex items-center">
      {/* Background Subtle Shapes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-aurex-navy-light/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-aurex-green/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-8 text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-aurex-green" />
              <span>أوريكس للمقاولات الكهروميكانيكية والإنشاءات</span>
              <span className="w-1.5 h-1.5 rounded-full bg-aurex-green animate-pulse"></span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight">
              أنظمة التكييف المركزي <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurex-green-light via-emerald-400 to-aurex-green">
                والمقاولات الكهروميكانيكية
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              نقدم في <strong className="text-white font-bold">أوريكس</strong> دراسات وتوريد وتنفيذ كامل حلول التكييف المركزي (Chilled Water, VRF, Concealed) والشبكات الكهروميكانيكية ومكافحة الحريق، بأعلى المعايير الهندسية وأطول فترات الضمان.
            </p>

            {/* Key Features Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "موزع معتمد رسمياً: (Carrier - Midea - Haier - Toshiba)",
                "سلسلة مشاريع قومية وتجارية كبرى في مصر",
                "تصنيع وتوريد مجاري الهواء والدكت والعزل الحراري",
                "تأسيس شبكات الفريون النحاسية ومكافحة الحريق"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#services"
                className="px-7 py-3.5 rounded-xl bg-aurex-green hover:bg-aurex-green-dark text-white font-bold text-base shadow-xl hover:shadow-aurex-green/30 transition-all duration-300 flex items-center gap-3 group"
              >
                <span>استكشف خدماتنا المتكاملة</span>
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <span>تواصل مع مهندسينا</span>
              </Link>
            </div>

            {/* Authorized Distributor Badges Bar */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 font-semibold mb-3">موزّع معتمد لأرقى الماركات العالمية:</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {[
                  { name: "Miraco Carrier", label: "ميراكو كاريير" },
                  { name: "Midea", label: "ميديا HVAC" },
                  { name: "Haier", label: "هاير العالمية" },
                  { name: "Toshiba", label: "توشيبا" },
                ].map((brand, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-xs font-bold text-slate-200 flex items-center gap-2 hover:border-aurex-green/50 transition-colors"
                  >
                    <Award className="w-3.5 h-3.5 text-aurex-green" />
                    <span>{brand.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-aurex-navy-light via-aurex-green to-emerald-500 opacity-30 blur-xl"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-white/15 p-4 sm:p-6 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Onsite Photo Highlight */}
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/site/chillers.png"
                    alt="أنظمة التكييف المركزي أوريكس"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-4 right-4 left-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-bold text-white">تنفيذ موقعي محترف</p>
                    <p className="text-[11px] text-slate-300">محطات الشيلرات وأنظمة التكييف المركزي للأبراج والمولات</p>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {COMPANY_INFO.stats.slice(0, 4).map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-aurex-green">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certificate Banner Callout */}
                <div className="p-3 rounded-xl bg-aurex-navy/60 border border-aurex-navy-light/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-aurex-green/20 flex items-center justify-center text-aurex-green flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">شهادات اعتماد رسمية موثقة</h4>
                    <p className="text-[11px] text-slate-300">معتمدة من ميراكو (كاريير/ميديا/توشيبا) وهاير مصر</p>
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
