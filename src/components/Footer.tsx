export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative bg-[#0F2A14] dark:bg-[#081B0D] text-white"
      aria-label="Pie de página"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer group"
              onClick={scrollToTop}
              role="button"
              aria-label="Ir al inicio"
              tabIndex={0}
            >
              <img
                src="/logo.webp"
                alt="Capital For Life Logo"
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <h2 className="text-xl font-bold text-white">Capital For Life</h2>
                <p className="text-sm text-white/70">Ahorro Inteligente</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg">
              Transformando el ahorro tradicional con tecnología moderna.
              Tu futuro financiero comienza aquí con nuestra comunidad de confianza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#funciona"
                  className="text-white/70 hover:text-white text-sm transition-colors hover:underline"
                  aria-label="Ver cómo funciona"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-white/70 hover:text-white text-sm transition-colors hover:underline"
                  aria-label="Ver beneficios"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#modalidades"
                  className="text-white/70 hover:text-white text-sm transition-colors hover:underline"
                  aria-label="Ver modalidades"
                >
                  Modalidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/70 hover:text-white text-sm transition-colors hover:underline"
                  aria-label="Ir a contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" aria-hidden="true"></div>


        <p className="text-white/60 text-sm text-center">
          &copy; {new Date().getFullYear()} Capital For Life. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}