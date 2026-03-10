import React from 'react';
import { motion } from 'motion/react';
import { useI18n } from '../context/I18nContext';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: { en: "Ahmed Al-Farsi", ar: "أحمد الفارسي" },
    company: { en: "Gulf Construction Co.", ar: "شركة الخليج للإنشاءات" },
    text: { 
      en: "Ameera Enterprises has been our go-to supplier for Deutz engine parts. Their reliability and quick delivery have saved us from costly downtime multiple times.",
      ar: "كانت أميرة للمشاريع موردنا المعتمد لقطع غيار محركات دويتس. لقد أنقذتنا موثوقيتهم وتسليمهم السريع من فترات التوقف المكلفة عدة مرات."
    },
    rating: 5
  },
  {
    id: 2,
    name: { en: "Rajesh Kumar", ar: "راجيش كومار" },
    company: { en: "Mumbai Heavy Industries", ar: "مومباي للصناعات الثقيلة" },
    text: {
      en: "The quality of the Atlas Copco compressor parts we received was exceptional. Their technical support team is highly knowledgeable and always ready to help.",
      ar: "كانت جودة قطع غيار ضاغط أطلس كوبكو التي تلقيناها استثنائية. فريق الدعم الفني لديهم على دراية عالية ومستعد دائمًا للمساعدة."
    },
    rating: 5
  },
  {
    id: 3,
    name: { en: "Mehmet Yilmaz", ar: "محمد يلماز" },
    company: { en: "Eurasia Logistics", ar: "أوراسيا للخدمات اللوجستية" },
    text: {
      en: "Finding genuine Bobcat parts used to be a challenge until we partnered with Ameera. Excellent service, competitive pricing, and authentic products.",
      ar: "كان العثور على قطع غيار بوبكات الأصلية يمثل تحديًا حتى عقدنا شراكة مع أميرة. خدمة ممتازة وأسعار تنافسية ومنتجات أصلية."
    },
    rating: 4
  }
];

const Testimonials = () => {
  const { t, language } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-[var(--color-navy)] mb-6"
          >
            {t('testimonials.title')}
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
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-50 p-8 rounded-3xl relative border border-slate-100"
            >
              <Quote className="absolute top-8 right-8 text-slate-200 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text[language]}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[language].charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-navy)]">{testimonial.name[language]}</h4>
                  <p className="text-sm text-slate-500">{testimonial.company[language]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
