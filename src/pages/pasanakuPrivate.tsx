import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Users,
    ShieldCheck,
    BadgeDollarSign,
    Lock,
    Home,
    School,
    Car,
    HeartHandshake
} from "lucide-react";
import Contact from "../components/Contact";

export default function PasanakuPrivate() {

    return (
        <>
            <Link
                to="/"
                className="rounded-full w-max absolute top-6 left-6 p-2 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors z-20"
            >
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-white" />
            </Link>

            {/* HERO */}
            <section className="relative flex flex-col h-screen items-center justify-center overflow-hidden dark:bg-gradient-to-b from-surface-dark to-background-dark">
                <div className="absolute inset-0 z-0 dark:opacity-60">
                    <div className="absolute top-24 left-1/3 w-[28rem] h-[28rem] bg-primary/25 rounded-full blur-[140px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                        <Lock className="w-5 h-5" />
                        Grupo Cerrado
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-warm-text dark:text-white">
                        Pasanaku Privado
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Ahorra con personas de confianza. Tú eliges quién participa, cómo se organiza y cuándo se cobra.
                    </p>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section className="py-20 px-4 bg-white dark:bg-surface-dark">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-200 text-center mb-12">
                    Cómo funciona
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10">
                        <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-warm-text dark:text-white">Grupo elegido</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Participan solo personas invitadas por el creador.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10">
                        <BadgeDollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-warm-text dark:text-white">Reglas propias</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            El grupo define montos, frecuencia y turnos.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10">
                        <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-warm-text dark:text-white">Control total</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Pagos visibles y confirmados por todos.
                        </p>
                    </div>
                </div>
            </section>

            {/* USOS */}
            <section className="py-20 px-4 dark:bg-gradient-to-b from-surface-dark to-background-dark">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-200 text-center mb-12">Ideal para</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Item icon={Home} title="Familia" desc="Metas compartidas y apoyo mutuo." />
                        <Item icon={School} title="Estudios" desc="Ahorro organizado para educación." />
                        <Item icon={Car} title="Proyectos" desc="Compras importantes planificadas." />
                        <Item icon={HeartHandshake} title="Amigos" desc="Confianza y compromiso real." />
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}

function Item({ icon: Icon, title, desc }: any) {
    return (
        <div className="bg-white dark:bg-surface-dark border border-stone-200 dark:border-white/10 p-6 rounded-2xl text-center">
            <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-warm-text dark:text-white">{title}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
        </div>
    );
}
