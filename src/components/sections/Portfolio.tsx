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
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold">
            <Building className="w-4 h-4 text-sky-600" />
            <span>إنجازاتنا الميدانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            سابقة الأعمال والمشاريع
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            استعرض أبرز المشاريع المنفذة للمؤسسات والشركات والمستشفيات والمولات التجارية بمصر.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all ${
                activeCategory === tab.id
                  ? "bg-sky-500 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-200 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-600 text-xs font-bold">
                    أوريكس للمقاولات
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                {/* Category Label */}
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-extrabold text-white bg-slate-900/80 px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-extrabold text-sky-600 group-hover:text-sky-700 transition-colors">
                  <span>عرض التفاصيل</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
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
