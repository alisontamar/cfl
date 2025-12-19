import { MessageCircle, Mail, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-32 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-white opacity-5 rounded-full -top-64 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#0BA4B5] opacity-10 rounded-full top-1/4 -right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[500px] h-[500px] bg-white opacity-5 rounded-full -bottom-48 right-1/4 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-80 h-80 bg-[#0BA4B5] opacity-10 rounded-full bottom-1/4 left-0 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-light mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Estamos aquí para ti</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-white mb-6 tracking-wide">
            Únete a la Comunidad
          </h2>
          <div className="w-24 h-1 bg-[#0BA4B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white text-opacity-90 font-light leading-relaxed">
            Comienza tu camino hacia la libertad financiera junto a miles de personas que ya confían en nosotros.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* WhatsApp Card */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4 tracking-wide">WhatsApp</h3>
              <p className="text-white text-opacity-90 mb-8 leading-relaxed font-light">
                ¿Tienes preguntas? Nuestro equipo está listo para ayudarte. Escríbenos y te responderemos de inmediato.
              </p>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center space-x-2 bg-white text-[#7AB82E] px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Abrir WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-500">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4 tracking-wide">Correo Electrónico</h3>
              <p className="text-white text-opacity-90 mb-8 leading-relaxed font-light">
                También puedes escribirnos por correo y te responderemos a la brevedad posible.
              </p>
              <a
                href="mailto:contacto@capitalforlife.com"
                className="group/btn inline-flex items-center space-x-2 bg-white text-[#7AB82E] px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar correo</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats & CTA Card */}
        <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group/stat">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#7AB82E] opacity-10 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover/stat:scale-110 group-hover/stat:rotate-3 transition-transform duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">2,000+</div>
                <p className="text-gray-600 font-light">Miembros Activos</p>
              </div>

              <div className="text-center group/stat">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#0BA4B5] opacity-10 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-[#0BA4B5] to-[#0891A0] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover/stat:scale-110 group-hover/stat:rotate-3 transition-transform duration-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">$5M+</div>
                <p className="text-gray-600 font-light">Ahorros Gestionados</p>
              </div>

              <div className="text-center group/stat">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-[#7AB82E] opacity-10 rounded-full blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover/stat:scale-110 group-hover/stat:rotate-3 transition-transform duration-500">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">98%</div>
                <p className="text-gray-600 font-light">Satisfacción</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12"></div>

            {/* CTA Section */}
            <div className="text-center">
              <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">
                Crece con Nosotros
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Únete a una comunidad que comparte tus metas financieras. Juntos construimos un futuro próspero basado en la confianza, la transparencia y el crecimiento mutuo.
              </p>
              <button className="group/btn bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                <span>Comenzar Ahora</span>
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