"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, CheckCircle2, Building2, MessageSquare } from "lucide-react";
import { ProjectItem, COMPANY_INFO } from "@/data/companyData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-start justify-center p-3 sm:p-6 pt-24 sm:pt-28 pb-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp max-h-[80vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-aurex-navy" />
            <span className="text-xs font-extrabold text-aurex-green bg-aurex-green-subtle px-3 py-1 rounded-full">
              {project.categoryLabel}
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

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* Main Project Image */}
          {project.image && (
            <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Details */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <MapPin className="w-4 h-4 text-aurex-navy" />
              <span>الموقع: {project.location}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
              {project.description}
            </p>

            {/* Scope of Work */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <h4 className="text-xs font-black text-slate-900">نطاق الأعمال المنفذة:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.scope.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-slate-600 font-bold hidden sm:inline">أوريكس للمقاولات الكهروميكانيكية</span>
          <a
            href={`https://wa.me/2${COMPANY_INFO.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-aurex-green hover:bg-aurex-green-dark text-white text-xs font-black flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>مراسلة عبر الواتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
}
