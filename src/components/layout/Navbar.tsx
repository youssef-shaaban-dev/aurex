"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "عن أوريكس" },
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "سابقة الأعمال" },
  { href: "#certificates", label: "الشهادات والاعتمادات" },
  { href: "#contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-md"
          : "bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt={COMPANY_INFO.fullName}
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? "text-aurex-navy" : "text-white"
              }`}>
                AUREX <span className="text-aurex-green">أوريكس</span>
              </span>
              <span className={`text-[10px] font-medium tracking-wide transition-colors ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                للمقاولات الكهروميكانيكية
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 hover:text-aurex-green relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-aurex-green after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                  isScrolled ? "text-slate-700" : "text-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Phone Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone1}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-aurex-green hover:bg-aurex-green-dark text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-100 hover:text-aurex-green py-2 border-b border-slate-800/80 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronLeft className="w-4 h-4 text-slate-500" />
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-aurex-navy text-white text-sm font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا: {COMPANY_INFO.phone1}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-aurex-green text-white text-sm font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone2}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
