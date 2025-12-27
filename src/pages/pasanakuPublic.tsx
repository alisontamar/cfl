import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Globe,
    Users,
    BadgeDollarSign,
    ShieldCheck,
    Info,
    TrendingUp
} from "lucide-react";
import Contact from "../components/Contact";

export default function PasanakuPublic() {

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
                    <div className="absolute top-20 right-1/3 w-[28rem] h-[28rem] bg-primary/30 rounded-full blur-[140px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                        <Globe className="w-5 h-5" />
                        Comunidad Abierta
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-warm-text dark:text-white">
                        Pasanaku Público
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Únete a un Pasanaku abierto y ahorra con personas que comparten el mismo objetivo.
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
                        <h3 className="font-bold text-warm-text dark:text-white">Acceso abierto</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Cualquier persona puede unirse mientras haya cupos.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10">
                        <BadgeDollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-warm-text dark:text-white">Reglas visibles</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Condiciones claras antes de unirte.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-white/10">
                        <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-bold text-warm-text dark:text-white">Sistema confiable</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Pagos confirmados y seguimiento continuo.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="py-20 px-4 dark:bg-gradient-to-b from-surface-dark to-background-dark">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-gray-200 text-center mb-12">
                        Elige tu modalidad ideal
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card icon={TrendingUp} text="Empieza a ahorrar sin conocer a nadie previamente." />
                        <Card icon={Info} text="Toda la información está disponible antes de ingresar." />
                        <Card icon={ShieldCheck} text="La plataforma garantiza transparencia y orden." />
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}

function Card({ icon: Icon, text }: any) {
    return (
        <div className="bg-white dark:bg-surface-dark border border-stone-200 dark:border-white/10 p-6 rounded-2xl">
            <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-300 text-center">{text}</p>
        </div>
    );
}
