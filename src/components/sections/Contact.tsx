"use client";

import { Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            اتصل بنا أو تفضل بزيارتنا
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-extrabold max-w-2xl mx-auto leading-relaxed">
            فريق المهندسين متواجد فوراً للرد على استفساراتكم وتوفير دراسات الأحمال والمعاينات الميدانية.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: WhatsApp Messaging (Primary) */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-aurex-green-subtle text-aurex-green flex items-center justify-center font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-aurex-green uppercase tracking-wider block mb-1">
                  التواصل المباشر والواتساب
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  مراسلة عبر الواتساب
                </h3>
              </div>
              <p className="text-xs text-slate-700 font-bold leading-relaxed">
                تواصل سريع ومباشر لحساب الأحمال الحرارية والاستفسارات والمتابعة.
              </p>
            </div>

            <a
              href={`https://wa.me/2${COMPANY_INFO.phone1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-aurex-green hover:bg-aurex-green-dark text-white font-black text-sm shadow-xs flex items-center justify-center gap-2 transition-all hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>مراسلة عبر الواتساب</span>
            </a>
          </div>

          {/* Card 2: Address & Office */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-aurex-navy-subtle text-aurex-navy flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-aurex-navy uppercase tracking-wider block mb-1">
                  المقر الرئيسي
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  زيارة المكتب
                </h3>
              </div>
              
              <div className="space-y-3 pt-2 text-xs text-slate-800 font-bold">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-aurex-navy flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-slate-900">{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-aurex-green flex-shrink-0" />
                  <span className="text-slate-800">{COMPANY_INFO.workingHours}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-aurex-navy flex-shrink-0" />
                  <span className="font-mono text-slate-800 dir-ltr text-right">{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-aurex-navy-subtle border border-aurex-navy/20 text-center">
              <span className="text-xs font-black text-aurex-navy">ملاحظة: المعاينات الميدانية متاحة طوال الأسبوع</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
