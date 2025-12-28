import {
    ArrowLeft,
    Globe,
    Users,
    BadgeDollarSign,
    ShieldCheck,
    Info,
    TrendingUp
} from "lucide-react";
import { useEffect } from "react";
export default function PasanakuPublic() {
        useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <a
                href="/"
                className="rounded-full w-max absolute top-6 left-6 p-2 hover:bg-white/20 dark:hover:bg-[#0D5269]/50 transition-colors z-20 inline-flex"
            >
                <ArrowLeft className="w-6 h-6 text-white dark:text-[#E8F4F8]" />
            </a>

            {/* HERO */}
            <section className="relative flex flex-col h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D]">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full -top-48 -left-32 animate-pulse" />
                    <div 
                        className="absolute w-80 h-80 bg-[#5A8C22]/10 dark:bg-[#00E5FF]/15 rounded-full top-20 right-1/3 animate-pulse" 
                        style={{ animationDelay: '1s' }}
                    />
                    <div 
                        className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full bottom-1/4 -right-48 animate-pulse" 
                        style={{ animationDelay: '2s' }}
                    />
                    <div 
                        className="absolute top-20 right-1/3 w-[28rem] h-[28rem] bg-white/10 dark:bg-[#7AFF6C]/20 rounded-full blur-[140px]" 
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/30 dark:border-[#0D5269]/50 bg-white/10 dark:bg-[#0D5269]/50 text-white dark:text-[#E8F4F8] text-xs font-semibold uppercase tracking-wider">
                        <Globe className="w-5 h-5" />
                        Comunidad Abierta
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white dark:text-[#E8F4F8]">
                        Pasanaku Público
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 dark:text-[#A8C5D1] max-w-3xl mx-auto">
                        Únete a un Pasanaku abierto y ahorra con personas que comparten el mismo objetivo.
                    </p>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section className="py-20 px-4 bg-white dark:bg-[#0D5269]">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-[#E8F4F8] text-center mb-12">
                    Cómo funciona
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-[#0D5269]/50 bg-white dark:bg-[#062D3D]/60">
                        <Users className="w-8 h-8 text-[#7AB82E] dark:text-[#7AFF6C] mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 dark:text-[#E8F4F8]">Acceso abierto</h3>
                        <p className="text-sm text-slate-500 dark:text-[#A8C5D1]">
                            Cualquier persona puede unirse mientras haya cupos.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-[#0D5269]/50 bg-white dark:bg-[#062D3D]/60">
                        <BadgeDollarSign className="w-8 h-8 text-[#7AB82E] dark:text-[#7AFF6C] mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 dark:text-[#E8F4F8]">Reglas visibles</h3>
                        <p className="text-sm text-slate-500 dark:text-[#A8C5D1]">
                            Condiciones claras antes de unirte.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-stone-200 dark:border-[#0D5269]/50 bg-white dark:bg-[#062D3D]/60">
                        <ShieldCheck className="w-8 h-8 text-[#7AB82E] dark:text-[#7AFF6C] mx-auto mb-3" />
                        <h3 className="font-bold text-gray-900 dark:text-[#E8F4F8]">Sistema confiable</h3>
                        <p className="text-sm text-slate-500 dark:text-[#A8C5D1]">
                            Pagos confirmados y seguimiento continuo.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D] overflow-hidden">
                {/* Animated background circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full top-1/3 -left-32 animate-pulse" />
                    <div 
                        className="absolute w-80 h-80 bg-[#5A8C22]/10 dark:bg-[#00E5FF]/15 rounded-full bottom-1/4 right-1/4 animate-pulse" 
                        style={{ animationDelay: '1.5s' }}
                    />
                    <div 
                        className="absolute w-[400px] h-[400px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full -bottom-32 -right-32 animate-pulse" 
                        style={{ animationDelay: '2.5s' }}
                    />
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl lg:text-6xl font-light text-white dark:text-[#E8F4F8] mb-12">
                        Elige tu modalidad ideal
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card icon={TrendingUp} text="Empieza a ahorrar sin conocer a nadie previamente." />
                        <Card icon={Info} text="Toda la información está disponible antes de ingresar." />
                        <Card icon={ShieldCheck} text="La plataforma garantiza transparencia y orden." />
                    </div>
                </div>
            </section>

            {/* Contact placeholder - reemplaza con tu componente Contact */}
            <section className="py-20 px-4 bg-white dark:bg-[#0D5269]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-[#E8F4F8] mb-4">
                        ¿Listo para empezar?
                    </h2>
                    <p className="text-slate-600 dark:text-[#A8C5D1] mb-8">
                        Únete a un Pasanaku público hoy
                    </p>
                </div>
            </section>
        </>
    );
}

function Card({ icon: Icon, text }: any) {
    return (
        <div className="bg-white/95 dark:bg-[#0D5269]/60 border border-white/20 dark:border-[#0D5269]/50 p-6 rounded-2xl backdrop-blur-sm">
            <Icon className="w-8 h-8 text-[#7AB82E] dark:text-[#7AFF6C] mx-auto mb-3" />
            <p className="text-slate-600 dark:text-[#A8C5D1] text-center">{text}</p>
        </div>
    );
}