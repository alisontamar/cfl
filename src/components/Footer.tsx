export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D] text-white overflow-hidden"
      aria-label="Pie de página"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full -bottom-48 -left-32 animate-pulse"></div>
        <div
          className="absolute w-80 h-80 bg-[#5A8C22]/10 dark:bg-[#00E5FF]/15 rounded-full -bottom-32 right-1/4 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full top-1/2 -right-48 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
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
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
            >
              <img
                src="/logo.webp"
                alt="Capital For Live Logo"
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
              />
              <div>
                <h2 className="text-xl font-bold text-white dark:text-[#E8F4F8]">Capital For Live</h2>
                <p className="text-sm text-white/80 dark:text-[#A8C5D1]">Ahorro Inteligente</p>
              </div>
            </div>
            <p className="text-white/90 dark:text-[#A8C5D1] text-sm leading-relaxed max-w-lg">
              Transformando el ahorro tradicional con tecnología moderna.
              Tu futuro financiero comienza aquí con nuestra comunidad de confianza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white dark:text-[#E8F4F8] mb-4 text-base">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#funciona"
                  className="text-white/80 dark:text-[#A8C5D1] hover:text-white dark:hover:text-[#E8F4F8] text-sm transition-colors hover:underline"
                  aria-label="Ver cómo funciona"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-white/80 dark:text-[#A8C5D1] hover:text-white dark:hover:text-[#E8F4F8] text-sm transition-colors hover:underline"
                  aria-label="Ver beneficios"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#modalidades"
                  className="text-white/80 dark:text-[#A8C5D1] hover:text-white dark:hover:text-[#E8F4F8] text-sm transition-colors hover:underline"
                  aria-label="Ver modalidades"
                >
                  Modalidades
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white/80 dark:text-[#A8C5D1] hover:text-white dark:hover:text-[#E8F4F8] text-sm transition-colors hover:underline"
                  aria-label="Ir a contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 dark:bg-[#0D5269]/30 mb-6" aria-hidden="true"></div>

        <p className="text-white/70 dark:text-[#A8C5D1] text-lg text-center mb-4">
          Powered by <a href="https://wa.me/+59172239720?text=Hola, quisiera una solución digital para mi negocio, por favor" className="text-gray-200 dark:text-[#daf0f3] hover:text-white dark:hover:text-[#b3cbd3] text-xl transition-colors underline">ByteTwo</a>
        </p>
        <p className="text-white/70 dark:text-[#A8C5D1] text-sm text-center">
          &copy; {new Date().getFullYear()} Capital For Live. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}