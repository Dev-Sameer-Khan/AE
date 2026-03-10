import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Seo from '../components/Seo';

const Contact = () => {
  const { t, dir } = useI18n();

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title="Contact | Ameera Enterprises"
        description="Request quotes, check availability, or get technical support for engines, compressors, and heavy equipment spare parts. Reach our team by phone or email."
        canonicalPath="/contact"
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We are here to assist you with all your heavy equipment and spare parts needs. Reach out to our team for inquiries, quotes, or technical support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.address')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  123 Industrial Estate,<br />
                  Andheri East, Mumbai,<br />
                  Maharashtra 400093, India
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.phone')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  +91 98765 43210<br />
                  +91 22 1234 5678
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">{t('contact.email')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  info@ameeraenterprises.com<br />
                  sales@ameeraenterprises.com
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--color-orange)] flex-shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Business Hours</h3>
                <p className="text-slate-600 leading-relaxed">
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-navy)] rounded-full blur-[100px] opacity-5 translate-x-1/2 -translate-y-1/2" />
              
              <h2 className="text-3xl font-display font-bold text-[var(--color-navy)] mb-8 relative z-10">
                Send us a Message
              </h2>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                    placeholder="Inquiry about Deutz Engines"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-navy)] mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[var(--color-navy)] text-white font-bold rounded-xl hover:bg-[var(--color-navy-light)] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
