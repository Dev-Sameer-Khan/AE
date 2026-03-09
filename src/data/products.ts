export interface Product {
  id: string;
  name: { en: string; ar: string };
  brand: string;
  category: string;
  image: string;
  description: { en: string; ar: string };
  specs: Record<string, string>;
  featured?: boolean;
}

export const brands = [
  "Deutz", "Atlas Copco", "MACO Compressor", "BETICO Compressor", "Bobcat", "Cummins", "Perkins"
];

export const categories = [
  "Engines", "Compressors", "Spare Parts", "Maintenance Kits"
];

export const products: Product[] = [
  {
    id: "p1",
    name: { en: "Deutz TCD 2012 Engine", ar: "محرك دويتس TCD 2012" },
    brand: "Deutz",
    category: "Engines",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "High-performance water-cooled 4-cylinder inline engine with turbocharging and charge air cooling.",
      ar: "محرك عالي الأداء مبرد بالماء بـ 4 أسطوانات مع شحن توربيني وتبريد هواء الشحن."
    },
    specs: {
      "Power Output": "155 kW",
      "Speed": "2400 rpm",
      "Cylinders": "4",
      "Cooling": "Water"
    },
    featured: true
  },
  {
    id: "p2",
    name: { en: "Atlas Copco XAS 185", ar: "أطلس كوبكو XAS 185" },
    brand: "Atlas Copco",
    category: "Compressors",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Portable air compressor designed for reliability and efficiency in demanding environments.",
      ar: "ضاغط هواء محمول مصمم للموثوقية والكفاءة في البيئات الصعبة."
    },
    specs: {
      "Free Air Delivery": "185 cfm",
      "Working Pressure": "100 psi",
      "Engine": "Kubota",
      "Weight": "2180 lbs"
    },
    featured: true
  },
  {
    id: "p3",
    name: { en: "Cummins QSK60 Spare Parts Kit", ar: "طقم قطع غيار كمينز QSK60" },
    brand: "Cummins",
    category: "Spare Parts",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Complete overhaul kit for Cummins QSK60 engine, including pistons, rings, and gaskets.",
      ar: "طقم صيانة كامل لمحرك كمينز QSK60، يشمل المكابس والحلقات والجوانات."
    },
    specs: {
      "Compatibility": "QSK60 Series",
      "Components": "Pistons, Rings, Gaskets, Bearings",
      "Material": "OEM Standard",
      "Warranty": "1 Year"
    },
    featured: true
  },
  {
    id: "p4",
    name: { en: "Bobcat S650 Skid Steer Loader Parts", ar: "قطع غيار بوبكات S650" },
    brand: "Bobcat",
    category: "Spare Parts",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Genuine replacement parts for Bobcat S650, ensuring maximum uptime and performance.",
      ar: "قطع غيار أصلية لبوبكات S650، لضمان أقصى وقت تشغيل وأداء."
    },
    specs: {
      "Machine Type": "Skid Steer Loader",
      "Parts Available": "Hydraulics, Filters, Belts",
      "Quality": "Genuine OEM"
    }
  },
  {
    id: "p5",
    name: { en: "Perkins 1104 Series Engine Block", ar: "كتلة محرك بيركنز سلسلة 1104" },
    brand: "Perkins",
    category: "Engines",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Durable engine block for Perkins 1104 series, built to withstand heavy-duty applications.",
      ar: "كتلة محرك متينة لسلسلة بيركنز 1104، مصممة لتحمل التطبيقات الشاقة."
    },
    specs: {
      "Engine Series": "1104",
      "Material": "Cast Iron",
      "Configuration": "Inline 4"
    }
  },
  {
    id: "p6",
    name: { en: "MACO Industrial Compressor Unit", ar: "وحدة ضاغط صناعي ماكو" },
    brand: "MACO Compressor",
    category: "Compressors",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800",
    description: {
      en: "Heavy-duty industrial air compressor for continuous operation in manufacturing facilities.",
      ar: "ضاغط هواء صناعي شاق للتشغيل المستمر في مرافق التصنيع."
    },
    specs: {
      "Type": "Rotary Screw",
      "Power": "75 kW",
      "Max Pressure": "13 bar"
    },
    featured: true
  }
];
