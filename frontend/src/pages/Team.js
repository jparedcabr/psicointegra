import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Award, GraduationCap } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Lander Morales',
      title: 'Psicólogo',
      specialty: 'Ansiedad y Desarrollo Personal',
      image: 'https://customer-assets.emergentagent.com/job_109bcec3-7b86-4117-bda5-b0fe54edad67/artifacts/o87t8awj_lander.png',
      phone: '51953116171',
      description: 'Especialista en terapia cognitivo-conductual con enfoque en ansiedad, depresión y desarrollo personal. Comprometido con crear un espacio seguro donde puedas explorar tus emociones y alcanzar tu mejor versión.',
      credentials: [
        'Psicólogo titulado y colegiado',
        'Especialista en Terapia Cognitivo-Conductual',
        'Certificación en Manejo de Ansiedad'
      ]
    },
    {
      name: 'Violeta Silva',
      title: 'Psicóloga Familiar',
      specialty: 'Terapia de Pareja y Familiar',
      image: 'https://customer-assets.emergentagent.com/job_109bcec3-7b86-4117-bda5-b0fe54edad67/artifacts/pj9s4tsk_violeta.png',
      phone: '51997609767',
      description: 'Experta en terapia de pareja y familiar con enfoque sistémico. Apasionada por ayudar a familias y parejas a fortalecer sus vínculos y mejorar su comunicación emocional.',
      credentials: [
        'Psicóloga titulada y colegiada',
        'Especialista en Terapia Familiar Sistémica',
        'Certificación en Terapia Infantil',
        '+6 años de experiencia clínica'
      ]
    }
  ];

  const handleWhatsApp = (phone, name) => {
    const message = encodeURIComponent(`Hola ${name}, me gustaría agendar una cita de consulta psicológica.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen" data-testid="team-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Psicólogos profesionales comprometidos con tu bienestar emocional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="team-members">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                data-testid={`team-member-${index}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
                  />
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-4">
                    <Award size={18} className="text-primary" />
                    <span className="text-sm font-medium text-primary">{member.title}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
                    {member.name}
                  </h2>
                  
                  <p className="text-lg text-primary font-medium mb-6">{member.specialty}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="bg-accent/30 rounded-2xl p-6 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <GraduationCap size={24} className="text-primary" />
                      <h3 className="font-serif font-semibold text-foreground">Credenciales</h3>
                    </div>
                    <ul className="space-y-2">
                      {member.credentials.map((credential, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-muted-foreground">{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleWhatsApp(member.phone, member.name)}
                      data-testid={`whatsapp-button-${member.name.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20BA5A] rounded-full px-6 py-3 font-medium transition-all shadow-md hover:shadow-lg"
                    >
                      <MessageCircle size={20} className="mr-2" />
                      WhatsApp
                    </button>
                    <a
                      href="mailto:psico.integra03@gmail.com"
                      data-testid={`email-button-${member.name.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 hover:bg-primary/5 rounded-full px-6 py-3 font-medium transition-all"
                    >
                      <Mail size={20} className="mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;