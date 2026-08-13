"use client";

import Image from "next/image";
import { Camera, CheckCircle } from "lucide-react";

const SITE_PHOTOS = [
  {
    title: "محطات الشيلرات المركزية",
    subtitle: "تركيب واختبار محطات التبريد العملاقة للمستشفيات والأبراج",
    image: "/images/site/chillers.webp",
  },
  {
    title: "شبكات الصاج والدكت المكشوف",
    subtitle: "تصنيع وعزل مجاري الهواء للصالات الرياضية والمراكز التجارية",
    image: "/images/site/ductwork_black.webp",
  },
  {
    title: "مخرجات وموزعات الهواء السقفية",
    subtitle: "تركيب الجريلات والمنافيخ وتوازن الهواء وفق الكود الهندسي",
    image: "/images/site/ductwork_clean.webp",
  },
  {
    title: "وحدات تكييف خارجية كونسيلد",
    subtitle: "تثبيت وتوريد الوحدات الخارجية لفيلا بكمبوند الهضبة بمدينة 6 أكتوبر",
    image: "/images/site/vrf_roof.webp",
  },
  {
    title: "وحدات فان كويل شيلد ووتر (Fan Coil Units)",
    subtitle: "تنفيذ وحدات الفان كويل بمطعم بيتزا كينج - مول العباسي أمام مدينة الرحاب",
    image: "/images/site/concealed_units.webp",
  },
];

export default function SiteGallery() {
  return (
    <section className="py-20 bg-slate-100 text-slate-900 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-200/60 text-sky-900 text-xs font-extrabold">
            <Camera className="w-4 h-4 text-sky-700" />
            <span>معاينة موقعية موثوقة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            لقطات من مواقع التنفيذ الميدانية
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            تعكس صور مواقع العمل مدى دقة فريقنا الهندسي واحترافيته في تنفيذ الدكت، عزل الأنابيب، وتركيب المعدات.
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 h-80 shadow-xs"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

              <div className="absolute bottom-5 right-5 left-5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-extrabold">
                  <CheckCircle className="w-4 h-4" />
                  <span>دقة تنفيذ هندسية</span>
                </div>
                <h3 className="text-lg font-black text-white">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-200 font-medium line-clamp-2">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
