import { useState } from "react";
import { DollarSign, Check, BadgeDollarSign } from "lucide-react"

export default function Pasanaku() {
    const [persons, setPersons] = useState(10);
    const [amount, setAmount] = useState(100);
    const pasanakuFeatures = [
        {
            title: "Turnos aleatorios o por subasta",
            icon: Check
        },
        {
            title: "Pagos automatizados y seguros",
            icon: Check
        },
        {
            title: "Sin perseguir a nadie para cobrar",
            icon: Check
        }
    ] as const;

    return (
        <section id="pasanaku"
        className="py-20 px-4 bg-gradient-to-br from-[#5A8C22] to-[#4A7C19] dark:from-[#0B4A5E] dark:to-[#062D3D] relative">
            {/* Animated background circles - variación de azules */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 bg-[#7AB82E] opacity-10 dark:bg-[#7AFF6C] dark:opacity-5 rounded-full -top-48 left-4 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-[#4A7C19] opacity-10 dark:bg-[#00E5FF] dark:opacity-5 rounded-full bottom-0 right-4 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-[#E8F4F8]">¿Qué es un Pasanaku?</h2>
                    <p className="text-white/90 dark:text-[#A8C5D1] text-lg leading-relaxed">
                        Es una forma simple de ahorro rotativo donde un grupo de personas aporta una cantidad fija periódicamente y cada uno recibe el total en un turno asignado. En CFL, eliminamos el riesgo y la gestión manual.
                    </p>
                    <ul className="space-y-4">
                        {
                            pasanakuFeatures.map((feature) => (
                                <li key={feature.title} className="flex items-start gap-3">
                                    <feature.icon className="w-6 h-6 text-[#E9F7D9] dark:text-[#7AFF6C] mt-1 flex-shrink-0" />
                                    <span className="text-sm font-medium text-white dark:text-[#E8F4F8]">{feature.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className="bg-gradient-to-br from-white/20 to-[#7AB82E]/20 dark:from-[#0D5269]/80 dark:to-[#083D52]/80 shadow-2xl p-6 md:p-8 rounded-2xl border border-white/30 dark:border-[#0D5269]/40 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white dark:text-[#E8F4F8]">
                        <BadgeDollarSign className="w-8 h-8 dark:text-[#7AFF6C]" />
                        Simula tu Ahorro
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-white dark:text-[#A8C5D1]">Participantes</label>
                                <span className="font-bold text-[#E9F7D9] dark:text-[#7AFF6C]">{persons} Personas</span>
                            </div>
                            <input className="w-full h-2 bg-white/30 dark:bg-[#062D3D] rounded-lg appearance-none cursor-pointer accent-white dark:accent-[#7AFF6C]" max="20" min="5" type="range" value={persons} onChange={(e) => setPersons(+e.target.value)} />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-white dark:text-[#A8C5D1]">Aporte Mensual</label>
                                <span className="font-bold text-[#E9F7D9] dark:text-[#7AFF6C]">{amount} Bs</span>
                            </div>
                            <input className="w-full h-2 bg-white/30 dark:bg-[#062D3D] rounded-lg appearance-none cursor-pointer accent-white dark:accent-[#7AFF6C]" max="1000" min="50" step="50" type="range" value={amount} onChange={(e) => setAmount(+e.target.value)} />
                        </div>
                        <div className="bg-white/20 dark:bg-[#0D5269]/60 rounded-xl p-4 border border-white/30 dark:border-[#00E5FF]/30 flex justify-between items-center mt-4 backdrop-blur-sm">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wide text-white/80 dark:text-[#8BA8B5]">Recibirás un total de</span>
                                <span className="text-3xl font-black text-white dark:text-[#E8F4F8]">Bs, {amount * persons}</span>
                            </div>
                            <div className="size-10 rounded-full bg-white dark:bg-[#7AFF6C] flex items-center justify-center text-[#5A8C22] dark:text-[#062D3D]">
                                <DollarSign className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}