import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Sparkles, Compass, Baby, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Brain size={40} />,
      title: 'Terapia Individual',
      description: 'Espacio confidencial para trabajar en tu bienestar emocional y desarrollo personal.',
      details: [
        'Ansiedad y manejo del estrés',
        'Depresión y estado de ánimo',
        'Autoestima y confianza',
        'Desarrollo personal y crecimiento',
        'Duelo y pérdidas'
      ]
    },
    {
      icon: <Heart size={40} />,
      title: 'Terapia de Pareja',
      description: 'Fortalece tu relación, mejora la comunicación y resuelve conflictos juntos.',
      details: [
        'Problemas de comunicación',
        'Conflictos y desacuerdos',
        'Infidelidad y crisis de confianza',
        'Intimidad y conexión emocional',
        'Toma de decisiones importantes'
      ]
    },
    {
      icon: <Users size={40} />,
      title: 'Terapia Familiar',
      description: 'Mejora los vínculos familiares y resuelve conflictos en un ambiente de respeto.',
      details: [
        'Conflictos familiares',
        'Problemas de comunicación',
        'Roles y límites familiares',
        'Cambios y transiciones',
        'Crianza y disciplina'
      ]
    },
    {
      icon: <Baby size={40} />,
      title: 'Terapia Infantil',
      description: 'Apoyo especializado para niños y adolescentes en su desarrollo emocional.',
      details: [
        'Problemas de conducta',
        'Ansiedad infantil',
        'Dificultades escolares',
        'Autoestima y habilidades sociales',
        'Problemas de sueño o alimentación'
      ]
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Manejo de Ansiedad',
      description: 'Técnicas efectivas para controlar la ansiedad y recuperar tu tranquilidad.',
      details: [
        'Técnicas de relajación',
        'Mindfulness y meditación',
        'Reestructuración cognitiva',
        'Manejo de crisis de pánico',
        'Estrategias de afrontamiento'
      ]
    },
    {
      icon: <Compass size={40} />,
      title: 'Orientación Vocacional',
      description: 'Descubre tu vocación y toma decisiones acertadas sobre tu futuro profesional.',
      details: [
        'Evaluación de intereses y habilidades',
        'Exploración de opciones profesionales',
        'Toma de decisiones vocacionales',
        'Plan de vida y carrera',
        'Apoyo en transiciones laborales'
      ]
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Talleres de Promoción y Prevención en Salud Mental',
      description: 'Programas educativos para promover el bienestar y prevenir problemas de salud mental.',
      details: [
        'Talleres de manejo de estrés',
        'Promoción de salud mental en empresas',
        'Prevención de burnout',
        'Bienestar emocional en comunidades',
        'Charlas educativas personalizadas'
      ]
    },
    {
      icon: <Compass size={40} />,
      title: 'Gestión de Talento Humano',
      description: 'Servicios especializados para empresas en el desarrollo y bienestar de sus equipos.',
      details: [
        'Evaluación psicológica de personal',
        'Desarrollo organizacional',
        'Clima laboral y cultura organizacional',
        'Coaching y capacitación',
        'Gestión del cambio organizacional'
      ]
    }
  ];

  return (
    <div className="min-h-screen" data-testid="services-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Atención psicológica especializada para cada etapa y necesidad de tu vida
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                data-testid={`service-detail-card-${index}`}
              >
                <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-accent/30 to-white" data-testid="cta-contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Agenda tu consulta hoy y comienza tu camino hacia el bienestar emocional.
            </p>
            <Link
              to="/contacto"
              data-testid="cta-agendar-services"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Agendar Cita Ahora
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;