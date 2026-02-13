import React from 'react';
import Container from '../container/Container';
import Logo from '../Logo/Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <section className="bg-secondary text-primary-content px-3 lg:px-0">
      <Container>
        {/* Top */}
        <div className="py-12 md:py-16 grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>

            <p className="text-sm text-primary-content/80 max-w-sm leading-relaxed">
              Care that feels human — trusted home care for babies, seniors, and families who need support at home.
            </p>

            {/* Contact */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-primary-content/90">
                <Phone className="w-4 h-4" />
                <span>+31 000 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-content/90">
                <Mail className="w-4 h-4" />
                <span>support@amorae.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-primary-content/90">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Serving families across your city</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Bookings', 'Contact'].map((item) => (
                <li key={item}>
                  <a className="link link-hover text-primary-content/85 hover:text-primary-content" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {['Baby & Child Care', 'Elderly & Senior Care', 'Home Nursing', 'Respite & Short-Term Care'].map((item) => (
                <li key={item}>
                  <a className="link link-hover text-primary-content/85 hover:text-primary-content" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl bg-base-100/10 border border-primary-content/15 p-6 backdrop-blur">
              <h3 className="font-bold text-lg leading-snug">Need care at home?</h3>
              <p className="mt-2 text-sm text-primary-content/80 leading-relaxed">
                Book a caregiver or talk to our team. We’ll match you with the right support.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button className="btn btn-secondary rounded-xl">
                  Book now <ArrowUpRight className="w-4 h-4" />
                </button>
                <button className="btn btn-outline border-primary-content/30 text-primary-content hover:bg-primary-content/10 rounded-xl">
                  Call us
                </button>
              </div>

              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  className="btn btn-ghost btn-sm rounded-xl text-primary-content hover:bg-primary-content/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="btn btn-ghost btn-sm rounded-xl text-primary-content hover:bg-primary-content/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="btn btn-ghost btn-sm rounded-xl text-primary-content hover:bg-primary-content/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-content/15 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-content/70">© {new Date().getFullYear()} Amorae. All rights reserved.</p>

          <div className="flex items-center gap-4 text-xs">
            <a className="link link-hover text-primary-content/70 hover:text-primary-content" href="#">
              Privacy Policy
            </a>
            <a className="link link-hover text-primary-content/70 hover:text-primary-content" href="#">
              Terms
            </a>
            <a className="link link-hover text-primary-content/70 hover:text-primary-content" href="#">
              Support
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
