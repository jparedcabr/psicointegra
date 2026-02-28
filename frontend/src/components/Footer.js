import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-muted border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mb-12">
          <Newsletter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_109bcec3-7b86-4117-bda5-b0fe54edad67/artifacts/dvhkok20_WhatsApp%20Image%202026-02-27%20at%206.08.08%20PM.jpeg"
              alt="Psico-Integra"
              className="h-16 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Espacio profesional de apoyo psicológico en Pucallpa. Confianza, cercanía y bienestar.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-inicio">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-nosotros">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-servicios">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-equipo">
                  Equipo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Pucallpa, Perú</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>953116171 (Lander)</div>
                  <div>997609767 (Violeta)</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:psico.integra03@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  data-testid="footer-email-link"
                >
                  psico.integra03@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-foreground">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/psico.integra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                data-testid="footer-facebook-link"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/psico.integra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                data-testid="footer-instagram-link"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Psico-Integra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;