import { Calendar, Zap, Gavel, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function Modalities() {
  return (
    <section id="modalidades" className="relative py-32 bg-white overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#7AB82E] opacity-5 rounded-full -top-48 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#0BA4B5] opacity-5 rounded-full top-1/3 -right-32 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[450px] h-[450px] bg-[#7AB82E] opacity-5 rounded-full -bottom-48 right-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-80 h-80 bg-[#0BA4B5] opacity-5 rounded-full bottom-1/4 -left-32 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] px-5 py-2 rounded-full text-sm font-light mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Elige tu modalidad</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            Modalidades de Ahorro
          </h2>
          <div className="w-24 h-1 bg-[#0BA4B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Elige la modalidad que mejor se adapte a tus necesidades de ahorro y objetivos financieros.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 - Mensual */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] text-xs font-medium px-3 py-1.5 rounded-full">
                Muy Pronto
              </div>

              {/* Icon */}
              <div className="bg-[#7AB82E] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Calendar className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
                Pasanaku Mensual
              </h3>

              {/* Tag */}
              <div className="inline-block bg-[#7AB82E] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 w-fit">
                PasanaQR
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                Sistema de ahorro mensual donde realizas un aporte cada mes y recibes el total del fondo en el período que te corresponda.
              </p>

              {/* Details */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1.5">
                    <Clock className="w-4 h-4 text-[#7AB82E]" />
                  </div>
                  <span className="text-sm font-light">Ciclo: Mensual</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1.5">
                    <Calendar className="w-4 h-4 text-[#7AB82E]" />
                  </div>
                  <span className="text-sm font-light">Duración: Variable según grupo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Semanal */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0BA4B5] to-[#0891A0] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-[#0BA4B5] bg-opacity-10 text-[#0BA4B5] text-xs font-medium px-3 py-1.5 rounded-full">
                Muy Pronto
              </div>

              {/* Icon */}
              <div className="bg-[#0BA4B5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Zap className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
                Pasanaku Semanal
              </h3>

              {/* Tag */}
              <div className="inline-block bg-[#0BA4B5] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 w-fit">
                FastanaQR
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                Modalidad acelerada con aportes semanales, ideal para quienes buscan un ahorro más dinámico y rotación rápida del fondo.
              </p>

              {/* Details */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#0BA4B5] bg-opacity-10 rounded-full p-1.5">
                    <Clock className="w-4 h-4 text-[#0BA4B5]" />
                  </div>
                  <span className="text-sm font-light">Ciclo: Semanal</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#0BA4B5] bg-opacity-10 rounded-full p-1.5">
                    <Zap className="w-4 h-4 text-[#0BA4B5]" />
                  </div>
                  <span className="text-sm font-light">Modalidad rápida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Subasta */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] text-xs font-medium px-3 py-1.5 rounded-full">
                Muy Pronto
              </div>

              {/* Icon */}
              <div className="bg-[#7AB82E] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Gavel className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
                Pasanaku por Subasta
              </h3>

              {/* Tag */}
              <div className="inline-block bg-[#7AB82E] text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 w-fit">
                AuctionQR
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                Sistema de subasta donde los participantes pujan por recibir el fondo antes, añadiendo flexibilidad al ciclo tradicional.
              </p>

              {/* Details */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1.5">
                    <Gavel className="w-4 h-4 text-[#7AB82E]" />
                  </div>
                  <span className="text-sm font-light">Basado en ofertas</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1.5">
                    <Clock className="w-4 h-4 text-[#7AB82E]" />
                  </div>
                  <span className="text-sm font-light">Flexible y dinámico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          <div className="relative bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute w-64 h-64 bg-white rounded-full -top-32 -right-32 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="absolute w-80 h-80 bg-white rounded-full -bottom-40 -left-40 group-hover:scale-150 transition-transform duration-1000"></div>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl font-light text-white mb-4 tracking-wide">
                Próximamente disponibles
              </h3>
              <p className="text-white text-opacity-90 text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Estamos trabajando para traerte estas modalidades de ahorro muy pronto. Regístrate ahora para ser de los primeros en acceder.
              </p>
              <button className="group/btn bg-white text-[#7AB82E] px-8 py-3 rounded-full font-medium hover:scale-105 transition-all shadow-lg flex items-center space-x-2 mx-auto">
                <span>Notifícame</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
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

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}