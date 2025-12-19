import { Users, Shield, TrendingUp, Sparkles, ArrowRight, Check } from 'lucide-react';

export default function AboutCFL() {
  return (
    <section id="como-funciona" className="relative py-32 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white opacity-5 rounded-full -top-64 -right-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#0BA4B5] opacity-10 rounded-full bottom-0 left-0 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-light mb-6">
            <Sparkles className="w-4 h-4" />
            <span>El Pasanaku Digital</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-wide">
            ¿Qué es Capital For Life?
          </h2>
          <div className="w-24 h-1 bg-[#0BA4B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white text-opacity-90 leading-relaxed font-light">
            La evolución digital del tradicional Pasanaku. Ahorro comunitario con seguridad, transparencia y tecnología moderna.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[#7AB82E] p-4 rounded-xl flex-shrink-0 animate-bounce-subtle">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Ahorro Comunitario</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Únete a grupos donde cada miembro contribuye y se beneficia del poder del colectivo. Juntos llegamos más lejos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-[#0BA4B5] p-4 rounded-xl flex-shrink-0 animate-bounce-subtle" style={{ animationDelay: '0.2s' }}>
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Transparencia Total</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Accede en tiempo real a todas las transacciones, aportes y retiros. Todo visible, todo claro.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-[#7AB82E] p-4 rounded-xl flex-shrink-0 animate-bounce-subtle" style={{ animationDelay: '0.4s' }}>
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">100% Confiable</h4>
                  <p className="text-gray-600 leading-relaxed font-light">
                    Sistema respaldado por tecnología segura y gestión profesional que garantiza tus aportes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Box */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-3xl p-10 shadow-2xl h-full">
              <h3 className="text-3xl font-light text-gray-900 mb-6 tracking-wide">
                Modernizando el Ahorro Tradicional
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                El Pasanaku es una tradición ancestral de ahorro colectivo. Capital For Life lleva este concepto al siglo XXI.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#7AB82E] rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light">Gestión profesional de fondos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#7AB82E] rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light">Seguridad digital avanzada</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#7AB82E] rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light">Acceso 24/7 desde cualquier lugar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#7AB82E] rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-light">Comunidad verificada y confiable</p>
                </div>
              </div>

              <button className="w-full bg-[#7AB82E] hover:bg-[#6AA525] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Conoce más sobre CFL</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-3xl p-12 text-center shadow-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-4xl font-light bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] bg-clip-text text-transparent mb-4 tracking-wide">
            Construye tu futuro con la fuerza de la comunidad
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Combina la sabiduría del ahorro tradicional con la innovación tecnológica. Un sistema donde todos ganan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#7AB82E] bg-opacity-10 px-6 py-3 rounded-full">
              <span className="text-[#7AB82E] font-medium">2,000+ Miembros Activos</span>
            </div>
            <div className="bg-[#0BA4B5] bg-opacity-10 px-6 py-3 rounded-full">
              <span className="text-[#0BA4B5] font-medium">$5M+ en Ahorros</span>
            </div>
            <div className="bg-[#7AB82E] bg-opacity-10 px-6 py-3 rounded-full">
              <span className="text-[#7AB82E] font-medium">98% Satisfacción</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}