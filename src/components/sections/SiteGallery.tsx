"use client";

import Image from "next/image";
import { Camera, CheckCircle } from "lucide-react";

const SITE_PHOTOS = [
  {
    title: "محطات الشيلرات المركزية",
    subtitle: "تركيب واختبار محطات التبريد العملاقة للمستشفيات والأبراج",
    image: "/images/site/chillers.png",
  },
  {
    title: "شبكات الصاج والدكت المكشوف",
    subtitle: "تصنيع وعزل مجاري الهواء للصالات الرياضية والمراكز التجارية",
    image: "/images/site/ductwork_black.png",
  },
  {
    title: "مخرجات وموزعات الهواء السقفية",
    subtitle: "تركيب الجريلات والمنافيخ وتوازن الهواء وفق الكود الهندسي",
    image: "/images/site/ductwork_clean.png",
  },
  {
    title: "وحدات VRF/VRV الخارجية",
    subtitle: "تثبيت وتوزيع الأسطح وأنظمة الفريون ذكية الأداء",
    image: "/images/site/vrf_roof.png",
  },
  {
    title: "الوحدات المخفية الكونسيلد",
    subtitle: "تأسيس شبكات الفريون وتعليق الوحدات الداخلية للفيلا والمكاتب",
    image: "/images/site/concealed_units.png",
  },
];

export default function SiteGallery() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aurex-navy-light/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurex-green/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-aurex-green-light border border-white/10 text-xs font-bold">
            <Camera className="w-4 h-4" />
            <span>معاينة حية لمستويات التنفيذ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            لقطات من مواقع التنفيذ الميدانية
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-light">
            تعكس صور مواقع العمل مدى دقة فريقنا الهندسي واحترافيته في تنفيذ الدكت، عزل الأنابيب، وتركيب الشيلرات والمعدات.
          </p>
        </div>

        {/* Masonry / Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-white/10 h-80 shadow-xl"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

              <div className="absolute bottom-5 right-5 left-5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-aurex-green-light text-xs font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>دقة هندسية 100%</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-aurex-green-light transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
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
