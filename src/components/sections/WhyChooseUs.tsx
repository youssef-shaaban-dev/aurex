"use client";

import { ShieldCheck, Clock, Award, Headphones, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-sky-600" />,
    title: "الهندسة الدقيقة والتصاميم الهندسية",
    description: "دراسة وحسابات أحمال المباني وفق الأكواد الهندسية العالمية لضمان الكفاءة التشغيلية العالية وتقليل استهلاك الطاقة.",
  },
  {
    icon: <Award className="w-7 h-7 text-emerald-600" />,
    title: "موزع معتمد لأرقى الشركات العالمية",
    description: "توريد كامل الأجهزة والمعدات من المصانع المعتمدة مباشرة (كاريير - ميديا - هاير - توشيبا) بالضمان الرسمي.",
  },
  {
    icon: <Clock className="w-7 h-7 text-sky-600" />,
    title: "الالتزام التام بالجداول الزمنية",
    description: "تسليم كافة الأعمال المنفذة في المواعيد المحددة بدقة متناهية تحت إشراف طاقم مهندسين متخصص.",
  },
  {
    icon: <Headphones className="w-7 h-7 text-emerald-600" />,
    title: "خدمة العملاء والدعم الفني الميداني",
    description: "استجابة سريعة وتوفير قطع الغيار الأصلية وعقود الصيانة الوقائية لجميع القطاعات والإدارات.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>مزايانا الجوهرية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لماذا تختار شركة أوريكس؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            نعتمد على خبرة هندسية واسعة وتجهيزات متكاملة لتقديم أعلى معايير الجودة في المقاولات الكهروميكانيكية.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-200 transition-all space-y-3 text-right"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-extrabold text-slate-900">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
