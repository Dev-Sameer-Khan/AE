import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import { PRODUCTS as products, brands } from "../data/products";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Globe2,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import Seo from "../components/Seo";
import Customers from "../components/Customers";
import MissionVisionSection from "../components/MissionVisionSection";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    title: "Powering Global Industry",
    subtitle:
      "Premium heavy equipment spare parts, diesel machines, and maintenance solutions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000",
    title: "Industrial Compressors",
    subtitle: "Reliable air power for the most demanding environments.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=2000",
    title: "High-Performance Engines",
    subtitle: "Delivering maximum power and efficiency for your operations.",
  },
];

const productCategories = [
  {
    name: { en: "Engines", ar: "المحركات" },
    image: "/engine-banner.jpg",
    link: "/products?category=Engines",
    description: {
      en: "High-performance diesel engines.",
      ar: "محركات ديزل عالية الأداء.",
    },
  },
  {
    name: { en: "Compressors", ar: "الضواغط" },
    image: "/compressor-banner.jpg",
    link: "/products?category=Compressors",
    description: {
      en: "Industrial air compressors.",
      ar: "ضواغط هواء صناعية.",
    },
  },
  {
    name: { en: "Spare Parts", ar: "قطع الغيار" },
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    link: "/products?category=Spare Parts",
    description: { en: "Genuine replacement parts.", ar: "قطع غيار أصلية." },
  },
  {
    name: { en: "Filters", ar: "أطقم الصيانة" },
    image: "filter-banner.jpg",
    link: "/products?category=Maintenance Kits",
    description: { en: "Complete service solutions.", ar: "حلول خدمة شاملة." },
  },
];

const Home = () => {
  const { t, language, dir } = useI18n();
  const featuredProducts = useMemo(
    () => products.filter((p) => p.featured).slice(0, 3),
    [],
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      <Seo
        title="Ameera Enterprises | Heavy Equipment Spare Parts, Engines & Compressors"
        description="Supplier of heavy equipment spare parts, engines, compressors, filters, and maintenance kits. Serving industrial operations across India, Gulf, and Turkey."
        canonicalPath="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Heavy Machinery"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black-/50" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                {language === "en"
                  ? heroSlides[currentSlide].title
                  : t("hero.title")}
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                {language === "en"
                  ? heroSlides[currentSlide].subtitle
                  : t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-[var(--color-orange)] text-white font-semibold rounded-lg hover:bg-[var(--color-orange-hover)] transition-colors duration-300 w-full sm:w-auto"
                >
                  {t("hero.cta")}
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
                >
                  {t("hero.contact")}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[var(--color-orange)] w-8"
                  : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Brand Marquee */}
      {/* <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            {t('brands.title')}
          </h3>
        </div>
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-16 px-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="text-2xl md:text-4xl font-display font-bold text-slate-300 uppercase tracking-tighter">
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <Customers />

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-4">
                {t("trending.title")}
              </h2>
              <div className="w-20 h-1 bg-[var(--color-orange)] rounded-full" />
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-[var(--color-orange)] font-semibold hover:text-[var(--color-orange-hover)] transition-colors"
            >
              {t("trending.viewAll")}
              {dir === "rtl" ? (
                <ArrowLeft size={20} />
              ) : (
                <ArrowRight size={20} />
              )}
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-navy)]">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-[var(--color-orange)] mb-2 uppercase tracking-wider">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-3 line-clamp-1">
                    {product.name[language]}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {product.desc[language]}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center justify-center w-full py-3 bg-slate-50 text-[var(--color-navy)] font-semibold rounded-lg group-hover:bg-[var(--color-orange)] group-hover:text-white transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[var(--color-orange)] font-semibold"
            >
              {t("trending.viewAll")}
              {dir === "rtl" ? (
                <ArrowLeft size={20} />
              ) : (
                <ArrowRight size={20} />
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-4">
              {language === "en" ? "Our Products" : "منتجاتنا"}
            </h2>
            <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Explore our comprehensive range of heavy equipment spare parts and machinery."
                : "استكشف مجموعتنا الشاملة من قطع غيار المعدات الثقيلة والآلات."}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  to={category.link}
                  className="group block relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-10 h-10 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name[language]}
                    </h3>
                    <p className="text-slate-300 text-sm">
                      {category.description[language]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000"
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

export default Home;
