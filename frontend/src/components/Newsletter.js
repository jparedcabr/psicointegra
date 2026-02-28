import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://formspree.io/f/xreadrdr', {
        email,
        _subject: 'Nueva suscripción al Newsletter - Psico-Integra',
        message: `Nueva suscripción al newsletter de: ${email}`
      });
      
      toast({
        title: '¡Suscripción exitosa!',
        description: 'Te has suscrito a nuestro newsletter. Recibirás contenido de valor sobre salud mental.',
      });

      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      
      toast({
        title: 'Error',
        description: 'Hubo un problema con tu suscripción. Intenta de nuevo.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 md:p-8" data-testid="newsletter-component">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
          Suscríbete a nuestro Newsletter
        </h3>
        <p className="text-muted-foreground mb-6">
          Recibe artículos, consejos y recursos sobre salud mental directamente en tu correo
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" data-testid="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            required
            data-testid="newsletter-email-input"
            className="flex-1 rounded-xl border-slate-200 bg-white focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-12 px-4"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            data-testid="newsletter-submit-button"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 py-3 font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isSubmitting ? 'Suscribiendo...' : (
              <>
                Suscribirme
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
