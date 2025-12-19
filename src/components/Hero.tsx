import {  ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-white opacity-5 rounded-full -bottom-64 -right-64 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Ahorro Inteligente</span>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="block">Capital</span>
                <span className="block text-[#7cdbe5]">For Life</span>
              </h1>
              <div className="w-20 h-1 bg-[#0BA4B5] rounded-full"></div>
              <p className="text-xl text-white text-opacity-90 max-w-lg leading-relaxed">
                Bienvenido a Capital For Life, el sistema que rescata la tradición del ahorro colectivo,
                                 potenciado por la seguridad digital y la máxima confiabilidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button className="group bg-white text-[#7AB82E] px-8 py-4 rounded-full font-semibold transition-all hover:bg-opacity-90 hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                <span>Comienza Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white hover:text-[#7AB82E]">
                Conocer más
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-white border-3 border-[#7AB82E]"></div>
                <div className="w-12 h-12 rounded-full bg-[#0BA4B5] border-3 border-[#7AB82E]"></div>
                <div className="w-12 h-12 rounded-full bg-white border-3 border-[#7AB82E] flex items-center justify-center text-[#7AB82E] font-bold text-sm">
                  2K+
                </div>
              </div>
              <div className="text-white text-opacity-90">
                <p className="font-semibold">2,000+ Miembros</p>
                <p className="text-sm text-opacity-75">Construyendo futuro juntos</p>
              </div>
            </div>
          </div>

          {/* Right Image - Floating Mascot */}
           <div className="relative animate-float group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-3xl blur-3xl opacity-20"></div>
            
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

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes grow {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes progress {
          from {
            width: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-grow {
          animation: grow 1s ease-out forwards;
        }

        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}