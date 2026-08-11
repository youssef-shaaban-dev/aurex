"use client";

import { ShieldCheck, Clock, Award, Headphones, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-aurex-green" />,
    title: "الهندسة الدقيقة والحسابات الحرارية",
    description: "نقوم بتصميم ودراسة أحمال المبنى وفق أعلى الأكواد الهندسية العالمية لضمان أقصى كفاءة تبريد وتوفير استهلاك الطاقة.",
  },
  {
    icon: <Award className="w-8 h-8 text-aurex-navy" />,
    title: "موزع معتمد ومعدات أصيلة بالضمان",
    description: "توريد كامل الأجهزة من المصانع المعتمدة مباشرة (كاريير - ميديا - هاير - توشيبا) مع تسليم شهادات الضمان الرسمية.",
  },
  {
    icon: <Clock className="w-8 h-8 text-aurex-green" />,
    title: "الالتزام الصارم بالجدول الزمني",
    description: "تسليم المشاريع في المواعيد المحددة بدقة متناهية دون أي تأخير، مع الإشراف الميداني المستمر لكبار المهندسين.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-aurex-navy" />,
    title: "دعم فني وصيانة دورية شاملة",
    description: "فريق خدمات ما بعد البيع متواجد للرد والاستجابة البثية وتوفير قطع الغيار الأصلية وعقود الصيانة الوقائية.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-navy-subtle text-aurex-navy text-xs font-bold">
            <Sparkles className="w-4 h-4 text-aurex-green" />
            <span>معايير التميز</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            لماذا يختار العملاء شركة أوريكس؟
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            نجمع بين الخبرة التخصصية العميقة والحلول الهندسية المبتكرة لتقديم تجربة مقاولات كهروميكانيكية استثنائية.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 space-y-4 text-right group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-aurex-navy transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
