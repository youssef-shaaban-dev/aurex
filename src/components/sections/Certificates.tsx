"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Eye, CheckCircle2 } from "lucide-react";
import { CERTIFICATES, CertificateItem } from "@/data/companyData";
import CertificateModal from "@/components/ui/CertificateModal";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-green-subtle text-aurex-green text-xs font-bold">
            <Award className="w-4 h-4" />
            <span>الاعتماد والضمان</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            الشهادات وتوكيلات الموزع المعتمد
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            تفخر أوريكس بكونها موزّعاً معتمداً لأرقى الماركات العالمية في مجال التكييف والتبريد، مما يضمن لعملائنا الحصول على المنتجات الأصلية بالضمان المباشر.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-3xl bg-white border border-slate-200/80 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame Container */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6 flex items-center justify-center p-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs flex items-center justify-center">
                  <div className="px-4 py-2.5 rounded-xl bg-white text-aurex-navy font-bold text-xs shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4 text-aurex-green" />
                    <span>انقر لمعاينة الشهادة المكبرة</span>
                  </div>
                </div>
              </div>

              {/* Text Meta */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-aurex-green bg-aurex-green-subtle px-3 py-1 rounded-full">
                    {cert.validity}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-aurex-navy" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-aurex-navy transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {cert.brands.map((brand, i) => (
                    <div key={i} className="flex items-center gap-1 text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-aurex-green" />
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
}
