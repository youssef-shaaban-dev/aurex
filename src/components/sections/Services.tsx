"use client";

import Image from "next/image";
import { 
  Wind, 
  Award, 
  Layers, 
  Wrench, 
  Flame, 
  CheckCircle2, 
  MessageSquare 
} from "lucide-react";
import { SERVICES, ServiceItem, COMPANY_INFO } from "@/data/companyData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-5 h-5 text-aurex-navy" />,
  Award: <Award className="w-5 h-5 text-aurex-navy" />,
  Layers: <Layers className="w-5 h-5 text-aurex-navy" />,
  Wrench: <Wrench className="w-5 h-5 text-aurex-navy" />,
  Flame: <Flame className="w-5 h-5 text-aurex-navy" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-aurex-navy-subtle text-aurex-navy text-xs font-extrabold">
            <Wrench className="w-4 h-4 text-aurex-green" />
            <span>حلولنا الهندسية الكهروميكانيكية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            خدماتنا المتخصصة
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            نوفر مجموعة متكاملة من خدمات التكييف المركزي والمقاولات الكهروميكانيكية وتجهيز الشبكات.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-aurex-navy/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 text-aurex-navy flex items-center justify-center shadow-md">
                  {ICON_MAP[service.iconName] || <Wrench className="w-5 h-5" />}
                </div>

                {/* Subtitle Pill */}
                <div className="absolute bottom-3 right-4 left-4">
                  <span className="text-[11px] font-extrabold text-white bg-aurex-navy/90 px-3 py-1 rounded-full dir-ltr inline-block shadow-xs">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Service Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-aurex-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`https://wa.me/2${COMPANY_INFO.phone1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-aurex-green hover:text-aurex-green-dark inline-flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>تواصل عبر الواتساب</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
