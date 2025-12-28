import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
    ArrowLeft,
    Gavel,
    BadgeDollarSign,
    ShieldCheck,
    TrendingUp,
    Info,
    Users,
    Timer,
    Percent
} from "lucide-react";
import Contact from "../components/Contact";

export default function PasanakuAuction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Link
                to="/"
                className="rounded-full w-max absolute top-6 left-6 p-2 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors z-20"
            >
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-white" />
            </Link>

            {/* HERO */}
            <section className="relative h-screen flex justify-center items-center flex-col overflow-hidden dark:bg-gradient-to-b from-surface-dark to-background-dark">
                <div className="absolute inset-0 z-0 dark:opacity-60">
                    <div className="absolute top-24 left-1/3 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-[140px]" />
                    <div className="absolute bottom-10 right-1/4 w-[22rem] h-[22rem] bg-lime-500/20 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                        <Gavel className="w-5 h-5" />
                        Modalidad Estratégica
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-warm-text dark:text-white">
                        Pasanaku por Subasta
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Decide cuándo cobrar. Ofrece una puja, accede antes al capital y transforma el ahorro en una estrategia inteligente.
                    </p>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section className="py-20 px-4 bg-white dark:bg-surface-dark">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-warm-text dark:text-white">
                            ¿Cómo funciona la subasta?
                        </h2>

                        <p className="text-slate-600 dark:text-slate-300">
                            A diferencia del sorteo tradicional, en esta modalidad los turnos se asignan mediante una subasta digital al inicio del ciclo.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-surface-highlight">
                                <TrendingUp className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-warm-text dark:text-white">Ofrece una puja</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Indica cuánto estás dispuesto a ceder para cobrar antes.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-surface-highlight">
                                <Timer className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-warm-text dark:text-white">Turnos asignados</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Los turnos se ordenan según la puja ofrecida.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-surface-highlight">
                                <Percent className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-warm-text dark:text-white">Descuento aplicado</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    La puja se descuenta del monto que recibes.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-surface-highlight">
                                <Users className="w-6 h-6 text-primary mb-2" />
                                <h4 className="font-bold text-warm-text dark:text-white">Todos ganan</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Quienes cobran después reciben el monto completo.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BLOQUE DESTACADO */}
                    <div className="relative bg-gradient-to-br from-primary/20 to-lime-500/10 dark:from-primary/30 dark:to-lime-500/20 rounded-3xl p-10 border border-primary/30">
                        <h3 className="text-2xl font-bold text-warm-text dark:text-white mb-4">
                            Ventaja clave
                        </h3>

                        <p className="text-slate-700 dark:text-slate-200 mb-6">
                            Accedes al capital cuando más lo necesitas, sin préstamos ni bancos, usando solo estrategia.
                        </p>

                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-10 h-10 text-primary" />
                            <span className="font-semibold text-warm-text dark:text-white">
                                Sistema transparente, subasta digital y reglas claras
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGLAS CLAVE */}
            <section className="py-20 px-4 dark:bg-gradient-to-b from-surface-dark to-background-dark">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-warm-text dark:text-white mb-10">
                        Reglas importantes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-stone-200 dark:border-white/10">
                            <BadgeDollarSign className="w-8 h-8 text-primary mb-3 mx-auto" />
                            <p className="text-slate-600 dark:text-slate-300">
                                Las cuotas se pagan vía QR o transferencia al participante con turno de cobro.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-stone-200 dark:border-white/10">
                            <Gavel className="w-8 h-8 text-primary mb-3 mx-auto" />
                            <p className="text-slate-600 dark:text-slate-300">
                                El orden se reinicia en cada ciclo y siempre se subasta desde cero.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-stone-200 dark:border-white/10">
                            <Info className="w-8 h-8 text-primary mb-3 mx-auto" />
                            <p className="text-slate-600 dark:text-slate-300">
                                El receptor confirma los pagos para garantizar total transparencia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
