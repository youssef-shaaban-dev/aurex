"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ChevronLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_LINKS = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#portfolio", label: "مشاريعنا" },
  { href: "#certificates", label: "الشهادات والاعتمادات" },
  { href: "#contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="floating-nav rounded-full px-5 py-2.5 flex items-center justify-between transition-all">
          
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-slate-200 p-0.5 shadow-sm">
              <Image
                src="/images/logo.png"
                alt={COMPANY_INFO.fullName}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-aurex-navy tracking-tight">
                AUREX <span className="text-aurex-green font-bold">أوريكس</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold -mt-1">
                للمقاولات الكهروميكانيكية
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm font-extrabold text-slate-800 hover:text-aurex-navy transition-colors py-1 relative"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Button: WhatsApp Only */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/2${COMPANY_INFO.phone1}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-aurex-green hover:bg-aurex-green-dark text-white text-xs sm:text-sm font-black shadow-sm transition-all hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تواصل عبر الواتساب</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-extrabold text-slate-900 hover:text-aurex-navy py-2.5 border-b border-slate-100"
              >
                <span>{link.label}</span>
                <ChevronLeft className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`https://wa.me/2${COMPANY_INFO.phone1}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-aurex-green text-white text-sm font-black shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
