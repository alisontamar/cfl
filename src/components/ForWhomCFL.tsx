import { Home, Building2, Users, HandCoins } from "lucide-react";

export default function ForWhomCFL() {
  const targetGroups = [
    {
      title: "Familias",
      description: "Planificación financiera familiar y metas compartidas",
      icon: Home,
      color: "from-[#7AB82E]/20 to-[#6FCD13]/20"
    },
    {
      title: "Emprendedores",
      description: "Capital inicial y gestión de fondos para negocios",
      icon: Building2,
      color: "from-[#0BA4B5]/20 to-[#7AB82E]/20"
    },
    {
      title: "Amigos",
      description: "Ahorro colectivo para viajes y proyectos en común",
      icon: Users,
      color: "from-[#6FCD13]/20 to-[#0BA4B5]/20"
    },
    {
      title: "Comunidades",
      description: "Desarrollo económico local y cooperativismo",
      icon: HandCoins,
      color: "from-[#5A8C22]/20 to-[#7AB82E]/20"
    }
  ];

  return (
    <section 
      className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D] relative border-t border-white/10 dark:border-[#0D5269]/30"
      aria-label="Para quién es Capital For Live"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-[450px] h-[450px] bg-white/5 dark:bg-[#00E5FF]/15 rounded-full -bottom-48 right-4 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-[300px] h-[300px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full top-1/4 left-4 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white dark:text-[#E8F4F8] mb-6">
            ¿Para quién es CFL?
          </h2>
          <p className="text-white/80 dark:text-[#A8C5D1] text-lg max-w-2xl mx-auto">
            Descubre cómo diferentes grupos aprovechan el poder del ahorro colectivo
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {targetGroups.map((group, index) => (
            <article 
              key={index}
              className="relative group cursor-default"
              aria-label={`CFL para ${group.title}`}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 dark:from-[#0D5269]/60 dark:to-[#062D3D]/60 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 dark:border-[#0D5269]/30 group-hover:border-white/40 dark:group-hover:border-[#7AFF6C]/40 transition-all duration-300 group-hover:-translate-y-2 h-full">
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className={`relative size-20 rounded-2xl bg-gradient-to-br ${group.color} dark:from-[#7AFF6C]/20 dark:to-[#00E5FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <group.icon className="w-10 h-10 text-white dark:text-[#E8F4F8]" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-[#7AFF6C]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white dark:text-[#E8F4F8] mb-3">
                    {group.title}
                  </h3>
                  <p className="text-white/80 dark:text-[#A8C5D1] text-sm leading-relaxed">
                    {group.description}
                  </p>
                </div>
                
                {/* Decorative Line */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-[#7AFF6C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
              
              {/* Connector for desktop */}
              {index < targetGroups.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-white/20 dark:bg-[#0D5269]/30 -translate-y-1/2 translate-x-1/2 group-hover:bg-white/40 dark:group-hover:bg-[#7AFF6C]/40 transition-colors"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}