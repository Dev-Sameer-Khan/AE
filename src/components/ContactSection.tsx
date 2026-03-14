import React from "react";
import { motion } from "motion/react";
import { useI18n } from "../context/I18nContext";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const { t, dir } = useI18n();

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
      <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-6"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Engineering-style heading + contact facts */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <p className="text-sm font-semibold text-[var(--color-navy)] uppercase tracking-[0.2em] mb-4">
              {t("missionVision.expertiseLabel")}
            </p> */}
            {/* <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-4 leading-tight">
              {t("missionVision.tagline")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-xl">
              {t("missionVision.intro")}
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
              {t("contact.subtitle")}
            </p> */}

            <div className="h-px bg-slate-200 mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-orange)]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-navy)] uppercase tracking-[0.12em] mb-1">
                    {t("contact.address")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    <a href="https://maps.app.goo.gl/Q4Vmjt9xQHzbwXNP7"  className="hover:text-[var(--color-orange)] transition-all duration-300" target="_blank" rel="noopener noreferrer">A 95,
                    <br />
                    Imamganj, Aboonagar
                    <br />
                    Fatehpur 212601, Uttar Pradesh, India
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-orange)]">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-navy)] uppercase tracking-[0.12em] mb-1">
                    {t("contact.phone")}
                  </h3>
                  <p className="text-sm text-slate  -600 leading-relaxed">
                    <a href="tel:+916387258771"  className="hover:text-[var(--color-orange)] transition-all duration-300">+91 6387258771</a>
                    <br />
                    <a href="tel:+917905808995"  className="hover:text-[var(--color-orange)] transition-all duration-300">+91 7905808995</a>
                    <br />
                    <a href="tel:+966556031246"  className="hover:text-[var(--color-orange)] transition-all duration-300">+966 556031246</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-orange)]">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-navy)] uppercase tracking-[0.12em] mb-1">
                    {t("contact.email")}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <a href="mailto:contact2ameeraenterprises@gmail.com"  className="hover:text-[var(--color-orange)] transition-all duration-300">contact2ameeraenterprises@gmail.com</a>
                    <br />
                    <a href="mailto:nazimkhan2821@gmail.com"  className="hover:text-[var(--color-orange)] transition-all duration-300">nazimkhan2821@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[var(--color-orange)]">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-navy)] uppercase tracking-[0.12em] mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          <div className="mt-8 rounded-3xl overflow-hidden shadow-sm">
            <iframe
              title="Ameera Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d708.2519840468058!2d80.8113916225783!3d25.9380217319353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sImamganj%2C%20Aboonagar%20Fatehpur%20212601%2C%20Uttar%20Pradesh%2C%20India!5e1!3m2!1sen!2sin!4v1773473216915!5m2!1sen!2sin"
              width="100%"
              height="395"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </motion.div>

          {/* Right: Form card, styled like a stat panel */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-y-0 right-[-120px] w-80 bg-[var(--color-navy)]/5 rounded-l-full" />

              <form
                className="space-y-6 relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all"
                    placeholder="Inquiry about Deutz engines"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[var(--color-navy)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 bg-[var(--color-orange)] text-white font-semibold rounded-xl hover:bg-[var(--color-orange-hover)] cursor-pointer transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t("contact.send")}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
