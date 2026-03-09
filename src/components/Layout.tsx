import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import { Menu, X, Globe, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Layout = () => {
  const { t, language, setLanguage, dir } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${dir === 'rtl' ? 'font-arabic' : 'font-sans'}`}>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 w-[93rem] rounded-md' : 'bg-white/90 shadow-md py-5 w-full'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-[var(--color-navy)] rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
              AE
            </div>
            <span className={`font-display font-bold text-xl tracking-tight`}>
              Ameera Enterprises
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-orange)] ${
                  location.pathname === link.path ? 'text-[var(--color-orange)]' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--color-orange)] 'text-slate-700'
              }`}
            >
              <Globe size={16} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`border-b border-slate-100 pb-4 ${
                    location.pathname === link.path ? 'text-[var(--color-orange)]' : 'text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-900"
              >
                <Globe size={20} />
                {language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-slate-300 py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[var(--color-orange)] rounded flex items-center justify-center text-white font-display font-bold text-lg">
                  AE
                </div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  Ameera Enterprises
                </span>
              </Link>
              <p className="text-sm max-w-md text-slate-400">
                {t('footer.description')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('nav.products')}</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products?category=Engines" className="hover:text-[var(--color-orange)] transition-colors">Engines</Link></li>
                <li><Link to="/products?category=Compressors" className="hover:text-[var(--color-orange)] transition-colors">Compressors</Link></li>
                <li><Link to="/products?category=Spare Parts" className="hover:text-[var(--color-orange)] transition-colors">Spare Parts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t('nav.contact')}</h4>
              <ul className="space-y-2 text-sm">
                <li>info@ameeraenterprises.com</li>
                <li>+91 98765 43210</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Ameera Enterprises. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Ameera%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default Layout;
