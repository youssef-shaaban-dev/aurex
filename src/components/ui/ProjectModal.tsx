"use client";

import Image from "next/image";
import { X, MapPin, CheckCircle2, Building2, PhoneCall } from "lucide-react";
import { ProjectItem } from "@/data/companyData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-aurex-navy" />
            <span className="text-xs font-bold text-aurex-green bg-aurex-green-subtle px-3 py-1 rounded-full">
              {project.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Project Image */}
          {project.image && (
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Details */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <MapPin className="w-4 h-4 text-aurex-navy" />
              <span>الموقع: {project.location}</span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>

            {/* Scope of Work */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900">نطاق الأعمال المنفذة:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-aurex-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">أوريكس - جودة موثوقة ونطاق عمل محترف</span>
          <a
            href="#contact"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-aurex-navy hover:bg-aurex-navy-dark text-white text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>طلب مشروع مماثل</span>
          </a>
        </div>

      </div>
    </div>
  );
}
