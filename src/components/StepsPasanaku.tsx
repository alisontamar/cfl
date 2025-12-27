import { Users, Settings, BadgeDollarSign, PartyPopper } from "lucide-react";

export default function StepsPasanaku() {
    const STEPS = [
        {
            title: "Únete a crear",
            description: "Elige un grupo existente o invita a tus amigos a uno nuevo.",
            icon: Users,
            color: "from-[#6FCD13]/20 to-[#0BA4B5]/20"
        },
        {
            title: "Define reglas",
            description: "Crea reglas para que tus amigos puedan unirse y que no se puedan unirse.",
            icon: Settings,
            color: "from-[#7AB82E]/20 to-[#6FCD13]/20"
        },
        {
            title: "Paga fácilmente",
            description: "Paga tus amigos con tarjetas, transferencias o QR.",
            icon: BadgeDollarSign,
            color: "from-[#5A8C22]/20 to-[#7AB82E]/20"
        },
        {
            title: "Recibe y disfruta",
            description: "Cuando llega tu turno, el dinero se deposita en tu cuenta.",
            icon: PartyPopper,
            color: "from-[#0BA4B5]/20 to-[#6FCD13]/20"
        }
    ];

    return (
        <section 
            className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0F2A14] dark:to-[#081B0D] relative" 
            id="funciona"
            aria-label="Cómo funciona el Pasanaku"
        >
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -top-48 left-1/2 animate-pulse"></div>
                <div className="absolute w-[450px] h-[450px] bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full -bottom-48 right-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <header className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-light text-white dark:text-white mb-6">
                        Tan fácil como contar hasta el 4
                    </h2>
                    <p className="text-white/80 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Automatizamos lo tedioso para que disfrutes lo bueno. Todo en simples pasos.
                    </p>
                </header>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((step, index) => (
                        <article 
                            key={index}
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 dark:from-[#0F2A14]/60 dark:to-[#081B0D]/60 border-2 border-white/20 dark:border-[#6FCD13]/20 backdrop-blur-sm group hover:border-white/40 dark:hover:border-[#6FCD13]/40 transition-all duration-300 hover:-translate-y-2"
                            aria-label={`Paso ${index + 1}: ${step.title}`}
                        >
                            {/* Número del paso */}
                            <div 
                                className="absolute -top-4 -left-4 size-10 bg-white dark:bg-[#6FCD13] text-[#5A8C22] dark:text-background-dark font-bold rounded-xl flex items-center justify-center border-4 border-[#5A8C22] dark:border-[#0F2A14] shadow-lg z-10 group-hover:scale-110 transition-transform"
                                aria-hidden="true"
                            >
                                {index + 1}
                            </div>
                            
                            {/* Icono con fondo */}
                            <div 
                                className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 dark:from-[#6FCD13]/20 dark:to-[#0BA4B5]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                aria-hidden="true"
                            >
                                <step.icon className="w-8 h-8 text-white dark:text-white" />
                            </div>
                            
                            {/* Contenido */}
                            <h3 className="text-xl font-bold mb-3 text-white dark:text-white">
                                {step.title}
                            </h3>
                            <p className="text-white/80 dark:text-slate-300 text-sm leading-relaxed">
                                {step.description}
                            </p>
                            
                            {/* Línea decorativa */}
                            <div 
                                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-[#6FCD13]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                aria-hidden="true"
                            />
                        </article>
                    ))}
                </div>
                
                {/* Nota adicional */}
                <div className="text-center mt-12 pt-8 border-t border-white/10 dark:border-[#6FCD13]/10">
                    <p className="text-white/70 dark:text-slate-400 text-sm">
                        Cada paso está diseñado para ser intuitivo y seguro. ¡Empieza hoy mismo!
                    </p>
                </div>
            </div>
        </section>
    );
}