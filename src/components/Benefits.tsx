import { ShieldCheck, Target, Zap, Lock, Clock, LineChart, Check, Sparkles } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-32 bg-white overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#7AB82E] opacity-5 rounded-full -top-48 left-1/4 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#0BA4B5] opacity-5 rounded-full -bottom-48 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-[#7AB82E] opacity-5 rounded-full top-1/4 -left-32 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute w-80 h-80 bg-[#0BA4B5] opacity-5 rounded-full top-1/3 right-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-96 h-96 bg-[#7AB82E] opacity-5 rounded-full bottom-1/4 left-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[450px] h-[450px] bg-[#0BA4B5] opacity-5 rounded-full top-0 right-1/3 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute w-72 h-72 bg-[#7AB82E] opacity-5 rounded-full bottom-0 left-0 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] px-5 py-2 rounded-full text-sm font-light mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Nuestra Propuesta de Valor</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            ¿Por qué elegir CFL?
          </h2>
          <div className="w-24 h-1 bg-[#0BA4B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Combinamos el poder de la comunidad con herramientas financieras modernas para crear un entorno de ahorro sostenible.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-[#7AB82E] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              Confiabilidad Total
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Tu tranquilidad es nuestra prioridad. Garantizamos la seguridad de tus datos y pagos puntuales en cada ciclo.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 group/item">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <Lock className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Seguridad con encriptación avanzada</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <Clock className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Pagos puntuales garantizados</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Verificación de identidad rigurosa</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-[#0BA4B5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              Responsabilidad Rigurosa
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Gestión ética y control profesional en cada operación. Tu dinero está en manos responsables.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="bg-[#0BA4B5] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <Target className="w-4 h-4 text-[#0BA4B5]" />
                </div>
                <span className="text-gray-700 font-light">Gestión ética y transparente</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#0BA4B5] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <LineChart className="w-4 h-4 text-[#0BA4B5]" />
                </div>
                <span className="text-gray-700 font-light">Control y auditoría continua</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#0BA4B5] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#0BA4B5]" />
                </div>
                <span className="text-gray-700 font-light">Cumplimiento normativo estricto</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-[#7AB82E] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
              Innovación a tu Servicio
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              Tecnología de vanguardia que hace el ahorro fácil, accesible y transparente desde cualquier lugar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <Zap className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Pagos digitales instantáneos</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <LineChart className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Seguimiento en tiempo real</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#7AB82E] bg-opacity-10 rounded-full p-1 mt-0.5">
                  <Target className="w-4 h-4 text-[#7AB82E]" />
                </div>
                <span className="text-gray-700 font-light">Notificaciones automáticas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Feature Banner */}
        <div className="bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] rounded-3xl p-10 md:p-12 shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-4xl font-light mb-6 tracking-wide">
                Más que un Pasanaku Tradicional
              </h3>
              <p className="text-lg text-white text-opacity-90 leading-relaxed font-light">
                Mientras el Pasanaku tradicional depende de la confianza interpersonal y el manejo manual, CFL añade capas de protección y transparencia que lo hacen más seguro y eficiente.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between group hover:translate-x-2 transition-transform">
                <span className="font-light text-gray-700">Registro Digital</span>
                <div className="bg-[#7AB82E] rounded-full p-1.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="h-px bg-gray-100"></div>
              
              <div className="flex items-center justify-between group hover:translate-x-2 transition-transform">
                <span className="font-light text-gray-700">Pagos Automáticos</span>
                <div className="bg-[#7AB82E] rounded-full p-1.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="h-px bg-gray-100"></div>
              
              <div className="flex items-center justify-between group hover:translate-x-2 transition-transform">
                <span className="font-light text-gray-700">Historial Completo</span>
                <div className="bg-[#7AB82E] rounded-full p-1.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="h-px bg-gray-100"></div>
              
              <div className="flex items-center justify-between group hover:translate-x-2 transition-transform">
                <span className="font-light text-gray-700">Soporte 24/7</span>
                <div className="bg-[#7AB82E] rounded-full p-1.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="h-px bg-gray-100"></div>
              
              <div className="flex items-center justify-between group hover:translate-x-2 transition-transform">
                <span className="font-light text-gray-700">Seguridad Bancaria</span>
                <div className="bg-[#7AB82E] rounded-full p-1.5">
                  <Check className="w-4 h-4 text-white" />
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