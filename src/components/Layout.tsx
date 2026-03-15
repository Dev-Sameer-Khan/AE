import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useI18n } from "../context/I18nContext";
import { Menu, X, Globe, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Layout = () => {
  const { t, language, setLanguage, dir } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col overflow-hidden bg-slate-50 text-slate-900 ${dir === "rtl" ? "font-arabic" : "font-sans"}`}
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3 w-[93rem] max-[599px]:w-full rounded-md"
            : "bg-white/90 shadow-md py-5 w-full"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <img
              src="/logo.png"
              alt="Ameera Enterprises logo"
              className="w-10 h-10 rounded-lg"
              width={40}
              height={40}
              decoding="async"
            />
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
                  location.pathname === link.path
                    ? "text-[var(--color-orange)]"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 cursor-pointer text-sm font-medium transition-colors hover:text-[var(--color-orange)] text-slate-700"
            >
              <Globe size={16} />
              {language === "en" ? "العربية" : "English"}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? "text-slate-900" : "text-slate-900"}
              />
            )}
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
                    location.pathname === link.path
                      ? "text-[var(--color-orange)]"
                      : "text-slate-900"
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
                {language === "en"
                  ? "Switch to Arabic"
                  : "التبديل إلى الإنجليزية"}
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
      <footer className="bg-white  text-[var(--color-navy)] py-12 border-t border-black/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 max-[599px]:gap-4 md:grid-cols-5 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 z-50">
                <img
                  src="/logo.png"
                  alt="Ameera Enterprises logo"
                  className="w-10 h-10 rounded-lg"
                  width={40}
                  height={40}
                  decoding="async"
                />
                <span
                  className={`font-display font-bold text-xl tracking-tight`}
                >
                  Ameera Enterprises
                </span>
              </Link>
              <p className="text-sm max-w-md text-slate-400 mt-2">
                {t("footer.description")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-orange)]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/products?category=Engines"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Compressors"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Spare Parts"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Spare Parts"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-orange)]">
                {t("nav.products")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/products?category=Engines"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Engines
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Compressors"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Compressors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Spare Parts"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Spare Parts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products?category=Spare Parts"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    Filters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=" font-semibold mb-4 text-[var(--color-orange)]">
                {t("nav.contact")}
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[var(--color-orange)]" />
                  <Link
                    to="mailto:nazimkhan2821@gmail.com"
                    className="hover:text-[var(--color-orange)] transition-colors"
                  >
                    nazimkhan2821@gmail.com
                  </Link>
                </li>
                <div className="flex items-center flex-wrap gap-2">
                  <li className="flex items-center gap-2">
                    <Phone size={16} className="text-[var(--color-orange)]" />
                    <Link
                      to="tel:+916387258771"
                      className="hover:text-[var(--color-orange)] transition-colors"
                    >
                      +91 6387258771
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} className="text-[var(--color-orange)]" />
                    <Link
                      to="tel:+917905808995"
                      className="hover:text-[var(--color-orange)] transition-colors"
                    >
                      +91 7905808995
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} className="text-[var(--color-orange)]" />
                    <Link
                      to="tel:+966556031246"
                      className="hover:text-[var(--color-orange)] transition-colors"
                    >
                      +966 556031246
                    </Link>
                  </li>
                </div>
                <div className="flex items-center flex-wrap gap-2">
                  <li className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--color-orange)]" />
                    <Link
                      to="https://maps.app.goo.gl/2Y5thWjNQCz1HThh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-orange)] transition-colors"
                    >
                      Fatehpur, Uttar Pradesh, India
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--color-orange)]" />
                    <Link
                      to="https://maps.app.goo.gl/2Y5thWjNQCz1HThh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-orange)] transition-colors"
                    >
                      Jeddah, Saudi Arabia
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Ameera Enterprises.{" "}
              {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4 text-sm text-[var(--color-navy)]">
              <Link
                className="hover:text-[var(--color-orange)] transition-colors"
                to="/terms"
              >
                TERMS & CONDITIONS
              </Link>
              <Link
                className="hover:text-[var(--color-orange)] transition-colors"
                to="/privacy"
              >
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/916387258771"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 ${
          dir === "rtl" ? "left-8" : "right-8"
        } will-change-[transform,opacity] z-30 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center group`}
        title={t("nav.whatsapp")}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span
          className={`max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ${
            dir === "ar" ? "group-hover:mr-2" : "group-hover:ml-2"
          } font-semibold text-sm`}
        >
          {t("nav.whatsapp")}
        </span>
      </a>
    </div>
  );
};

export default Layout;
