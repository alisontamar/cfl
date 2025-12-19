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
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] backdrop-blur-xl border-b border-white border-opacity-10 z-50">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -top-48 -left-32 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-[#0BA4B5] opacity-10 rounded-full -top-32 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-white p-1.5 rounded-lg group-hover:scale-105 transition-transform shadow-lg">
              <Shield className="w-5 h-5 text-[#7AB82E]" />
            </div>
            <span className="text-lg font-bold text-white">
              Capital For Life
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('modalidades')}
              className="text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Modalidades
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="ml-4 bg-white text-[#7AB82E] hover:bg-opacity-90 px-5 py-2 rounded-lg transition-all text-sm font-semibold shadow-lg"
            >
              Únete
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#5A8C22] bg-opacity-95 border-t border-white border-opacity-10 animate-slide-down backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection('modalidades')}
              className="block w-full text-left text-white text-opacity-90 hover:text-opacity-100 hover:bg-white hover:bg-opacity-10 px-3 py-2 rounded-lg transition-all text-sm font-medium"
            >
              Modalidades
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full bg-white text-[#7AB82E] hover:bg-opacity-90 px-5 py-2 rounded-lg transition-all text-sm font-semibold mt-3 shadow-lg"
            >
              Únete
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}