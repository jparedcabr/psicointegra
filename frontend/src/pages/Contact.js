import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    psychologist: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const psychologists = ['Lander Morales', 'Violeta Silva', 'Sin preferencia'];
  const services = [
    'Terapia Individual',
    'Terapia de Pareja',
    'Terapia Familiar',
    'Terapia Infantil',
    'Manejo de Ansiedad',
    'Orientación Vocacional',
    'Talleres de Promoción y Prevención en Salud Mental',
    'Gestión de Talento Humano'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://formspree.io/f/xreadrdr', {
        ...formData,
        _subject: `Nueva solicitud de cita - ${formData.name}`,
        _replyto: formData.email
      });
      
      toast({
        title: '¡Solicitud enviada!',
        description: 'Nos pondremos en contacto contigo pronto.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        psychologist: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="contact-page">
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Agenda tu Cita
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white" data-testid="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">Pucallpa, Perú</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfonos</h3>
                    <p className="text-muted-foreground">953116171 (Lander Morales)</p>
                    <p className="text-muted-foreground">997609767 (Violeta Silva)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:psico.integra03@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      psico.integra03@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/30 rounded-2xl">
                <h3 className="font-serif font-semibold text-foreground mb-3">Horarios de Atención</h3>
                <p className="text-muted-foreground mb-2">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm" data-testid="contact-form">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      data-testid="input-phone"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                    />
                  </div>

                  <div>
                    <label htmlFor="psychologist" className="block text-sm font-medium text-foreground mb-2">
                      Preferencia de psicólogo *
                    </label>
                    <select
                      id="psychologist"
                      name="psychologist"
                      value={formData.psychologist}
                      onChange={handleChange}
                      required
                      data-testid="select-psychologist"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                    >
                      <option value="">Selecciona una opción</option>
                      {psychologists.map((psy) => (
                        <option key={psy} value={psy}>{psy}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      data-testid="select-service"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje adicional (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      data-testid="input-message"
                      className="w-full rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all px-4 py-3"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="submit-contact-form"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        Enviar Solicitud
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;