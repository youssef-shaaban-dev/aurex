"use client";

import { useState } from "react";
import Image from "next/image";
import { Building, MapPin, Eye, ArrowLeft } from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/companyData";
import ProjectModal from "@/components/ui/ProjectModal";

const CATEGORIES = [
  { id: "all", label: "كافة المشاريع" },
  { id: "commercial", label: "منشآت إدارية وتجارية" },
  { id: "medical", label: "مستشفيات وقطاع طبي" },
  { id: "hospitality", label: "فنادق ومنتجعات" },
  { id: "banking", label: "قطاع مصرفي وبنوك" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-navy-subtle text-aurex-navy text-xs font-bold">
            <Building className="w-4 h-4 text-aurex-green" />
            <span>سجل إنجازاتنا في السوق المصري</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            سابقة الأعمال والمشاريع المنفذة
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            نفذت أوريكس عدداً كبيراً من المشاريع الكبرى للمؤسسات الحكومية والخاصة والبنوك والمستشفيات والفنادق بأعلى مستويات الجودة.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === tab.id
                  ? "bg-aurex-navy text-white shadow-md shadow-aurex-navy/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500 text-sm font-bold">
                    أوريكس للمقاولات
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Category Label Pill */}
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-bold text-white bg-aurex-navy/80 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover Eye Trigger Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/40 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-white text-aurex-navy flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-aurex-navy transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-aurex-green flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-aurex-navy group-hover:text-aurex-green transition-colors">
                  <span>عرض التفاصيل الكاملة</span>
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal detail */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
