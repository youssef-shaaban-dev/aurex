"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock, 
  Building 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "أنظمة التكييف المركزي (Chilled Water / VRF)",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "أنظمة التكييف المركزي (Chilled Water / VRF)",
        message: ""
      });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aurex-green-subtle text-aurex-green text-xs font-bold">
            <Phone className="w-4 h-4" />
            <span>تواصل معنا الآن</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            يسعدنا استقبال استفساراتكم ومشاريعكم
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            تواصل مع فريق المهندسين لمناقشة احتياجات مشاريعكم واستلام العروض الفنية والمالية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Phone Connect Box */}
            <div className="p-8 rounded-3xl navy-gradient text-white shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-aurex-green-light" />
                <span>اتصال مباشر بالمهندسين</span>
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phone1}`}
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-aurex-green flex items-center justify-center text-white font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-300 block">خط المبيعات والاستشارات</span>
                      <span className="text-lg font-bold text-white dir-ltr inline-block">{COMPANY_INFO.phone1}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-aurex-green-light group-hover:-translate-x-1 transition-transform">اتصل الآن</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone2}`}
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-aurex-navy-light flex items-center justify-center text-white font-bold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-300 block">المتابعة والدعم الفني</span>
                      <span className="text-lg font-bold text-white dir-ltr inline-block">{COMPANY_INFO.phone2}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-aurex-green-light group-hover:-translate-x-1 transition-transform">اتصل الآن</span>
                </a>
              </div>
            </div>

            {/* Address & Working Hours Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-aurex-navy-subtle text-aurex-navy flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-aurex-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">عنوان المقر الرئيسي</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-aurex-green-subtle text-aurex-green flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-aurex-green" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">مواعيد العمل الرسمية</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-aurex-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">البريد الإلكتروني</h4>
                  <p className="text-xs font-mono text-slate-600 mt-1 dir-ltr text-right">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-card space-y-6 relative">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">أرسل تفاصيل مشروعك</h3>
                <p className="text-xs text-slate-500 mt-1">سيتواصل معك مهندس متخصص خلال أقل من 24 ساعة.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-aurex-green-subtle border border-aurex-green-light/40 text-center space-y-4 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-aurex-green text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">تم استلام طلبك بنجاح!</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    شكراً لتواصلك مع أوريكس للمقاولات الكهروميكانيكية. تم تحويل طلبك لمهندس المشاريع وسنقوم بالاتصال بك قريباً.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        الاسم بالكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-aurex-navy focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        رقم الهاتف / الواتساب <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01xxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-aurex-navy focus:bg-white transition-all text-right"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        البريد الإلكتروني (اختياري)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-aurex-navy focus:bg-white transition-all dir-ltr text-right"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        نوع الخدمة المطلوبة
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-aurex-navy focus:bg-white transition-all"
                      >
                        <option value="أنظمة التكييف المركزي (Chilled Water / VRF)">أنظمة التكييف المركزي (Chilled Water / VRF)</option>
                        <option value="توريد وشراء أجهزة تكييف معتمدة">توريد وشراء أجهزة تكييف معتمدة (Carrier/Midea/Haier)</option>
                        <option value="تصنيع وتوريد مجاري الهواء (Ductwork)">تصنيع وتوريد مجاري الهواء والعزل (Ductwork)</option>
                        <option value="تأسيس شبكات الفريون النحاسية">تأسيس شبكات الفريون النحاسية</option>
                        <option value="أعمال مكافحة الحريق والإنذار MEP">أعمال مكافحة الحريق والإنذار MEP</option>
                      </select>
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      تفاصيل المشروع أو الاستفسار
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اذكر تفاصيل المساحة، نوع المبنى، أية متطلبات خاصة..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-aurex-navy focus:bg-white transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-aurex-navy hover:bg-aurex-navy-dark text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>إرسال الطلب المباشر</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
