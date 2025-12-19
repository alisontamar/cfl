import { Shield, Heart, Lightbulb, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] text-white overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -top-48 -left-32 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#0BA4B5] opacity-10 rounded-full -bottom-64 -right-64 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-80 h-80 bg-white opacity-5 rounded-full top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6 group cursor-pointer" onClick={scrollToTop}>
              <div className="bg-white p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-[#7AB82E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-white tracking-wide">Capital For Life</span>
                <span className="text-xs text-white text-opacity-70 -mt-1">Ahorro Inteligente</span>
              </div>
            </div>
            <p className="text-white text-opacity-90 leading-relaxed mb-4 font-light">
              Transformando el ahorro tradicional con tecnología moderna. Tu futuro financiero comienza aquí.
            </p>
            <p className="text-sm text-white text-opacity-70 font-light">
              Sistema de ahorro colectivo digital basado en la confianza comunitaria y la innovación tecnológica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg tracking-wide">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#como-funciona" 
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all font-light hover:translate-x-1 inline-block"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#beneficios" 
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all font-light hover:translate-x-1 inline-block"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a 
                  href="#modalidades" 
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all font-light hover:translate-x-1 inline-block"
                >
                  Modalidades
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="text-white text-opacity-80 hover:text-opacity-100 transition-all font-light hover:translate-x-1 inline-block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg tracking-wide">Nuestros Valores</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <div className="bg-white bg-opacity-20 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-light text-white text-opacity-90">Confiabilidad</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-white bg-opacity-20 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="font-light text-white text-opacity-90">Responsabilidad</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-white bg-opacity-20 rounded-full p-2 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className="font-light text-white text-opacity-90">Innovación</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white bg-opacity-20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white text-opacity-70 text-sm font-light">
              &copy; {new Date().getFullYear()} Capital For Life (CFL). Todos los derechos reservados.
            </p>
            <p className="text-white text-opacity-60 text-xs mt-1 font-light">
              Construido con tecnología segura y transparente para tu tranquilidad.
            </p>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="bg-white text-[#7AB82E] p-3 rounded-full hover:scale-110 transition-all shadow-lg group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}