import { ArrowLeft, Computer, Gavel, Waypoints, BadgeDollarSign, CalendarCheck, ShieldCheck, Handshake, Lightbulb, Percent, Info, Car, Plane, School, Home } from "lucide-react";
import { useEffect } from "react";
export default function PasanakuDaily() {
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
            description: "El orden de cobro se define mediante un sorteo digital al inicio del ciclo. Los últimos turnos obtienen prioridad en el siguiente Pasanaku.",
            icon: Computer
        },
        {
            title: "Pagos",
            description: "Cada participante debe realizar su aporte diario dentro del horario definido por el grupo. Los pagos se realizan únicamente mediante QR o transferencia bancaria.",
            icon: BadgeDollarSign
        },
        {
            title: "Horario y multas",
            description: "Si el pago no se realiza antes de la hora límite establecida, se aplica una multa diaria inmediata según lo definido por el grupo.",
            icon: Gavel
        },
        {
            title: "Distribución de multas",
            description: "El total recaudado por multas se reparte entre los participantes que cumplieron puntualmente durante todo el ciclo.",
            icon: Waypoints
        }
    ];

    const benefits = [
        {
            title: "Liquidez Rápida",
            description: "Ideal para cubrir gastos inmediatos o necesidades urgentes.",
            icon: ShieldCheck
        },
        {
            title: "Compromiso Diario",
            description: "Aportes pequeños y constantes que fortalecen el hábito de ahorro.",
            icon: Handshake
        },
        {
            title: "Cobro Frecuente",
            description: "Recibe el pozo en poco tiempo sin esperar meses.",
            icon: Lightbulb
        },
        {
            title: "Sin Intereses",
            description: "Accede a capital sin préstamos, comisiones ni intereses.",
            icon: Percent
        }
    ];

    const recompenses = [
        {
            title: "Gastos diarios",
            description: "Cubre alimentación, transporte u otros gastos inmediatos.",
            icon: Car
        },
        {
            title: "Emergencias",
            description: "Ten respaldo rápido ante cualquier imprevisto.",
            icon: Plane
        },
        {
            title: "Pequeños estudios",
            description: "Paga cursos, talleres o capacitaciones cortas.",
            icon: School
        },
        {
            title: "Apoyo familiar",
            description: "Ayuda a tu familia cuando más lo necesita.",
            icon: Home
        }
    ];

    return (
        <>
            <button onClick={goBack} className="rounded-full w-max absolute top-6 left-6 p-2 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors z-20">
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>

            <section className="relative h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0F2A14] dark:to-[#081B0D]">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -bottom-48 -left-32 animate-pulse"></div>
                    <div className="absolute w-80 h-80 bg-[#5A8C22]/10 dark:bg-[#0BA4B5]/15 rounded-full -bottom-32 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full top-1/2 -right-48 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 dark:bg-[#6FCD13]/20 rounded-full blur-[128px]"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white/5 dark:bg-[#0BA4B5]/15 rounded-full blur-[128px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
                        <CalendarCheck className="w-6 h-6" />
                        Modalidad
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
                        Pasanaku Diario
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto">
                        La forma más rápida de ahorrar y acceder a capital. Aportes diarios, ciclos cortos y resultados inmediatos con la seguridad de CFL.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button
                            onClick={() => scrollToSection('steps')}
                            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm flex items-center justify-center gap-2"
                        >
                            Saber más
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-white dark:bg-[#0F2A14]" id="steps">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Reglamento</h2>
                        <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto mt-4">
                            Reglas claras para asegurar puntualidad, transparencia y confianza en el Pasanaku Diario.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {laws.map((law, index) => (
                            <div key={index} className="bg-stone-50 dark:bg-[#081B0D] border border-stone-200 dark:border-white/10 p-6 rounded-2xl flex flex-col items-start gap-4">
                                <div className="size-12 bg-[#7AB82E]/20 dark:bg-[#6FCD13]/20 rounded-xl flex items-center justify-center text-[#5A8C22] dark:text-[#6FCD13]">
                                    <law.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-bold text-lg text-gray-800 dark:text-white">{law.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-white/70">{law.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0F2A14] dark:to-[#081B0D]">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Beneficios</h2>
                        <p className="text-white/80 dark:text-white/70 max-w-2xl mx-auto mt-4">
                            Ventajas pensadas para quienes necesitan resultados rápidos.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <div className="bg-white/10 dark:bg-[#081B0D]/50 border border-white/20 dark:border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-4 text-white">Beneficios Clave</h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="size-12 rounded-full bg-white/20 dark:bg-[#6FCD13]/20 flex items-center justify-center text-white">
                                            <benefit.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">{benefit.title}</h4>
                                            <p className="text-sm text-white/80 dark:text-white/70">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/10 dark:bg-[#081B0D]/50 border border-white/20 dark:border-white/10 rounded-2xl p-8 h-full flex flex-col backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <Info className="w-6 h-6" />
                                ¿Qué es el Pasanaku Diario?
                            </h3>
                            <div className="space-y-4 text-white/90 dark:text-white/80">
                                <p>
                                    Es un sistema de ahorro colaborativo con aportes diarios pequeños y constantes.
                                </p>
                                <p>
                                    El pozo se entrega a un participante distinto en ciclos cortos, permitiendo acceso rápido al capital.
                                </p>
                                <p className="font-semibold text-white">
                                    Todos aportan lo mismo y todos cobran una vez, sin intereses ni deudas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-white dark:bg-[#0F2A14]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">¿Para qué sirve un Pasanaku Diario?</h2>
                    <p className="text-gray-600 dark:text-white/70 max-w-2xl mx-auto mb-12">
                        Ideal para necesidades inmediatas sin recurrir a préstamos.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recompenses.map((recompense, index) => (
                            <div key={index} className="bg-stone-50 dark:bg-[#081B0D] border border-stone-200 dark:border-white/10 p-6 rounded-2xl text-center flex flex-col items-center gap-3">
                                <div className="size-16 bg-[#7AB82E]/20 dark:bg-[#6FCD13]/20 rounded-full flex items-center justify-center text-[#5A8C22] dark:text-[#6FCD13]">
                                    <recompense.icon className="w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-lg text-gray-800 dark:text-white">{recompense.title}</h4>
                                <p className="text-sm text-gray-600 dark:text-white/70">{recompense.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}