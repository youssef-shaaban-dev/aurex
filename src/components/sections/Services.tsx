"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Wind, 
  Award, 
  Layers, 
  Wrench, 
  Flame, 
  CheckCircle2, 
  ArrowLeft 
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/companyData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-green-subtle text-aurex-green text-xs font-bold">
            <Wrench className="w-4 h-4" />
            <span>حلول هندسية متكاملة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            خدماتنا وحلولنا المتخصصة
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            نوفر مجموعة متكاملة من خدمات التكييف المركزي والمقاولات الكهروميكانيكية وتجهيز الشبكات للقطاعات الإدارية، التجارية، والمستشفيات.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Thumbnail Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Floating Service Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-aurex-navy flex items-center justify-center shadow-lg group-hover:bg-aurex-navy group-hover:text-white transition-colors duration-300">
                  {ICON_MAP[service.iconName] || <Wrench className="w-6 h-6" />}
                </div>

                {/* Subtitle pill */}
                <div className="absolute bottom-4 right-4 left-4">
                  <span className="text-[11px] font-bold text-aurex-green-light bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full dir-ltr inline-block">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-aurex-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="text-xs font-bold text-aurex-navy hover:text-aurex-green inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>طلب استشارة وفحص للمشروع</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-8 rounded-3xl navy-gradient text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-right">
            <h3 className="text-xl sm:text-2xl font-bold">هل لديك مشروع وتحتاج إلى دراسة أحمال حرارية واستشارة كهروميكانيكية؟</h3>
            <p className="text-xs sm:text-sm text-slate-200">مهندسونا جاهزون لتقديم المعاينة الميدانية والتسعير الهندسي الدقيق.</p>
          </div>
          <Link
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-aurex-green hover:bg-aurex-green-dark text-white font-bold text-sm shadow-lg whitespace-nowrap transition-all duration-300"
          >
            احجز معاينة هندسية الآن
          </Link>
        </div>

      </div>
    </section>
  );
}
