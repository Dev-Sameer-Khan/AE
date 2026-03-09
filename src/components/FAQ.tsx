import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: {
      en: "What types of heavy equipment parts do you supply?",
      ar: "ما هي أنواع قطع غيار المعدات الثقيلة التي تقومون بتوريدها؟"
    },
    answer: {
      en: "We supply a wide range of parts including engines, compressors, hydraulic components, undercarriage parts, and maintenance kits for brands like Deutz, Atlas Copco, Bobcat, Cummins, and Perkins.",
      ar: "نحن نوفر مجموعة واسعة من الأجزاء بما في ذلك المحركات والضواغط والمكونات الهيدروليكية وأجزاء الهيكل السفلي وأطقم الصيانة لعلامات تجارية مثل دويتس وأطلس كوبكو وبوبكات وكمينز وبيركنز."
    }
  },
  {
    id: 2,
    question: {
      en: "Do you ship internationally?",
      ar: "هل تقومون بالشحن دوليًا؟"
    },
    answer: {
      en: "Yes, we specialize in the India-Gulf-Turkey trade corridor and can arrange shipping to most international destinations with reliable logistics partners.",
      ar: "نعم، نحن متخصصون في ممر التجارة بين الهند والخليج وتركيا ويمكننا ترتيب الشحن إلى معظم الوجهات الدولية مع شركاء لوجستيين موثوقين."
    }
  },
  {
    id: 3,
    question: {
      en: "Are your spare parts genuine OEM?",
      ar: "هل قطع الغيار الخاصة بكم أصلية من الشركة المصنعة؟"
    },
    answer: {
      en: "We offer both genuine OEM parts and high-quality aftermarket alternatives, clearly labeled so you can choose the best option for your budget and requirements.",
      ar: "نحن نقدم كلاً من قطع الغيار الأصلية والبدائل عالية الجودة لما بعد البيع، مع وضع علامات واضحة عليها حتى تتمكن من اختيار الخيار الأفضل لميزانيتك ومتطلباتك."
    }
  },
  {
    id: 4,
    question: {
      en: "How can I get a quote for a specific part?",
      ar: "كيف يمكنني الحصول على عرض سعر لقطعة معينة؟"
    },
    answer: {
      en: "You can browse our products and click 'Inquiry Now' to send us a WhatsApp message, or use the contact form on our website. Please provide the part number or machine details for a faster response.",
      ar: "يمكنك تصفح منتجاتنا والنقر فوق 'استفسر الآن' لإرسال رسالة واتساب إلينا، أو استخدام نموذج الاتصال على موقعنا. يرجى تقديم رقم القطعة أو تفاصيل الجهاز للحصول على استجابة أسرع."
    }
  },
  {
    id: 5,
    question: {
      en: "Do you provide maintenance services?",
      ar: "هل تقدمون خدمات الصيانة؟"
    },
    answer: {
      en: "Yes, we offer comprehensive maintenance solutions and technical support for diesel machines and heavy equipment, primarily in our core operational regions.",
      ar: "نعم، نحن نقدم حلول صيانة شاملة ودعمًا فنيًا لآلات الديزل والمعدات الثقيلة، بشكل أساسي في مناطق عملياتنا الأساسية."
    }
  }
];

const FAQ = () => {
  const { t, language } = useI18n();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

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
            {t('faq.title')}
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
            {t('faq.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-[var(--color-navy)] pr-8">
                  {faq.question[language]}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-[var(--color-orange)] transition-transform duration-300 flex-shrink-0 ${openId === faq.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer[language]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
