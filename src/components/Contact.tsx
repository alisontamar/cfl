import { Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Whatsapp } from '../icons/whatsapp';

export default function Contact() {
  const contactMethods = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: '¿Tienes preguntas? Nuestro equipo está listo para ayudarte. Escríbenos y te responderemos de inmediato.',
      icon: Whatsapp,
      actionText: 'Abrir WhatsApp',
      href: 'https://wa.me/+59167548200',
      color: 'from-[#25D366]/20 to-[#128C7E]/20',
      delay: '0.1s'
    },
    {
      id: 'email',
      title: 'Correo Electrónico',
      description: 'También puedes escribirnos por correo y te responderemos a la brevedad posible.',
      icon: Mail,
      actionText: 'Enviar correo',
      href: 'mailto:dreamersb648@gmail.com',
      color: 'from-[#0BA4B5]/20 to-[#7AB82E]/20',
      delay: '0.2s'
    }
  ];

  return (
    <section 
      id="contacto" 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-[#5A8C22] to-[#4A7C19] dark:from-[#1A3B0F] dark:to-[#0F2A14] overflow-hidden"
      aria-label="Contacto y soporte"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-[600px] h-[600px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -top-64 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full top-1/4 -right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-[#6FCD13]/10 rounded-full -bottom-48 right-1/4 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-80 h-80 bg-white/5 dark:bg-[#0BA4B5]/10 rounded-full bottom-1/4 left-0 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/20 dark:bg-[#6FCD13]/15 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Estamos aquí para ti</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white mb-6">
            Únete a la Comunidad
          </h1>
          
          <div className="w-24 h-1 bg-[#0BA4B5] dark:bg-[#6FCD13] mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg md:text-xl text-white/80 dark:text-slate-300 leading-relaxed">
            Comienza tu camino hacia la libertad financiera junto a miles de personas que ya confían en nosotros.
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {contactMethods.map((method) => (
            <article 
              key={method.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: method.delay }}
              aria-label={`Contactar por ${method.title}`}
            >
              {/* Background glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: method.id === 'whatsapp' 
                    ? 'linear-gradient(135deg, #25D366, #128C7E)' 
                    : 'linear-gradient(135deg, #0BA4B5, #7AB82E)'
                }}
                aria-hidden="true"
              />
              
              {/* Card content */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-[#0F2A14]/60 dark:to-[#081B0D]/60 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border-2 border-white/20 dark:border-[#6FCD13]/20 group-hover:border-white/40 dark:group-hover:border-[#6FCD13]/40 transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Icon */}
                <div className="bg-gradient-to-br from-white/20 to-white/10 dark:from-[#6FCD13]/20 dark:to-[#0BA4B5]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title and description */}
                <h2 className="text-2xl lg:text-3xl font-bold text-white dark:text-white mb-4">
                  {method.title}
                </h2>
                <p className="text-white/80 dark:text-slate-300 mb-8 leading-relaxed">
                  {method.description}
                </p>
                
                {/* Action button */}
                <a
                  href={method.href}
                  target={method.id === 'whatsapp' ? '_blank' : '_self'}
                  rel={method.id === 'whatsapp' ? 'noopener noreferrer' : ''}
                  className="group/btn inline-flex items-center justify-center space-x-3 bg-white text-[#5A8C22] dark:bg-[#6FCD13] dark:text-background-dark px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                  aria-label={`Contactar por ${method.title}`}
                >
                  <method.icon className="w-5 h-5" />
                  <span>{method.actionText}</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}