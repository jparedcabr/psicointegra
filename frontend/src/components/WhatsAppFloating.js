import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const psychologists = [
    {
      name: 'Lander Morales',
      phone: '51953116171',
      image: 'https://customer-assets.emergentagent.com/job_109bcec3-7b86-4117-bda5-b0fe54edad67/artifacts/o87t8awj_lander.png',
      specialty: 'Ansiedad y Desarrollo Personal'
    },
    {
      name: 'Violeta Silva',
      phone: '51997609767',
      image: 'https://customer-assets.emergentagent.com/job_109bcec3-7b86-4117-bda5-b0fe54edad67/artifacts/pj9s4tsk_violeta.png',
      specialty: 'Terapia de Pareja y Familiar'
    }
  ];

  const handleWhatsAppClick = (phone, name) => {
    const message = encodeURIComponent(`Hola ${name}, me gustaría agendar una cita de consulta psicológica.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="whatsapp-floating">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-4 w-72"
            data-testid="whatsapp-menu"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif font-semibold text-foreground">Chatea con nosotros</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                data-testid="close-whatsapp-menu"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              {psychologists.map((psy, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(psy.phone, psy.name)}
                  data-testid={`whatsapp-contact-${psy.name.toLowerCase().replace(' ', '-')}`}
                  className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-accent transition-all group"
                >
                  <img
                    src={psy.image}
                    alt={psy.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {psy.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{psy.specialty}</p>
                  </div>
                  <MessageCircle size={20} className="text-[#25D366]" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20BA5A] transition-colors"
        data-testid="whatsapp-floating-button"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloating;