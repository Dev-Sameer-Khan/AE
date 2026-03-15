import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { Globe2, Award, Users, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Seo from '../components/Seo';
import MissionVisionSection from '../components/MissionVisionSection';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import Customers from '../components/Customers';

const About = () => {
  const { t, dir } = useI18n();

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title="About Us | Ameera Enterprises"
        description="Ameera Enterprises supplies premium heavy equipment spare parts across the India–Gulf–Turkey trade corridor. Trusted sourcing, fast logistics, and dependable support."
        canonicalPath="/about"
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-6"
          >
            {t('nav.about')}
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
            Ameera Enterprises is a premier supplier of heavy equipment spare parts, bridging the gap between top-tier manufacturers and industrial operations across the India-Gulf-Turkey trade corridor.
          </motion.p>
        </div>


        {/* Trade Corridor Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/vc.jpeg"
              alt="Global Trade"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-navy)]/80 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <h3 className="text-2xl font-display font-bold mb-2">Strategic Location</h3>
                <p className="text-sm text-slate-200">Headquartered in Mumbai, India, with strong logistical ties to the Gulf and Turkey.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-6">
              Connecting India, Gulf & Turkey
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over two decades, Ameera Enterprises has been at the forefront of the heavy machinery supply chain. We understand the critical nature of industrial operations and the cost of downtime.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our strategic positioning allows us to source the highest quality OEM parts from global manufacturers and deliver them efficiently across our primary markets in the Middle East and Eurasia.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[var(--color-orange)] mb-4">
                  <Globe2 size={24} />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-navy)] mb-2">Global Sourcing</h4>
                <p className="text-slate-500 text-sm">Direct partnerships with leading brands.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-[var(--color-orange)] mb-4">
                  <Award size={24} />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-navy)] mb-2">OEM Quality</h4>
                <p className="text-slate-500 text-sm">Guaranteed genuine parts and equipment.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-[var(--color-navy)] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)] rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-orange)] rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-[var(--color-orange)] mb-6 backdrop-blur-sm border border-white/20">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Reliability</h3>
                <p className="text-slate-300 leading-relaxed">
                  We deliver on our promises, ensuring your operations never stop due to equipment failure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-[var(--color-orange)] mb-6 backdrop-blur-sm border border-white/20">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  We maintain the highest standards in product quality and customer service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-[var(--color-orange)] mb-6 backdrop-blur-sm border border-white/20">
                  <Users size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Partnership</h3>
                <p className="text-slate-300 leading-relaxed">
                  We build long-term relationships based on trust, transparency, and mutual success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Customers />

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-6 leading-tight">
                {t("about.title")}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t("about.description")}
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-[var(--color-orange)]">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-navy)]">
                      Global Reach
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Connecting markets across India, Gulf, and Turkey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-[var(--color-orange)]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-navy)]">
                      Premium Quality
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Sourcing only genuine and OEM standard parts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 text-[var(--color-orange)]">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-navy)]">
                      Expert Maintenance
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Comprehensive support for diesel machines.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-orange)] text-white font-semibold rounded-lg hover:bg-[var(--color-orange-hover)] transition-colors"
              >
                {t("about.readMore")}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/shop.jpeg"
                alt="Industrial Operations"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[var(--color-navy)] mix-blend-multiply opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      <MissionVisionSection />

      <Testimonials />
      <ContactSection />
      <FAQ />
    </div>
  );
};

export default About;
