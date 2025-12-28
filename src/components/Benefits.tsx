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
    <section id="beneficios" className="py-20 px-4 bg-gradient-to-br from-[#7AB82E] to-[#5A8C22] dark:from-[#0B4A5E] dark:to-[#062D3D] relative">
      {/* Animated background circles - colores adaptados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full -top-48 left-1/4 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#00E5FF]/15 rounded-full -bottom-48 right-1/4 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-[400px] h-[400px] bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full top-1/4 -left-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-80 h-80 bg-white/5 dark:bg-[#00E5FF]/15 rounded-full top-1/3 right-0 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#7AFF6C]/10 rounded-full bottom-1/4 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-72 h-72 bg-white/5 dark:bg-[#00E5FF]/15 rounded-full bottom-0 left-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 z-10 relative">
        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6">

          <article
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden group min-h-[350px] flex flex-col justify-end border border-white/20 dark:border-[#0D5269]/30"
            aria-labelledby="mision-title"
          >
            <div
            className="absolute inset-0 bg-[url('/mision.svg')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A14] via-[#0F2A14]/40 to-transparent dark:from-[#062D3D] dark:via-[#062D3D]/80" aria-hidden="true" />

            <div className="relative z-10">
              <h3 id="mision-title" className="text-2xl md:text-3xl font-bold mb-4 text-white dark:text-[#E8F4F8]">
                Nuestra Misión
              </h3>
              <p className="text-white/90 dark:text-[#A8C5D1] text-lg leading-relaxed">
                Democratizar el acceso al capital a través de tecnología que potencia la confianza comunitaria y el desarrollo financiero inclusivo.
              </p>
            </div>
          </article>

          <article
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden group min-h-[350px] flex flex-col justify-end border border-white/20 dark:border-[#0D5269]/30"
            aria-labelledby="vision-title"
          >
            <div
              className="absolute inset-0 bg-[url('/vision.svg')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A14] via-[#0F2A14]/40 to-transparent dark:from-[#062D3D] dark:via-[#062D3D]/80" aria-hidden="true" />

            <div className="relative z-10">
              <h3 id="vision-title" className="text-2xl md:text-3xl font-bold mb-4 text-white dark:text-[#E8F4F8]">
                Nuestra Visión
              </h3>
              <p className="text-white/90 dark:text-[#A8C5D1] text-lg leading-relaxed">
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
              className="bg-gradient-to-br from-white/10 to-white/5 dark:from-[#0D5269]/60 dark:to-[#062D3D]/60 border border-white/20 dark:border-[#0D5269]/30 p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
            >
              <div className="size-12 bg-white/20 dark:bg-[#7AFF6C]/20 rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white dark:text-[#7AFF6C]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white dark:text-[#E8F4F8]">{value.title}</h4>
              <p className="text-white/80 dark:text-[#A8C5D1]">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        {/* Información adicional */}
        <div className="text-center pt-6">
          <p className="text-white/80 dark:text-[#A8C5D1] text-lg">
            Únete a nuestra comunidad y experimenta una nueva forma de ahorrar
          </p>
        </div>
      </div>
    </section>
  );
}