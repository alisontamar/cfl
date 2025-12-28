import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b
      bg-gradient-to-br 
      from-[#7AB82E] to-[#5A8C22]
      dark:from-[#0B4A5E] dark:to-[#062D3D]
      border-white/10 dark:border-[#0D5269]/30
    ">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="
          absolute w-96 h-96 rounded-full -top-48 -left-32 animate-pulse
          bg-white/5
          dark:bg-[#7AFF6C]/10
        " />
        <div
          className="
            absolute w-80 h-80 rounded-full -top-32 right-1/4 animate-pulse
            bg-[#5A8C22]/10
            dark:bg-[#00E5FF]/15
          "
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <img
              src="/logo.webp"
              alt="Capital For Life Logo"
              className="w-16 h-16 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-base font-bold text-white dark:text-[#E8F4F8]">
              Capital For Life
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('funciona')}
              className="
                text-white/90 hover:text-white
                hover:bg-white/10
                dark:text-[#A8C5D1] dark:hover:text-[#E8F4F8]
                dark:hover:bg-[#0D5269]/50
                px-3 py-2 rounded-lg transition-all text-sm font-medium
              "
            >
              Cómo Funciona
            </button>

            <button
              onClick={() => scrollToSection('beneficios')}
              className="
                text-white/90 hover:text-white
                hover:bg-white/10
                dark:text-[#A8C5D1] dark:hover:text-[#E8F4F8]
                dark:hover:bg-[#0D5269]/50
                px-3 py-2 rounded-lg transition-all text-sm font-medium
              "
            >
              Beneficios
            </button>

            <button
              onClick={() => scrollToSection('modalidades')}
              className="
                text-white/90 hover:text-white
                hover:bg-white/10
                dark:text-[#A8C5D1] dark:hover:text-[#E8F4F8]
                dark:hover:bg-[#0D5269]/50
                px-3 py-2 rounded-lg transition-all text-sm font-medium
              "
            >
              Modalidades
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="
                ml-4 px-5 py-2 rounded-lg transition-all text-sm font-semibold shadow-lg
                bg-white text-[#5A8C22]
                hover:bg-white/90
                dark:bg-[#7AFF6C] dark:text-[#062D3D]
                dark:hover:bg-[#8FFF7C]
              "
            >
              Únete
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden p-2 rounded-lg transition-colors
              hover:bg-white/10
              dark:hover:bg-[#0D5269]/50
            "
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white dark:text-[#E8F4F8]" />
            ) : (
              <Menu className="w-5 h-5 text-white dark:text-[#E8F4F8]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
          md:hidden border-t animate-slide-down backdrop-blur-xl
          bg-[#5A8C22]/95
          dark:bg-[#062D3D]/95
          border-white/10 dark:border-[#0D5269]/30
        ">
          <div className="px-4 py-4 space-y-2">
            {['funciona', 'beneficios', 'modalidades'].map((id, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(id)}
                className="
                  block w-full text-left text-white/90 hover:text-white
                  hover:bg-white/10 
                  dark:text-[#A8C5D1] dark:hover:text-[#E8F4F8]
                  dark:hover:bg-[#0D5269]/50
                  px-3 py-2 rounded-lg transition-all text-sm font-medium
                "
              >
                {id === 'funciona' ? 'Cómo Funciona' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contacto')}
              className="
                block w-full mt-3 px-5 py-2 rounded-lg transition-all text-sm font-semibold shadow-lg
                bg-white text-[#5A8C22]
                hover:bg-white/90
                dark:bg-[#7AFF6C] dark:text-[#062D3D]
                dark:hover:bg-[#8FFF7C]
              "
            >
              Únete
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}