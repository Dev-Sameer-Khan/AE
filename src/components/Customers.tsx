import React from "react";
import { useI18n } from "../context/I18nContext";

const PARTNERS = [
  { name: "PERKINS", region: "Global", logo: "/Perk.png" },
  { name: "VOLVO", region: "Americas", logo: "/Volvo.png" },
  { name: "CUMMINS", region: "Asia-Pacific", logo: "/Cum.png" },
  { name: "BETICO", region: "Europe", logo: "/Betico.png" },
  { name: "ATLAS COPRO", region: "Middle East", logo: "/Atlas.png" },
  { name: "HATZ DIESEL", region: "Global", logo: "/Hatz.png" },
  { name: "BOMAG", region: "Global", logo: "/BOMAG.png" },
  { name: "JCB", region: "Global", logo: "/JCB.png" },
  { name: "MILLER", region: "Global", logo: "/Miller.png" },
  { name: "KUBOTA", region: "Global", logo: "/Kubota.png" },
  { name: "BOBCAT", region: "Global", logo: "/Bobcat.png" },
  { name: "DYNAPAC", region: "Global", logo: "/Dynapac.png" },
];

const Team = [
  { name: "Ramz Al Tameer Est.", region: "Global", logo: "/cat.png" },
  { name: "Sumou AL Ebda Es.t", region: "Global", logo: "/sumou.png" },
];

const Customers: React.FC = () => {
  const { t, language, setLanguage, dir } = useI18n();
  const scrollItems = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto mb-10 max-[599px]:mb-6  px-6 text-center">
        {/* <span className="mb-4 max-[599px]:mb-0 block text-lg font-bold uppercase tracking-widest text-blue-500">
          Our Companies
        </span> */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--color-navy)] mb-4">
            {t("brands.title")}
            {/* Companies */}
          </h2>
          <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full mb-6" />
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto mb-10 max-[599px]:mb-6 max-[599px]:px-4 px-6 text-center max-[599px]:mt-0 mt-20">
        <span className="mb-4 max-[599px]:mb-0 block max-[599px]:text-2xl text-4xl font-bold uppercase text-blue-500">
          {t.trustedBy}
        </span>
        <h2 className="text-3xl max-[599px]:text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black tracking-tighter leading-none">
          {t.globalBrands}
        </h2>
      </div>

      {/* Scroller */}
      <div className="relative flex items-center overflow-hidden">
        {/* Gradient edges */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-white via-white/70 to-transparent z-10" /> */}

        <div className="animate-scroll flex whitespace-nowrap">
          {scrollItems.map((partner, i) => (
            <div
              key={i}
              className="inline-flex min-w-[220px] flex-col items-center justify-center px-12 max-[599px]:px-0 transition-all duration-300 hover:bg-white/5 hover:border-white/10 border border-transparent"
            >
              {/* Logo container */}
              <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden md:h-44 md:w-44">
                <img
                  src={partner.logo}
                  alt={`${partner.name} brand logo - ${partner.region}`}
                  className="aspect-square max-h-full max-w-full object-contain"
                />
              </div>

              {/* Region */}
              <span className="text-[var(--color-navy)] font-semibold">
                {partner.region}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 45s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Customers;
