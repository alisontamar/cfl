import { Flag, Eye, ShieldCheck, Handshake, Lightbulb } from "lucide-react";

export default function Benefits() {
  const cflValues = [
    {
      title: "Confiabilidad",
      description: "Sistemas auditados y procesos transparentes para tu paz mental.",
      icon: ShieldCheck
    },
    {
      title: "Responsabilidad",
      description: "Compromiso total con cada miembro de la comunidad CFL.",
      icon: Handshake
    },
    {
      title: "Innovación",
      description: "Reinventamos tradiciones con la mejor tecnología fintech.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0F2A14] dark:to-[#081B0D] relative">
      {/* Animated background circles - colores adaptados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -top-48 left-1/4 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full -bottom-48 right-1/4 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full top-1/4 -left-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-80 h-80 bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full top-1/3 right-0 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AB82E]/10 rounded-full bottom-1/4 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-white/5 dark:bg-[#6FCD13]/10 rounded-full bottom-0 left-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 z-10 relative">
        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6">

          <article
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden group min-h-[350px] flex flex-col justify-end border border-white/20 dark:border-[#6FCD13]/20"
            aria-labelledby="mision-title"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618044613393-8bd0236e7b6e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A14] via-[#0F2A14]/80 to-transparent dark:from-[#081B0D] dark:via-[#081B0D]/80" aria-hidden="true" />

            <div className="relative z-10">
              <h3 id="mision-title" className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Nuestra Misión
              </h3>
              <p className="text-white/90 dark:text-slate-200 text-lg leading-relaxed">
                Democratizar el acceso al capital a través de tecnología que potencia la confianza comunitaria y el desarrollo financiero inclusivo.
              </p>
            </div>
          </article>

          <article
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden group min-h-[350px] flex flex-col justify-end border border-white/20 dark:border-[#6FCD13]/20"
            aria-labelledby="vision-title"
          >
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618044613393-8bd0236e7b6e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A14] via-[#0F2A14]/80 to-transparent dark:from-[#081B0D] dark:via-[#081B0D]/80" aria-hidden="true" />

            <div className="relative z-10">
              <h3 id="mision-title" className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Nuestra Visión
              </h3>
              <p className="text-white/90 dark:text-slate-200 text-lg leading-relaxed">
                Ser la plataforma líder de ahorro social en Latinoamérica, conectando a millones de personas.
              </p>
            </div>
          </article>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cflValues.map((value, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 dark:from-[#0F2A14]/60 dark:to-[#081B0D]/40 border border-white/20 dark:border-[#6FCD13]/20 p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
            >
              <div className="size-12 bg-white/20 dark:bg-[#6FCD13]/20 rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white dark:text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white dark:text-white">{value.title}</h4>
              <p className="text-white/80 dark:text-slate-200">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        {/* Información adicional */}
        <div className="text-center pt-6">
          <p className="text-white/80 dark:text-slate-300 text-lg">
            Únete a nuestra comunidad y experimenta una nueva forma de ahorrar
          </p>
        </div>
      </div>
    </section>
  );
}