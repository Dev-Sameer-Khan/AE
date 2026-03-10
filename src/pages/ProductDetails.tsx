import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { products } from '../data/products';
import { ArrowLeft, ArrowRight, MessageCircle, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import Seo from '../components/Seo';

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

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const whatsappMessage = `Hello Ameera Enterprises, I am interested in inquiring about ${product.name.en}.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <Seo
        title={`${product.name[language]} | Ameera Enterprises`}
        description={product.description[language]}
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
              className="relative h-[400px] lg:h-auto bg-slate-100"
            >
              <img
                src={product.image}
                alt={product.name[language]}
                className="w-full h-full object-cover"
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
                  {product.description[language]}
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
                  <MessageCircle size={24} />
                  {t('product.inquiry')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-navy)]">
                {t('product.related')}
              </h2>
              <Link
                to={`/products?category=${product.category}`}
                className="hidden sm:flex items-center gap-2 text-[var(--color-orange)] font-semibold hover:text-[var(--color-orange-hover)] transition-colors"
              >
                View More
                {dir === 'rtl' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </Link>
            </div>

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
                      {relatedProduct.description[language]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
