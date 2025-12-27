import { FileText, Globe, History, BellRing, CalendarCheck, Gavel, Plus } from "lucide-react"

export default function AppMobileSection() {
    const featuresCFL = [
        {
            title: "Comprobantes",
            description: "Cada transacción genera un recibo digital inmutable.",
            icon: FileText,
            color: "text-[#6FCD13]"
        },
        {
            title: "Pagos Públicos",
            description: "Todo el grupo ve quién pagó y cuándo.",
            icon: Globe,
            color: "text-[#0BA4B5]"
        },
        {
            title: "Historial Vivo",
            description: "Acceso permanente a todos los movimientos pasados.",
            icon: History,
            color: "text-[#8AFB2A]"
        },
        {
            title: "Alertas Smart",
            description: "Recordatorios automáticos antes de cada vencimiento.",
            icon: BellRing,
            color: "text-[#7AB82E]"
        }
    ];
    
    return (
        <section 
            className="py-20 px-4 relative bg-gradient-to-br from-[#5A8C22] to-[#4A7C19] dark:from-[#1A3B0F] dark:to-[#0F2A14] overflow-hidden" 
            id="app"
            aria-label="App Mobile CFL - Transparencia y Control"
        >
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full top-0 -left-48 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full top-1/4 right-0 animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute w-[450px] h-[450px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -bottom-48 left-1/3 animate-pulse" style={{ animationDelay: '4s' }}></div>
                <div className="absolute w-80 h-80 bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full bottom-1/4 -right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <header className="space-y-4">
                        <span className="text-[#E9F7D9] dark:text-[#6FCD13] font-bold tracking-wider text-sm uppercase block">
                            Seguridad Primero
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white">
                            Transparencia Total.<br />Control Absoluto.
                        </h2>
                        <p className="text-white/80 dark:text-slate-300 text-lg">
                            Diseñamos CFL para que nunca tengas dudas sobre dónde está tu dinero.
                        </p>
                    </header>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {featuresCFL.map((feature, index) => (
                            <article 
                                key={index}
                                className="flex items-start gap-4 p-5 bg-gradient-to-br from-white/10 to-white/5 dark:from-[#0F2A14]/60 dark:to-[#081B0D]/60 rounded-xl border border-white/20 dark:border-[#6FCD13]/20 backdrop-blur-sm hover:border-white/40 dark:hover:border-[#6FCD13]/40 transition-all duration-300 group"
                                aria-label={feature.title}
                            >
                                <div className="flex-shrink-0">
                                    <div className="size-10 rounded-lg bg-white/20 dark:bg-[#6FCD13]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white dark:text-white text-sm md:text-base">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/70 dark:text-slate-300 text-xs mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    {/* Beta App Section */}
                    <div className="pt-8 border-t border-white/20 dark:border-[#6FCD13]/20">
                        <header className="mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white dark:text-white mb-3 flex items-center gap-3">
                                Próximamente: App CFL
                                <span className="text-xs bg-[#6FCD13] text-background-dark dark:bg-[#6FCD13] dark:text-[#0F2A14] px-3 py-1 rounded-full font-bold">
                                    BETA
                                </span>
                            </h3>
                            <p className="text-white/80 dark:text-slate-300 text-sm md:text-base">
                                Lleva tu Pasanaku en el bolsillo. Subastas en tiempo real, chat integrado y más.
                            </p>
                        </header>
                        
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                            <a 
                                href="mailto:dreamersb648@gmail.com?subject=Solicitud%20Acceso%20Beta%20CFL&body=Hola,%20me%20interesa%20unirme%20a%20la%20lista%20de%20espera%20de%20la%20app%20CFL."
                                className="bg-white text-[#5A8C22] dark:bg-[#6FCD13] dark:text-gray-200 px-6 py-3 rounded-lg text-sm font-bold hover:bg-white/90 dark:hover:bg-[#8AFB2A] transition-colors text-center whitespace-nowrap"
                                aria-label="Unirse a la lista de espera de la app beta"
                            >
                                Unirme a la espera
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right - Mobile Mockup */}
                <div className="relative flex justify-center lg:justify-end">
                    <div 
                        className="relative w-[280px] h-[580px] md:w-[300px] md:h-[600px] bg-black rounded-[40px] border-8 border-[#0F2A14] shadow-2xl overflow-hidden z-10"
                        role="img"
                        aria-label="Mockup de la app CFL mostrando dashboard con saldo de ahorros y próximos pagos"
                    >
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20" aria-hidden="true"></div>
                        
                        {/* Screen Content */}
                        <div className="h-full w-full bg-[#0F2A14] text-white overflow-y-auto pt-10 px-4">
                            {/* Header */}
                            <header className="flex justify-between items-center mb-8">
                                <div>
                                    <p className="text-xs text-slate-400">Buenos días,</p>
                                    <p className="font-bold text-white"> Bienvenido a CFL</p>
                                </div>
                                <div className="size-8 rounded-full bg-gradient-to-br from-[#6FCD13] to-[#0BA4B5]" aria-hidden="true"></div>
                            </header>
                            
                            {/* Savings Card */}
                            <article className="bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] p-5 rounded-2xl mb-8 shadow-lg">
                                <p className="text-xs text-white/80 font-bold mb-1">Total Ahorrado</p>
                                <h3 className="text-3xl font-black text-white mb-4">Bs. 2,450.00</h3>
                                <div className="flex gap-2">
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] text-white font-bold">
                                        3 Pasanakus Activos
                                    </span>
                                </div>
                            </article>
                            
                            {/* Next Turns */}
                            <section>
                                <h4 className="text-sm font-bold text-slate-400 mb-4">Próximos Turnos</h4>
                                <div className="space-y-3">
                                    <article className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="size-10 rounded-full bg-[#6FCD13]/20 flex items-center justify-center text-[#6FCD13]">
                                            <CalendarCheck className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-white">Viaje Amigos</p>
                                            <p className="text-xs text-slate-400">Te toca: 15 Oct</p>
                                        </div>
                                        <span className="text-sm font-bold text-[#6FCD13]">$500</span>
                                    </article>
                                    
                                    <article className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="size-10 rounded-full bg-[#0BA4B5]/20 flex items-center justify-center text-[#0BA4B5]">
                                            <Gavel className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-white">Subasta Oficina</p>
                                            <p className="text-xs text-slate-400">Oferta actual: $20</p>
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">Pend.</span>
                                    </article>
                                </div>
                            </section>
                            
                            {/* Floating Action Button */}
                            <button 
                                className="absolute bottom-6 right-6 size-12 bg-gradient-to-br from-[#6FCD13] to-[#7AB82E] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                aria-label="Crear nuevo pasanaku"
                            >
                                <Plus className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-gradient-to-br from-[#6FCD13]/20 to-[#0BA4B5]/20 rounded-full blur-3xl z-0" aria-hidden="true"></div>
                </div>
            </div>
        </section>
    );
}