"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Award } from "lucide-react";
import { CertificateItem } from "@/data/companyData";

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (cert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 pt-24 sm:pt-28 pb-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp max-h-[80vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-aurex-green" />
            <span className="text-xs font-black text-aurex-navy bg-aurex-navy-subtle px-3 py-1 rounded-full">
              {cert.validity}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/80 rounded-full transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Certificate Image Frame */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner flex items-center justify-center p-2">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Description */}
          <div className="space-y-2.5">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              {cert.title}
            </h3>
            <p className="text-xs font-bold text-slate-600">
              الجهة المصدرة: <span className="text-aurex-navy">{cert.issuer}</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {cert.brands.map((b, i) => (
                <span key={i} className="text-[11px] font-black text-aurex-green bg-aurex-green-subtle px-3 py-1 rounded-lg">
                  موزّع معتمد: {b}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-600 font-bold hidden sm:inline">شهادة معتمدة ومفعلة</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-black hover:bg-slate-800 transition-colors"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
}
