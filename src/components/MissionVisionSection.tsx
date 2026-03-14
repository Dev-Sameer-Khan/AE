import React from "react";
import { motion } from "motion/react";
import { useI18n } from "../context/I18nContext";
import { Target, Eye, Package, Globe2, Handshake } from "lucide-react";

const stats = [
  { key: "statInventory", value: "12.5k+", icon: Package },
  { key: "statYears", value: "11+", icon: Globe2 },
  { key: "statDeliveries", value: "1200+", icon: Handshake },
  { key: "statPartners", value: "45+", icon: Globe2 },
];

const MissionVisionSection = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl p-10 md:p-16 text-[var(--color-navy)] relative overflow-hidden">
          {/* <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)] rounded-full blur-[110px] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-orange)] rounded-full blur-[110px] opacity-20 -translate-x-1/2 translate-y-1/2" /> */}

          <div className="relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                {t("missionVision.title")}
              </h2>
              <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50 rounded-2xl p-8 backdrop-blur-sm border border-slate-100 hover:shadow transition-all duration-300 group"
              >
                <div className="w-16 h-16 group-hover:scale-125 transition-all duration-300  mb-6 rounded-2xl mx-auto lg:mx-0 bg-slate-50 flex items-center justify-center text-[var(--color-orange)]">
                  <Target size={36} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-center lg:text-left">
                  {t("missionVision.missionTitle")}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] text-center lg:text-left">
                  {t("missionVision.missionText")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 backdrop-blur-sm border border-slate-100 hover:shadow transition-all duration-300 group"
              >
                <div className="w-16 h-16 group-hover:scale-125 transition-all duration-300 mb-6 rounded-2xl mx-auto lg:mx-0 bg-slate-50 flex items-center justify-center text-[var(--color-orange)]">
                  <Eye size={36} />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-center lg:text-left">
                  {t("missionVision.visionTitle")}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px] text-center lg:text-left">
                  {t("missionVision.visionText")}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-5"
            >
              {stats.map(({ key, value, icon: Icon }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.08 * index }}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col items-center text-center hover:shadow transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl group-hover:scale-150 transition-all duration-300 bg-white/15 flex items-center justify-center text-[var(--color-orange)] mb-3">
                    <Icon size={22} />
                  </div>
                  <span className="text-2xl font-display font-bold leading-none mb-1">
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {t(`missionVision.${key}`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
