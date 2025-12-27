import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="
      relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-br
      from-[#7AB82E] to-[#5A8C22]
      dark:from-[#0F2A14] dark:to-[#081B0D]
    ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="
          absolute w-96 h-96 rounded-full -top-48 -left-48 animate-pulse
          bg-white/5
          dark:bg-[#6FCD13]/10
        " />
        <div
          className="
            absolute w-[500px] h-[500px] rounded-full -bottom-64 -right-64 animate-pulse
            bg-white/5
            dark:bg-[#0BA4B5]/10
          "
          style={{ animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="
              inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm animate-fade-in
              bg-white/20
              dark:bg-[#6FCD13]/15
            ">
              <Sparkles className="w-4 h-4" />
              <span>Ahorro Inteligente</span>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="block">Capital</span>
                <span className="block text-[#E9F7D9] dark:text-[#6FCD13]">
                  For Life
                </span>
              </h1>

              <div className="
                w-20 h-1 rounded-full
                bg-[#0BA4B5]
                dark:bg-[#6FCD13]
              " />

              <p className="
                text-xl max-w-lg leading-relaxed
                text-white/90
                dark:text-slate-300
              ">
                Bienvenido a Capital For Life, el sistema que rescata la tradición del ahorro colectivo,
                potenciado por la seguridad digital y la máxima confiabilidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="mailto:dreamersb648@gmail.com?subject=Solicitud%20Acceso%20Beta%20CFL&body=Hola,%20me%20interesa%20unirme%20a%20la%20lista%20de%20espera%20de%20la%20app%20CFL." className="
                group px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-2xl
                bg-white text-[#5A8C22]
                hover:bg-white/90
                dark:bg-[#6FCD13] dark:text-background-dark
                dark:hover:bg-[#8AFB2A]
                flex items-center justify-center space-x-2
              ">
                <span>Comienza Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#pasanaku" className="
                bg-transparent border-2 px-8 py-4 rounded-full font-semibold transition-all
                border-white text-white
                hover:bg-white hover:text-[#5A8C22]
                dark:border-[#6FCD13] dark:text-[#6FCD13]
                dark:hover:bg-[#6FCD13] dark:hover:text-background-dark
              ">
                Conocer más
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#5A8C22] dark:border-[#6FCD13]" />
                <div className="w-12 h-12 rounded-full bg-[#0BA4B5] border-2 border-[#5A8C22] dark:border-[#6FCD13]" />
                <div className="
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                  bg-white text-[#5A8C22] border-2 border-[#5A8C22]
                  dark:bg-[#081B0D] dark:text-[#6FCD13] dark:border-[#6FCD13]
                ">
                  2K+
                </div>
              </div>

              <div className="text-white/90 dark:text-slate-300">
                <p className="font-semibold">Descubra el Pasanaku</p>
                <p className="text-sm text-white/70 dark:text-slate-400">
                  Únete a la comunidad de ahorro colectivo
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-float group cursor-pointer">
            <div className="
              absolute inset-0 rounded-3xl blur-3xl opacity-20
              bg-gradient-to-br from-white to-gray-100
              dark:bg-gray-600 dark:to-transparent
            " />

            <div className="relative">
              <img
                src="mascot.svg"
                alt="CFL Mascot"
                className="w-full h-auto rounded-3xl shadow-2xl transition-opacity duration-500 group-hover:opacity-0"
              />
              <img
                src="mascot2.webp"
                alt="CFL Mascot 2"
                className="w-full h-auto rounded-3xl shadow-2xl absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
