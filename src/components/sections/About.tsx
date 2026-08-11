"use client";

import Image from "next/image";
import { Target, Compass, Award, Shield, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold">
            <Compass className="w-4 h-4 text-sky-500" />
            <span>رؤيتنا ورسالتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            عن شركة أوريكس للمقاولات
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            تأسست أوريكس لتكون النموذج الرائد في تقديم الحلول الكهروميكانيكية والهندسية المتقدمة لقطاعات الإنشاءات والتطوير العقاري.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Mission Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">رسالتنا الهندسية</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {COMPANY_INFO.about}
                </p>
              </div>

              {/* Attributes */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                {[
                  { title: "جودة عالية", sub: "وفق المعايير" },
                  { title: "التزام كامل", sub: "بالمواعيد" },
                  { title: "شراكة موثوقة", sub: "على الثقة" },
                ].map((item, idx) => (
                  <div key={idx} className="text-right">
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/projects/hyde_park.png"
                alt="مشروع كمبوند هايد بارك أوريكس"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 right-5 left-5 text-white">
                <span className="text-xs font-bold text-sky-400 block mb-1">مشروع هايد بارك - القاهرة الجديدة</span>
                <p className="text-xs text-slate-200">تنفيذ الأعمال الكهروميكانيكية والتكييف المركزي</p>
              </div>
            </div>
          </div>

        </div>

        {/* Goals Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-900">أهدافنا الاستراتيجية</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPANY_INFO.goals.map((goal, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5 hover:border-sky-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                  0{index + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed pt-1">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
