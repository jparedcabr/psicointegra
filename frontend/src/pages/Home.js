import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Brain, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: 'Terapia Individual',
      description: 'Apoyo personalizado para ansiedad, depresión y desarrollo personal.',
      link: '/servicios'
    },
    {
      icon: <Heart size={32} />,
      title: 'Terapia de Pareja',
      description: 'Fortalece tu relación y mejora la comunicación con tu pareja.',
      link: '/servicios'
    },
    {
      icon: <Users size={32} />,
      title: 'Terapia Familiar',
      description: 'Resuelve conflictos y mejora los vínculos familiares.',
      link: '/servicios'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Terapia Infantil',
      description: 'Apoyo especializado para niños y adolescentes.',
      link: '/servicios'
    }
  ];

  const testimonials = [
    {
      name: 'María G.',
      text: 'Encontré en Psico-Integra el apoyo que necesitaba para superar mi ansiedad. El trato es cálido y profesional.',
      rating: 5
    },
    {
      name: 'Carlos R.',
      text: 'La terapia de pareja nos ayudó a comunicarnos mejor. Estamos muy agradecidos con Violeta.',
      rating: 5
    },
    {
      name: 'Ana P.',
      text: 'Lander es un excelente profesional. Me siento mucho mejor después de cada sesión.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen" data-testid="home-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
                Tu bienestar emocional es nuestra prioridad
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Espacio profesional de apoyo psicológico en Pucallpa. Te acompañamos en tu proceso hacia una vida más plena y equilibrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  data-testid="hero-cta-agendar"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Agenda tu Primera Cita
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/servicios"
                  data-testid="hero-cta-servicios"
                  className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 hover:bg-primary/5 rounded-full px-8 py-4 text-lg font-medium transition-all"
                >
                  Conocer Servicios
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1754091152246-8d48d91666f8?w=800&h=600&fit=crop"
                alt="Bienestar emocional"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-3xl font-serif font-bold text-primary mb-1">+500</p>
                <p className="text-muted-foreground">Pacientes atendidos con éxito</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos atención psicológica especializada para todas las etapas de tu vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.link}
                  data-testid={`service-card-${index}`}
                  className="block bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-accent/30 to-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100"
          >
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-primary mx-auto mb-6">
              <Sparkles size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              ¿No estás seguro qué servicio necesitas?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Realiza nuestro test de bienestar y descubre qué tipo de apoyo podría beneficiarte más.
            </p>
            <Link
              to="/test-bienestar"
              data-testid="cta-wellness-test"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Realizar Test Gratuito
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Testimonios reales de personas que han encontrado apoyo en Psico-Integra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F0F9FF] rounded-2xl p-8 relative"
                data-testid={`testimonial-card-${index}`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="ml-3 font-medium text-foreground">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-accent/20" data-testid="why-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1766412107699-170f1e3f3572?w=800&h=600&fit=crop"
                alt="Profesionalismo"
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
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-4">
                {[
                  'Psicólogos titulados y colegiados',
                  'Atención personalizada y confidencial',
                  'Enfoque integral y humanista',
                  'Modalidad presencial y online',
                  'Horarios flexibles adaptados a ti'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/nosotros"
                data-testid="cta-conocenos"
                className="inline-flex items-center mt-8 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Conoce más sobre nosotros
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;