import { Target, Eye, Heart, Shield, Lightbulb, Sparkles } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-[#7AB82E] opacity-10 rounded-full -top-64 -left-32 blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#0BA4B5] opacity-10 rounded-full -bottom-48 -right-32 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-[#7AB82E] opacity-5 rounded-full top-1/4 right-0 animate-pulse"></div>
        <div className="absolute w-[450px] h-[450px] bg-[#0BA4B5] opacity-5 rounded-full top-0 left-1/3 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-80 h-80 bg-[#7AB82E] opacity-5 rounded-full bottom-1/4 left-0 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-[#0BA4B5] opacity-5 rounded-full bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-[#7AB82E] opacity-5 rounded-full top-1/2 left-1/2 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-light mb-6">
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight tracking-wide">
            Nuestra Misión y Visión
          </h2>
        </div>

        {/* Misión y Visión - Lado a Lado */}
        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {/* Misión */}
          <div className="group relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-12 border-2 border-[#7AB82E] shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-[#7AB82E] p-4 rounded-2xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light text-gray-900 tracking-wide">Nuestra Misión</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Democratizar el acceso al ahorro colectivo mediante una plataforma digital segura, transparente y eficiente que empodera a las comunidades para alcanzar sus metas financieras.
                </p>
                <div className="h-px bg-gradient-to-r from-[#7AB82E] to-transparent"></div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Transformamos la forma tradicional de ahorrar, brindando herramientas modernas que faciliten la construcción de un futuro financiero sólido para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0BA4B5] to-[#0891A0] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white rounded-3xl p-12 border-2 border-[#0BA4B5] shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-[#0BA4B5] p-4 rounded-2xl">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-light text-gray-900 tracking-wide">Nuestra Visión</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Ser la plataforma líder en Latinoamérica para el ahorro colectivo digital, reconocida por transformar vidas a través de la inclusión financiera y la innovación.
                </p>
                <div className="h-px bg-gradient-to-r from-[#0BA4B5] to-transparent"></div>
                <p className="text-gray-600 leading-relaxed font-light">
                  Creamos un ecosistema donde cada persona tenga acceso a herramientas financieras justas, construyendo un futuro de seguridad y prosperidad compartida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores - Diseño Horizontal con Cards */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] px-5 py-2 rounded-full text-sm font-light mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Lo que nos define</span>
            </div>
            <h3 className="text-5xl font-light text-gray-900 mb-4 tracking-wide">
              Nuestros Valores
            </h3>
            <div className="w-24 h-1 bg-[#7AB82E] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#7AB82E] opacity-10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-light text-gray-900 mb-4 text-center tracking-wide">Confiabilidad</h4>
              <p className="text-gray-600 leading-relaxed text-center font-light">
                Garantizamos seguridad, puntualidad y cumplimiento en cada transacción, construyendo relaciones duraderas con nuestra comunidad.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#0BA4B5] opacity-10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#0BA4B5] to-[#0891A0] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-light text-gray-900 mb-4 text-center tracking-wide">Responsabilidad</h4>
              <p className="text-gray-600 leading-relaxed text-center font-light">
                Actuamos con ética, transparencia y compromiso en la gestión de recursos, priorizando el bienestar de nuestros miembros.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#7AB82E] opacity-10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-2xl font-light text-gray-900 mb-4 text-center tracking-wide">Innovación</h4>
              <p className="text-gray-600 leading-relaxed text-center font-light">
                Adoptamos tecnología de vanguardia para simplificar y mejorar continuamente la experiencia de ahorro colectivo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] rounded-3xl p-12 shadow-2xl overflow-hidden">
              {/* Animated background patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-64 h-64 bg-white rounded-full -top-32 -right-32 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -left-48 group-hover:scale-150 transition-transform duration-1000"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-light mb-6">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>Comienza tu viaje financiero</span>
                </div>
                
                <h3 className="text-5xl font-light text-white mb-6 tracking-wide group-hover:scale-105 transition-transform duration-300">
                  Únete a nuestra misión
                </h3>
                
                <p className="text-xl text-white text-opacity-90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                  Forma parte de la comunidad que está transformando el ahorro en Latinoamérica
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group/btn bg-white text-[#7AB82E] px-10 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg text-lg hover:shadow-2xl flex items-center space-x-2">
                    <span>Comienza Hoy</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-[#7AB82E] transition-all text-lg">
                    Conoce Más
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-12 flex flex-wrap justify-center gap-8">
                  <div className="text-center group/stat">
                    <div className="text-3xl font-light text-white mb-1 group-hover/stat:scale-110 transition-transform">2,000+</div>
                    <div className="text-sm text-white text-opacity-80 font-light">Miembros Activos</div>
                  </div>
                  <div className="w-px h-12 bg-white opacity-20"></div>
                  <div className="text-center group/stat">
                    <div className="text-3xl font-light text-white mb-1 group-hover/stat:scale-110 transition-transform">$5M+</div>
                    <div className="text-sm text-white text-opacity-80 font-light">En Ahorros</div>
                  </div>
                  <div className="w-px h-12 bg-white opacity-20"></div>
                  <div className="text-center group/stat">
                    <div className="text-3xl font-light text-white mb-1 group-hover/stat:scale-110 transition-transform">98%</div>
                    <div className="text-sm text-white text-opacity-80 font-light">Satisfacción</div>
                  </div>
                </div>
              </div>
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