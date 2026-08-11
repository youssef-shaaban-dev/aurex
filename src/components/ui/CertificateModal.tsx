"use client";

import Image from "next/image";
import { X, Award, CheckCircle } from "lucide-react";
import { CertificateItem } from "@/data/companyData";

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-aurex-green" />
            <span className="text-xs font-bold text-aurex-navy bg-aurex-navy-subtle px-3 py-1 rounded-full">
              {cert.validity}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Certificate Image Frame */}
          <div className="relative w-full h-[55vh] min-h-[350px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-900">
              {cert.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              الجهة المصدرة: <span className="text-aurex-navy">{cert.issuer}</span>
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {cert.brands.map((b, i) => (
                <span key={i} className="text-[11px] font-bold text-aurex-green bg-aurex-green-subtle px-3 py-1 rounded-lg">
                  موزّع معتمد: {b}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">شهادة معتمدة موثوقة ومفعلة</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
}
