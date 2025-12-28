import { CalendarCheck, Lock, Sun, Globe } from "lucide-react"
import { Link } from "react-router-dom";

export default function Modalities() {
  
  const modalities = [
    {
      id: "mensual",
      title: "Pasanaku Mensual",
      description: "Ideal para planificación a largo plazo. Aportes una vez al mes, sin estrés.",
      icon: CalendarCheck,
      tag: "Más Popular",
      className: "md:col-span-2 row-span-2",
      color: "from-[#7AB82E]/20 to-[#5A8C22]/20",
      iconColor: "text-white",
      image: "mensual.svg"
    },
    {
      id: "diario",
      title: "Diario",
      description: "Micro-ahorro ágil para metas cortas.",
      icon: Sun,
      className: "",
      color: "from-[#6FCD13]/15 to-[#5A8C22]/15",
      iconColor: "text-[#FFD700]",
      image: "diario.svg"
    },
    {
      id: "semanal",
      title: "Semanal",
      description: "Flujo constante, resultados rápidos.",
      icon: CalendarCheck,
      className: "",
      color: "from-[#0BA4B5]/15 to-[#7AB82E]/15",
      iconColor: "text-white",
      image: "semanal.svg"
    },
    {
      id: "privado",
      title: "Privado",
      description: "Solo con tus amigos o familia.",
      icon: Lock,
      className: "",
      color: "from-[#5A8C22]/15 to-[#4A7C19]/15",
      iconColor: "text-[#4ADE80]",
      image: "privado.svg"
    },
    {
      id: "publico",
      title: "Abierto",
      description: "Únete a grupos verificados por CFL.",
      icon: Globe,
      className: "",
      color: "from-[#0BA4B5]/15 to-[#6FCD13]/15",
      iconColor: "text-[#22D3EE]",
      image: "publico.svg"
    }
  ];
  

  return (
    <section id="modalidades" className="relative py-14 bg-gradient-to-br from-[#5A8C22] to-[#4A7C19] dark:from-[#1A3B0F] dark:to-[#0F2A14] overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -top-48 left-4 animate-pulse"></div>
        <div className="absolute w-[450px] h-[450px] bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full -bottom-48 right-4 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-light text-white dark:text-white mb-4">Elige tu modalidad ideal</h2>
          <p className="text-white/80 dark:text-slate-300 text-lg">Selecciona la forma de ahorro que mejor se adapte a tus necesidades</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {/* Pasanaku Mensual - Destacado */}
          <Link 
            to="/pasanaku-mensual" 
            className="md:col-span-2 row-span-2 relative bg-gradient-to-br from-white/20 to-white/10 dark:from-[#6FCD13]/15 dark:to-[#0F2A14]/60 rounded-2xl p-8 overflow-hidden group border-2 border-white/30 dark:border-[#6FCD13]/30 hover:border-white/50 dark:hover:border-[#6FCD13]/50 transition-all duration-300 hover:scale-[1.02]"
            aria-label="Pasanaku Mensual - Modalidad más popular"
          >
            <div className="absolute inset-0 bg-[url('/mensual.svg')] bg-cover bg-center opacity-65 group-hover:opacity-95 transition-opacity duration-500" aria-hidden="true" />
            <div className="absolute right-0 top-0 p-32 bg-white/10 dark:bg-[#6FCD13]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 dark:group-hover:bg-[#6FCD13]/20 transition-colors"></div>
            <div className="relative h-full flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="bg-white/30 dark:bg-[#6FCD13] text-white dark:text-background-dark px-3 py-1 rounded-md text-xs font-bold uppercase backdrop-blur-sm">
                  Más Popular
                </span>
                <CalendarCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Pasanaku Mensual</h3>
                <p className="text-white/90 dark:text-slate-200 mb-4">Ideal para planificación a largo plazo. Aportes una vez al mes, sin estrés.</p>
                <span className="inline-flex items-center text-white/80 dark:text-slate-300 text-sm">
                  Comienza tu ahorro mensual →
                </span>
              </div>
            </div>
          </Link>

          {/* Modalidades pequeñas */}
             {modalities.slice(1).map((modality) => (
            <Link
              key={modality.id}
              to={`/pasanaku-${modality.id}`}
              className={`${modality.className} relative rounded-2xl p-6 flex flex-col justify-between border border-white/20 dark:border-[#6FCD13]/20 hover:border-white/40 dark:hover:border-[#6FCD13]/40 transition-all duration-300 hover:scale-[1.03] group overflow-hidden`}
              aria-label={`Pasanaku ${modality.title}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url('/${modality.image}')` }}
                aria-hidden="true" 
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${modality.color} dark:from-[#0F2A14]/30 dark:to-[#081B0D]/30`} aria-hidden="true" />
              <modality.icon className={`w-8 h-8 ${modality.iconColor} relative z-10`} />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1 text-white dark:text-white">{modality.title}</h3>
                <p className="text-xs text-white/80 dark:text-slate-300">{modality.description}</p>
              </div>
            </Link>
          ))}

          {/* Tarjeta de Subasta - Destacada */}
          <article 
            className="md:col-span-2 bg-gradient-to-br from-[#0BA4B5] to-[#0A8E9C] dark:from-[#6FCD13] dark:to-[#5A8C22] rounded-2xl p-6 flex flex-row items-center justify-between border-2 border-white/30 dark:border-[#6FCD13]/30 overflow-hidden relative hover:scale-[1.02] transition-all duration-300"
            aria-label="Pasanaku por Subasta - Alta demanda"
          >
            <div className="absolute right-0 top-0 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-[60%]">
              <h3 className="text-2xl font-bold text-white mb-1">Por Subasta</h3>
              <p className="text-white/90 dark:text-white/80 mb-4">¿Necesitas el dinero antes? Oferta por tu turno.</p>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded text-white border border-white/30">
                Alta demanda
              </span>
            </div>
            <Link 
              to="/pasanaku-subastas" 
              className="relative z-10 bg-white text-[#0BA4B5] dark:text-[#0F2A14] px-4 py-2 rounded-lg text-sm font-bold hover:bg-white/90 dark:hover:bg-white transition-colors"
              aria-label="Explorar subastas"
            >
              Explorar
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}