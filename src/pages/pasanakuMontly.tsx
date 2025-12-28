import { ArrowLeft, Computer, Gavel, Waypoints, BadgeDollarSign, CalendarCheck, ShieldCheck, Handshake, Lightbulb, Percent, Info, Car, Plane, School, Home } from "lucide-react";
import { useEffect } from "react";
export default function PasanakuMontly() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const goBack = () => {
        window.history.back();
    };

    const laws = [
        {
            title: "Orden de cobro",
            description: "El orden de cobro se define mediante un sorteo digital al inicio del ciclo. Quienes eligen los últimos turnos obtienen prioridad para el siguiente Pasanaku.",
            icon: Computer
        },
        {
            title: "Pagos",
            description: "Cada participante debe realizar su aporte mensual dentro de la fecha y hora establecida por el grupo. Los pagos se realizan únicamente mediante QR o transferencia bancaria.",
            icon: BadgeDollarSign
        },
        {
            title: "Plazo de gracia y multas",
            description: "Se otorga un día hábil de gracia después de la fecha límite. Pasado ese plazo, se aplica una multa diaria por retraso según lo definido por el grupo.",
            icon: Gavel
        },
        {
            title: "Distribución de multas",
            description: "El total recaudado por multas se reparte entre los participantes que cumplieron puntualmente durante todo el ciclo, premiando la responsabilidad.",
            icon: Waypoints
        }
    ];

    const benefits = [
        {
            title: "Ahorro Disciplinado",
            description: "El compromiso mensual te ayuda a alcanzar tus metas sin fallar.",
            icon: ShieldCheck
        },
        {
            title: "Seguridad Total",
            description: "CFL garantiza los pagos. Si alguien falla, nosotros cubrimos el pozo.",
            icon: Handshake
        },
        {
            title: "Acceso a Capital",
            description: "Recibe una suma importante de dinero sin intereses ni deudas.",
            icon: Lightbulb
        },
        {
            title: "Sin Intereses",
            description: "Olvídate de las comisiones y los intereses bancarios. Tu dinero es 100% tuyo.",
            icon: Percent
        }
    ];

    const recompenses = [
        {
            title: "Inicial de un auto",
            description: "Junta el dinero para la cuota inicial de tu próximo vehículo.",
            icon: Car
        },
        {
            title: "El viaje de tus sueños",
            description: "Planifica esas vacaciones que tanto has postergado.",
            icon: Plane
        },
        {
            title: "Pagar estudios",
            description: "Invierte en tu futuro o en la educación de tu familia.",
            icon: School
        },
        {
            title: "Remodelar tu hogar",
            description: "Dale un nuevo aire a tu espacio personal.",
            icon: Home
        }
    ];

    return (
        <>
            <button onClick={goBack} className="rounded-full w-max absolute top-6 left-6 p-2 hover:bg-stone-200 dark:hover:bg-[#0D5269]/50 transition-colors z-20">
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-[#E8F4F8]" />
            </button>
            <section className="relative h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D]">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full -bottom-48 -left-32 animate-pulse"></div>
                    <div className="absolute w-80 h-80 bg-[#5A8C22]/10 dark:bg-[#00E5FF]/15 rounded-full -bottom-32 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full top-1/2 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 dark:bg-[#7AFF6C]/20 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white/5 dark:bg-[#00E5FF]/15 rounded-full blur-[128px]"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 dark:border-[#0D5269]/50 bg-white/10 dark:bg-[#0D5269]/50 text-white dark:text-[#E8F4F8] text-xs font-semibold uppercase tracking-wider">
                        <CalendarCheck className="w-6 h-6" />
                        Modalidad
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white dark:text-[#E8F4F8]">
                        Pasanaku Mensual
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 dark:text-[#A8C5D1] max-w-3xl mx-auto">
                        La opción ideal para construir capital a tu ritmo. Planifica tus grandes metas con aportes mensuales fijos, sin estrés y con la seguridad que solo CFL te ofrece.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button onClick={() => scrollToSection('steps')} className="bg-white/20 hover:bg-white/30 dark:bg-[#0D5269]/50 dark:hover:bg-[#0D5269]/70 text-white dark:text-[#E8F4F8] px-8 py-4 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center gap-2">
                            Saber más
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 bg-white dark:bg-[#0D5269]" id="steps">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#E8F4F8]">Reglamento</h2>
                        <p className="text-gray-600 dark:text-[#A8C5D1] max-w-2xl mx-auto mt-4">
                            Sigue estas reglas para asegurar una experiencia justa y segura para todos los miembros del Pasanaku Mensual.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            laws.map((law, index) => (
                                <div key={index} className="bg-stone-50 dark:bg-[#062D3D]/60 border border-stone-200 dark:border-[#0D5269]/50 p-6 rounded-2xl flex flex-col items-start gap-4">
                                    <div className="size-12 bg-[#7AB82E]/20 dark:bg-[#7AFF6C]/20 rounded-xl flex items-center justify-center text-[#5A8C22] dark:text-[#7AFF6C]">
                                        <law.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 dark:text-[#E8F4F8]">{law.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-[#A8C5D1]">{law.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D]">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-[#E8F4F8]">Beneficios</h2>
                        <p className="text-white/80 dark:text-[#A8C5D1] max-w-2xl mx-auto mt-4">
                            Aprovecha los beneficios clave para disfrutar de un Pasanaku Mensual de calidad.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="bg-white/10 dark:bg-[#0D5269]/60 border border-white/20 dark:border-[#0D5269]/50 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-4 text-white dark:text-[#E8F4F8]">Beneficios Clave</h3>
                            <ul className="space-y-4">
                                {
                                    benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="size-12 rounded-full bg-white/20 dark:bg-[#7AFF6C]/20 flex items-center justify-center text-white dark:text-[#7AFF6C]">
                                                <benefit.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white dark:text-[#E8F4F8]">{benefit.title}</h4>
                                                <p className="text-sm text-white/80 dark:text-[#A8C5D1]">{benefit.description}</p>
                                            </div>
                                        </li>
                                    ))
                                }                               
                            </ul>
                        </div>
                        <div className="bg-white/10 dark:bg-[#0D5269]/60 border border-white/20 dark:border-[#0D5269]/50 rounded-2xl p-8 h-full flex flex-col backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white dark:text-[#E8F4F8]">
                                <Info className="w-6 h-6" />
                                ¿Qué es el Pasanaku Mensual?
                            </h3>
                            <div className="space-y-4 text-white/90 dark:text-[#A8C5D1]">
                                <p>
                                    Es un método de ahorro colaborativo donde un grupo de personas aporta una cantidad fija de dinero cada mes.
                                </p>
                                <p>
                                    El total recaudado mensualmente, conocido como "pozo", se entrega a un miembro diferente del grupo cada mes, según un turno asignado.
                                </p>
                                <p className="font-semibold text-white dark:text-[#E8F4F8]">
                                    Al final del ciclo, todos los participantes habrán aportado la misma cantidad y habrán recibido el pozo una vez. ¡Es una forma de capitalizarte sin deudas!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4 bg-white dark:bg-[#0D5269]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-[#E8F4F8]">¿Para qué sirve un Pasanaku Mensual?</h2>
                    <p className="text-gray-600 dark:text-[#A8C5D1] max-w-2xl mx-auto mb-12">Es la herramienta perfecta para financiar tus proyectos más importantes sin acudir a un banco.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            recompenses.map((recompense, index) => (
                                <div key={index} className="bg-stone-50 dark:bg-[#062D3D]/60 border border-stone-200 dark:border-[#0D5269]/50 p-6 rounded-2xl text-center flex flex-col items-center gap-3">
                                    <div className="size-16 bg-[#7AB82E]/20 dark:bg-[#7AFF6C]/20 rounded-full flex items-center justify-center text-[#5A8C22] dark:text-[#7AFF6C]">
                                        <recompense.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-[#E8F4F8]">{recompense.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-[#A8C5D1]">{recompense.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}