"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Eye, CheckCircle2 } from "lucide-react";
import { CERTIFICATES, CertificateItem } from "@/data/companyData";
import CertificateModal from "@/components/ui/CertificateModal";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>الاعتماد والتوكيلات الرسمية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            شهادات الموزع المعتمد
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            شهادات الاعتماد الرسمية لشركة أوريكس كموزع معتمد لأجهزة تكييف ميراكو (كاريير، ميديا، توشيبا) وهاير مصر.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group rounded-3xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-sky-200 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-5 flex items-center justify-center p-3">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-md flex items-center gap-2">
                    <Eye className="w-4 h-4 text-sky-600" />
                    <span>انقر لمعاينة الشهادة المكبرة</span>
                  </div>
                </div>
              </div>

              {/* Text Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {cert.validity}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-sky-600" />
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-bold text-slate-500">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {cert.brands.map((brand, i) => (
                    <div key={i} className="flex items-center gap-1 text-[11px] font-extrabold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
