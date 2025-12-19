import { FileText, Shield, BookOpen, Sparkles, Lock } from 'lucide-react';

export default function Regulations() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#7AB82E] opacity-5 rounded-full top-0 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#0BA4B5] opacity-5 rounded-full top-1/4 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[450px] h-[450px] bg-[#7AB82E] opacity-5 rounded-full -bottom-48 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-80 h-80 bg-[#0BA4B5] opacity-5 rounded-full bottom-1/4 -right-32 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] px-5 py-2 rounded-full text-sm font-light mb-6">
            <Lock className="w-4 h-4" />
            <span>Transparencia y Seguridad</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-wide">
            Reglamentos
          </h2>
          <div className="w-24 h-1 bg-[#0BA4B5] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Operamos con total transparencia bajo normas claras que protegen a todos los participantes.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7AB82E] to-[#0BA4B5] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            {/* Icon with animation */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#7AB82E] opacity-10 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] w-24 h-24 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#7AB82E] bg-opacity-10 text-[#7AB82E] px-5 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Muy Pronto</span>
            </div>

            {/* Title and description */}
            <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
              Documentación en Desarrollo
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Estamos preparando un marco regulatorio completo y transparente que incluirá términos de servicio, políticas de privacidad y reglamentos operativos detallados.
            </p>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Card 1 */}
              <div className="group/card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-[#7AB82E] bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-[#7AB82E]" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2 text-center">Términos de Servicio</h4>
                <p className="text-sm text-gray-600 text-center font-light">Condiciones claras de uso</p>
              </div>

              {/* Card 2 */}
              <div className="group/card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-[#0BA4B5] bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-[#0BA4B5]" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2 text-center">Políticas de Privacidad</h4>
                <p className="text-sm text-gray-600 text-center font-light">Protección de datos</p>
              </div>

              {/* Card 3 */}
              <div className="group/card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-[#7AB82E] bg-opacity-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-[#7AB82E]" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2 text-center">Reglamentos</h4>
                <p className="text-sm text-gray-600 text-center font-light">Normas operativas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom info banner */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#7AB82E] to-[#0BA4B5] text-white px-6 py-3 rounded-full shadow-lg">
            <Shield className="w-5 h-5" />
            <span className="font-light">Comprometidos con la transparencia y seguridad de nuestros usuarios</span>
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