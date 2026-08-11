import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import SiteGallery from "@/components/sections/SiteGallery";
import Certificates from "@/components/sections/Certificates";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <SiteGallery />
      <Certificates />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
