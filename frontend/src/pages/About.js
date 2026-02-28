import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Empatía',
      description: 'Comprendemos tus emociones y te acompañamos sin juzgar.'
    },
    {
      icon: <Award size={32} />,
      title: 'Profesionalismo',
      description: 'Psicólogos titulados con formación continua y actualizada.'
    },
    {
      icon: <Users size={32} />,
      title: 'Cercanía',
      description: 'Creamos un espacio seguro donde puedas expresarte libremente.'
    },
    {
      icon: <Target size={32} />,
      title: 'Compromiso',
      description: 'Tu bienestar es nuestra meta, trabajamos contigo hasta lograrlo.'
    }
  ];

  return (
    <div className="min-h-screen" data-testid="about-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Sobre Psico-Integra
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos un espacio profesional de apoyo psicológico en Pucallpa, comprometidos con tu bienestar emocional y desarrollo personal.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1606146350382-64153930ba46?w=800&h=600&fit=crop"
                alt="Nuestra misión"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                En Psico-Integra creemos que cada persona merece vivir una vida plena y equilibrada. Nuestra misión es proporcionar atención psicológica de calidad, accesible y humana a la comunidad de Pucallpa y otras regiones de manera online.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajamos desde un enfoque integral que considera todos los aspectos de tu vida: emocional, social, familiar y personal. Te acompañamos en tu proceso de crecimiento con empatía, profesionalismo y cercanía.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-accent/30 to-white" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                data-testid={`value-card-${index}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="story-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Psico-Integra nació del deseo de crear un espacio donde las personas de Pucallpa pudieran encontrar apoyo psicológico profesional y accesible. Fundado por Lander Morales y Violeta Silva, dos psicólogos apasionados por el bienestar mental de su comunidad.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoy, después de atender a más de 500 pacientes, seguimos comprometidos con nuestra visión: ser el referente de salud mental en la región, brindando atención de calidad con calidez humana.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;