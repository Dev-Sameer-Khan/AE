import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { PRODUCTS as  products } from '../data/products';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Target,
  Headset,
  Globe2,
} from 'lucide-react';
import Seo from '../components/Seo';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language, dir } = useI18n();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 pt-20">
        <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-[var(--color-navy)] text-white rounded-lg font-semibold hover:bg-[var(--color-navy-light)] transition-colors"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  const recommendations = products
    .filter((p) => p.id !== product.id && p.category !== product.category)
    .slice(0, 4);

  const whatsappMessage = `Hello Ameera Enterprises, I am interested in inquiring about ${product.name.en}.`;
  const whatsappUrl = `https://wa.me/916387258771?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const whatsappMoreInfoMessage = `Hi, I'm interested in the ${product.name.en} (${product.desc.en}). Can I get more technical specifications and pricing information?`;
  const whatsappMoreInfoUrl = `https://wa.me/916387258771?text=${encodeURIComponent(
    whatsappMoreInfoMessage,
  )}`;

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title={`${product.name[language]} | Ameera Enterprises`}
        description={product.desc[language]}
        canonicalPath={`/products/${product.id}`}
      />
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-[var(--color-orange)] transition-colors">{t('nav.home')}</Link>
          {dir === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          <Link to="/products" className="hover:text-[var(--color-orange)] transition-colors">{t('nav.products')}</Link>
          {dir === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          <Link to={`/products?category=${product.category}`} className="hover:text-[var(--color-orange)] transition-colors">{product.category}</Link>
          {dir === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          <span className="text-[var(--color-navy)] font-medium truncate max-w-[200px] md:max-w-none">{product.name[language]}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center h-[400px] lg:h-[700px] bg-slate-100 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name[language]}
                className="object-cover"
                style={{height: '700px' }}
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[var(--color-navy)] shadow-sm">
                {product.brand}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="text-sm font-bold text-[var(--color-orange)] mb-3 uppercase tracking-widest">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-6 leading-tight">
                {product.name[language]}
              </h1>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3">{t('product.description')}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {product.desc[language]}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-4">{t('product.specs')}</h3>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <ul className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-500 font-medium mb-1 sm:mb-0">{key}</span>
                        <span className="text-[var(--color-navy)] font-semibold text-right">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
                  {t('product.inquiry')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] text-[var(--color-orange)] mb-4 uppercase">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-4">
              Engineering Excellence You Can Trust
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our commitment to quality, expertise, and customer support keeps your equipment running and downtime under control—no matter where you operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-7 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--color-orange)] mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-navy)] mb-2 uppercase tracking-[0.12em]">
                Warranty Guaranteed
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive warranty on critical components and OEM-grade parts for added peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-7 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--color-orange)] mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-navy)] mb-2 uppercase tracking-[0.12em]">
                Precision Quality
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every shipment is checked against strict specifications so your engines and compressors perform as designed.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-7 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--color-orange)] mb-4">
                <Headset size={24} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-navy)] mb-2 uppercase tracking-[0.12em]">
                Expert Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Application guidance, part identification, and after‑sales support from specialists who know your machines.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-7 flex flex-col">
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--color-orange)] mb-4">
                <Globe2 size={24} />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-navy)] mb-2 uppercase tracking-[0.12em]">
                Global Logistics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strategic sourcing across India, Gulf, and Turkey with fast dispatch on stocked items.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Recommendations */}
        {recommendations.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-[var(--color-orange)] mb-3 uppercase">
                  {t('product.recommendationTitle')}
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-navy)]">
                  {t('product.recommendationHeading')}
                </h2>
              </div>
              <Link
                to="/products"
                className="hidden md:inline-flex items-center gap-2 text-[var(--color-orange)] text-sm font-semibold hover:text-[var(--color-orange-hover)] transition-colors"
              >
                View all products
                {dir === 'rtl' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>
            </div>
            <p className="text-sm text-slate-500 mb-6 max-w-3xl">
              {t('product.recommendationSubtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendations.map((item) => (
                <Link
                  key={item.id}
                  to={`/products/${item.id}`}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-[var(--color-orange)]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="relative h-40 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-[var(--color-navy)] text-white text-[11px] font-semibold px-3 py-1 uppercase tracking-[0.12em]">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-[11px] font-semibold text-slate-500 tracking-[0.16em] uppercase mb-2">
                      {item.brand}
                    </p>
                    <h3 className="text-sm md:text-base font-semibold text-[var(--color-navy)] mb-1 line-clamp-2">
                      {item.name[language]}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {item.desc[language]}
                    </p>
                    <span className="mt-auto inline-flex items-center justify-center rounded-lg border border-slate-200 text-xs font-semibold text-[var(--color-navy)] px-4 py-2 group-hover:border-[var(--color-orange)] group-hover:text-[var(--color-orange)] transition-colors">
                      View Product
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}


        {/* More from this category */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 mb-16"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-navy)]">
                {t('product.moreFromCategory')}
              </h2>
              <Link
                to={`/products?category=${product.category}`}
                className="hidden sm:flex items-center gap-2 text-[var(--color-orange)] font-semibold hover:text-[var(--color-orange-hover)] transition-colors"
              >
                View All
                {dir === 'rtl' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </Link>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              Explore more {product.category.toLowerCase()} from Ameera Enterprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-medium text-[var(--color-orange)] mb-2 uppercase tracking-wider">
                      {relatedProduct.brand}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2 line-clamp-2">
                      {relatedProduct.name[language]}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mt-auto">
                      {relatedProduct.desc[language]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      <Testimonials />
      <FAQ />
      {/* Need more information */}
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="w-[93rem] mx-auto"
        >
          <div className="bg-[var(--color-navy)] rounded-3xl px-6 py-8 md:px-10 md:py-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Need more information?
              </h2>
              <p className="text-sm md:text-base text-slate-200 max-w-xl">
                Share your questions with our team or chat on WhatsApp for quick clarifications on specifications, compatibility, and pricing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-navy)] text-sm font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto"
              >
                <MessageCircle size={18} />
                Contact us
              </Link>
              <a
                href={whatsappMoreInfoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-colors w-full sm:w-auto"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp for details
              </a>
            </div>
          </div>
        </motion.section>
    </div>
  );
};

export default ProductDetails;
