"use client";

import Image from "next/image";
import { Target, Compass, Award, Shield, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-navy-subtle text-aurex-navy text-xs font-bold">
            <Compass className="w-4 h-4 text-aurex-green" />
            <span>عن الشركة ورؤيتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            أوريكس للمقاولات الكهروميكانيكية والإنشاءات
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            تأسست <strong className="text-aurex-navy">أوريكس</strong> لتكون النموذج الأبرز في تقديم الحلول الكهروميكانيكية والهندسية المتقدمة لقطاعات الإنشاءات والتطوير العقاري بالمملكة والجمهورية.
          </p>
        </div>

        {/* Top Split: Mission Box & Feature Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Mission Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-card space-y-6 relative">
              <div className="w-14 h-14 rounded-2xl bg-aurex-navy text-white flex items-center justify-center shadow-lg shadow-aurex-navy/20">
                <Target className="w-7 h-7 text-aurex-green-light" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">رسالتنا الهندسية</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {COMPANY_INFO.about}
                </p>
              </div>

              {/* Core Attributes */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                {[
                  { title: "الجودة العالية", sub: "وفق الأكواد العالمية" },
                  { title: "الالتزام التام", sub: "بجدول المواعيد" },
                  { title: "شراكة طويلة", sub: "قائمة على الثقة" },
                ].map((item, idx) => (
                  <div key={idx} className="text-right">
                    <h4 className="text-sm font-bold text-aurex-navy">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/projects/hyde_park.png"
                alt="مشروع كمبوند هايد بارك أوريكس"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aurex-navy/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-aurex-green-light" />
                  <span className="text-xs font-bold">مشروع هايد بارك - القاهرة الجديدة</span>
                </div>
                <p className="text-xs text-slate-200">تنفيذ المبنى الإداري والفيلات بكفاءة وجودة فائقة</p>
              </div>
            </div>
          </div>

        </div>

        {/* Goals Grid (أهدافنا) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">أهدافنا الإستراتيجية</h3>
            <p className="text-sm text-slate-500 mt-1">الركائز التي نعتمد عليها لتحقيق التميز في كافة المشاريع</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.goals.map((goal, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-aurex-green-subtle text-aurex-green font-bold flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-aurex-navy">الهدف 0{index + 1}</span>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {goal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
