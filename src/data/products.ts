export interface Product {
  id: string;
  name: { en: string; ar: string };
  brand?: string;
  category: string;
  image: string;
  desc: { en: string; ar: string };
  specs: Record<string, string>;
  featured?: boolean;
}

export const brands = [
  "Deutz", "Atlas Copco", "MACO Compressor", "BETICO Compressor", "Bobcat", "Cummins", "Perkins"
];

export const categories = [
  "Engines", "Compressors", "Spare Parts", "Maintenance Kits"
];

export const PRODUCTS: any[] = [
  {
    id: "1",
    name: { en: "1000 SERIES LIFT PUMP", ar: "مضخة رفع وقود سلسلة 1000" },
    brand: "Perkins",
    category: "Engines",
    desc: { en : "Primary fuel pump to move the fuel from the tank into the engine fuel system. Designed to ensure the correct level of flow and pressure into the fuel system, correct flow rate and pressure are critical to prevent the issues of cavitation and vaporization that can lead to implosion and damage to surfaces. Perkins fuel pumps are carefully selected during our engine design to provide the pressure and flow required for the whole fuel system and tested for many thousands of running hours to ensure smooth running and maximum performance and power. Uses high-performance seals to ensure long life, and deliver correct pressure whatever the conditions.", ar : "مضخة الوقود الرئيسية لنقل الوقود من الخزان إلى نظام وقود المحرك. صُممت هذه المضخة لضمان مستوى التدفق والضغط المناسبين لنظام الوقود، حيث يُعدّ معدل التدفق والضغط الصحيحان أمرًا بالغ الأهمية لمنع مشاكل التكهف والتبخر التي قد تؤدي إلى انفجار داخلي وتلف الأسطح. يتم اختيار مضخات وقود بيركنز بعناية فائقة أثناء تصميم محركاتنا لتوفير الضغط والتدفق المطلوبين لنظام الوقود بأكمله، وتُختبر لآلاف الساعات التشغيلية لضمان التشغيل السلس وأقصى أداء وقوة. تستخدم هذه المضخة موانع تسرب عالية الأداء لضمان عمر طويل، وتوفير الضغط الصحيح مهما كانت الظروف."},
    specs: {
      spec1: "Genuine Perkins pump",
      spec2: "Optimized flow & pressure",
      spec3: "High-performance seals",
      spec4: "Thousands of hours tested",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667821/ULPK0002_lzkqnu.jpg",
    ],
    featured: true,
  },
  {
    id: "2",
    name: { en: "Engine Overhaul Servicer Kit", ar: "مجموعة خدمة إصلاح المحرك" },
    category: "Engine",
    brand: "Perkins",
    desc:{ en : "An overhaul will extend your engine’s life many years to come by returning performance to like-new conditions. It is a substantially better return on investment than trading in your old engine for a brand-new one", ar : "سيعمل إجراء إصلاح شامل لمحركك على إطالة عمره لسنوات عديدة قادمة، وذلك من خلال استعادة أدائه إلى حالة تضاهي المحرك الجديد تماماً. ويُعد هذا الخيار عائداً على الاستثمار أفضل بكثير من استبدال محركك القديم بآخر جديد كلياً."},
    specs: {
      spec1: "Comprehensive kit for major engine rebuild",
      spec2: "Restores original engine performance",
      spec3: "Components for 1000 & 4.236 gear engines",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667831/overhaul-kit-_iuzjkg.jpg",
    ],
    featured: true,
  },
  {
    id: "3",
    name: { en: "Ats Diesel Engine Spare Parts", ar: "قطع غيار محركات ديزل ATS" },
    category: "Engine",
    brand: "Perkins",
    desc: {en : "diesel engines (Perkins, Deutz, Lister, Lombardini, Isuzu, Cummins) – agricultural tractors (Massey Ferguson,Ford New Holland, Fiat, Universal / Romanian, Belarus, John Deere and Zetor)– commercial vehicles (Bedford J6, BMC Leyland, Mercedes, Scania, Volvo, Caterpillar, Iveco and JCB).", ar : "محركات الديزل (Perkins, Deutz, Lister, Lombardini, Isuzu, Cummins) – الجرارات الزراعية (Massey Ferguson, Ford New Holland, Fiat, Universal / Romanian, Belarus, John Deere, Zetor) – المركبات التجارية (Bedford J6, BMC Leyland, Mercedes, Scania, Volvo, Caterpillar, Iveco, JCB)." },
    specs: {
      spec1: "Fits Perkins, Deutz, Lister & more",
      spec2: "For tractors, engines & commercial vehicles",
      spec3: "Assorted parts for key systems",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667830/perkins_parts_wq2ivw.jpg",
    ],
    feature : true
  },
  {
    id: "4",
    name: { en: "Perkins Powerpart Ecoplus", ar: "مجموعة باور بارت ايكوبلس من بيركنز" },
    category: "Engine",
    brand : "Perkins",
    desc: {en :'The collection includes air, oil, and fuel filters designed for Perkins diesel engines. These genuine parts are engineered to capture harmful contaminants and ensure engine longevity. The filters feature the "ecoplus" branding,indicating a specific range of components. A starter motor assembly is also visible among the filters. ', ar : 'تتضمن هذه المجموعة فلاتر للهواء والزيت والوقود، صُممت خصيصاً لمحركات الديزل من طراز "بيركنز" (Perkins). وقد صُممت هذه القطع الأصلية هندسياً لاحتجاز الملوثات الضارة وضمان إطالة العمر الافتراضي للمحرك. وتتميز هذه الفلاتر بعلامة "ecoplus" التجارية، مما يشير إلى أنها تنتمي إلى نطاق محدد من المكونات. كما يظهر أيضاً بين الفلاتر طقم وحدة تشغيل المحرك (بادئ التشغيل).'},
    specs: {
      spec1: "Air, oil & fuel filter set",
      spec2: "Advanced contaminant filtration",
      spec3: "'Ecoplus' series genuine Perkins parts",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-Spares-White_u6outz.jpg",
    ],
    feature : true
  },
  {
    id: "5",
    name: { en: "Perkins Piston and Ring Kit", ar: "مجموعة مكبس وحلقات بيركنز" },
    category: "Engine",
    brand : "Perkins",
    desc: { en :"Function: Creates a seal between the piston and the cylinder wall, preventing gas from escaping and regulating oil consumption. Components: Typically includes the top compression ring, intermediate compression ring, and oil control ring. Material: Made from durable, high-quality materials to withstand high temperatures and pressures. ", ar : "الوظيفة: تُنشئ حاجزاً مانعاً للتسرب بين المكبس وجدار الأسطوانة، مما يحول دون تسرب الغاز وينظم استهلاك الزيت. المكونات: تتألف عادةً من حلقة الضغط العلوية، وحلقة الضغط الوسطى، وحلقة التحكم في الزيت. المادة: تُصنع من مواد متينة وعالية الجودة لضمان قدرتها على تحمل درجات الحرارة والضغوط المرتفعة." },
    specs: {
      spec1: "Includes piston, top/intermediate/oil rings",
      spec2: "Premium steel material",
      spec3: "For high-temp & high-pressure operation",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/piston_perkins_tmseej.avif",
    ],
    feature : true
  },
  {
    id: "6",
    name: { en: "Perkins/Caterpillar engine piston", ar: "مكبس محرك بيركنز/كاتربيلر" },
    category: "Engine",
    brand : "Perkins",
    desc: { en :"Diameter: 100mm STD, Rings: 3.5T x 2.5 x 4, Pin: 38mm x 83mm, Total Height: 108mm, Compression Height: 70.00mm", ar : "القطر: 100 مم (قياسي)، الحلقات: 3.5T × 2.5 × 4، المسمار: 38 مم × 83 مم، الارتفاع الكلي: 108 مم، ارتفاع الانضغاط: 70.00 مم."},
    specs: {
      spec1: "Diameter: 100mm STD",
      spec2: "Rings: 3.5T x 2.5 x 4",
      spec3: "Pin: 38mm x 83mm",
      spec4: "Total height: 108mm",
      spec5: "Compression height: 70mm",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667829/Perkins-1004_sxpze3.webp",
    ],
    feature : true
  },
  {
    id: "7",
    name: { en: "Perkins Piston & Rings kit", ar: "مجموعة مكبس وحلقات بيركنز" },
    category: "Engine",
    brand : "Perkins",
    desc:{ en: "Designed for various Perkins diesel engines, including models 404c-22 and 404D-22. The kit includes the piston and a set of piston rings. Piston rings create a seal between the piston and cylinder wall, minimizing gas loss and regulating oil consumption. The part is used in industrial, agricultural, construction, material handling, marine, and power generation markets", ar : "صُممت هذه القطعة لتلائم مجموعة متنوعة من محركات الديزل من طراز Perkins، بما في ذلك الطرازين 404c-22 و404D-22. وتتضمن هذه المجموعة المكبس وطقمًا من حلقات المكبس؛ حيث تعمل حلقات المكبس على تشكيل إحكام مانع للتسرب بين المكبس وجدار الأسطوانة، مما يقلل من تسرب الغازات وينظم استهلاك الزيت. وتُستخدم هذه القطعة في قطاعات الصناعة، والزراعة، والإنشاءات، ومناولة المواد، والقطاع البحري، وتوليد الطاقة."},
    specs: {
      spec1: "Kit for Perkins 404c-22/404D-22",
      spec2: "Complete piston w/ rings set",
      spec3: "For industrial/tractor/marine engines",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667828/115017491_jd0ltb.jpg",
    ],
    feature : true
  },
  {
    id: "8",
    name: { en: "coolant thermostat assembly", ar: "مجمع منظم حرارة سائل التبريد" },
    category: "Engine",
    brand : "Perkins",
    desc: { en :"It is made from a durable aluminum alloy. It is compatible with various Perkins engine models, including the 1103, 1104, and 1106 series. The component manages the engine's cooling system temperature by controlling the flow of coolant. It is also used in some Massey Ferguson tractors. ", ar : "صُنِع هذا المكون من سبيكة ألومنيوم متينة، وهو يتوافق مع طرازات متنوعة من محركات Perkins، بما في ذلك سلاسل 1103 و1104 و1106. ويقوم هذا المكون بإدارة درجة حرارة نظام تبريد المحرك من خلال التحكم في تدفق سائل التبريد. كما يُستخدم أيضاً في بعض جرارات Massey Ferguson."},
    specs: {
      spec1: "Aluminum alloy body",
      spec2: "Controls coolant flow in Perkins 1103/1104/1106",
      spec3: "For precise engine temp management",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667827/thermostat_i2i3os.jpg",
    ],
    feature : true
  },
  {
    id: "9",
    name: { en: "full engine gasket set", ar: "طقم حشوات كامل للمحرك" },
    category: "Engine",
    brand : "Perkins",
    desc: { en : "Includes all necessary gaskets and seals for a complete engine overhaul, covering both upper and lower engine components. Designed to meet or exceed original equipment (OE) standards for a precise fit and lasting performance.Essential for major engine work or a full rebuild. The specific part number for this set is T403322 or U5LC1106D. ", ar : "تتضمن هذه المجموعة كافة الحشيات ومانعات التسرب اللازمة لإجراء إصلاح شامل للمحرك، لتغطي بذلك كلاً من المكونات العلوية والسفلية للمحرك. وقد صُممت هذه القطع لتلبي معايير المعدات الأصلية (OE) أو تتفوق عليها، مما يضمن دقة التوافق واستدامة الأداء. وتُعد هذه المجموعة عنصراً أساسياً عند إجراء أعمال صيانة كبرى للمحرك أو عند إعادة بنائه بالكامل. رقم القطعة المحدد لهذه المجموعة هو T403322 أو U5LC1106D."},
    specs: {
      spec1: "Complete upper & lower gasket set",
      spec2: "OE fit & performance",
      spec3: "For overhaul/full rebuild",
      spec4: "PN: T403322/U5LC1106D",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667826/Full-Set-Gasket-C6-6_muds0m.avif",
    ],
    feature : true
  },
  {
    id: "10",
    name: { en: "Perkins 2654403 Oil Filter", ar: "فلتر زيت بيركنز 2654403" },
    category: "Engine",
    brand : "Perkins",
    desc: {en : "It has an external diameter of 96 mm. It has a length of 130.9 mm. It is designed to capture contaminants and reduce wear and tear on Perkins engine components. ", ar : "يبلغ قطره الخارجي 96 مم، وطوله 130.9 مم. وقد صُمم لالتقاط الملوثات والحد من التآكل في مكونات محرك Perkins." },
    specs: {
      spec1: "Diameter: 96mm",
      spec2: "Length: 130.9mm",
      spec3: "High contaminant holding capacity",
      spec4: "OE for Perkins 2654403",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/filter_mkaltp.jpg",
    ],
    feature : true
  },
  {
    id: "11",
    name: { en: "FG Wilson diesel generator set", ar: "مجموعة مولدات ديزل FG ويلسون" },
    category: "Engine",
    brand : "Perkins",
    desc: {en: "Brand: FG Wilson Engine: Powered by a fuel-efficient Perkins engine Application: Suitable for both standby and prime power applications Features: Engineered for dependable performance, durability, and low emissions Power Range: Available in various power outputs ranging from 7.5 kVA up to 220 kVA and beyond, depending on the specific model ", ar : "العلامة التجارية: FG Wilson | المحرك: يعمل بمحرك Perkins عالي الكفاءة في استهلاك الوقود | التطبيق: مناسب للاستخدام في تطبيقات الطاقة الاحتياطية والطاقة الأساسية على حد سواء | الميزات: صُمم لضمان أداء موثوق، ومتانة عالية، وانبعاثات منخفضة | نطاق القدرة: متوفر بقدرات خرج متنوعة تتراوح من 7.5 كيلو فولت أمبير (kVA) وصولاً إلى 220 كيلو فولت أمبير وما فوق، وذلك حسب الطراز المحدد."},
    specs: {
      spec1: "FG Wilson gen-set, Perkins engine",
      spec2: "Power range: 7.5–220 kVA+",
      spec3: "Designed for standby/prime use",
      spec4: "Low emissions",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667825/genrator_kxfpxo.jpg",
    ],
    feature : true
  },
  {
    id: "12",
    name: { en: "Perkins piston ring kit", ar: "مجموعة حلقات المكبس بيركنز" },
    category: "Engine",
    brand : "Perkins",
    desc: {en : "Function: They create a seal between the piston and the cylinder walls, preventing gas from escaping and egulating oil consumption. Components: The set typically includes a top compression ring, an intermediate compression ring, and an oil control ring. Material: Made from materials like cast iron or steel designed to resist wear, heat, and pressure. Usage: They are used in various Perkins diesel engines for industrial, agricultural, and power generation applications. ", ar : 'الوظيفة: تعمل هذه الحلقات على تكوين إحكام مانع للتسرب بين المكبس وجدران الأسطوانة، مما يحول دون تسرب الغاز وينظم استهلاك الزيت. المكونات: تتضمن المجموعة عادةً حلقة ضغط علوية، وحلقة ضغط وسطى، وحلقة للتحكم في الزيت. المادة: تُصنع هذه الحلقات من مواد مثل الحديد الزهر أو الفولاذ، وهي مصممة خصيصاً لمقاومة التآكل والحرارة والضغط. الاستخدام: تُستخدم هذه الحلقات في مجموعة متنوعة من محركات الديزل من طراز "بيركنز" (Perkins)، وذلك في التطبيقات الصناعية والزراعية وتطبيقات توليد الطاقة.'},
    specs: {
      spec1: "Incl. compression & oil rings",
      spec2: "Fits Perkins engines",
      spec3: "Wear/heat/pressure-resistant cast iron/steel",
    },
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/ring01_gy5pyp.jpg",
    ],
    feature : true
  },
  {
    id: "13",
    name: { en: "Perkins 1200 series industrial diesel engine", ar: "محرك ديزل صناعي بيركنز سلسلة 1200" },
    category: "Engine",
    brand : "Perkins",
    desc: { en : "Perkins engines are known for their durability and reliability, powering various industrial and construction applications. The 1204E-E44TA model features a 4.4-liter displacement, 4 cylinders, and a maximum torque of 560 Nm. The engine is designed to meet various emissions standards, including EU Stage IIIB/U.S. EPA Tier 4 Interim equivalents.Electronically controlled engines in this series deliver precise fuel injection based on the load applied. ", ar : "تشتهر محركات Perkins بمتانتها وموثوقيتها، حيث تعمل على تشغيل مجموعة متنوعة من التطبيقات الصناعية وتطبيقات البناء. ويتميز طراز 1204E-E44TA بسعة إزاحة تبلغ 4.4 لتر، و4 أسطوانات، وعزم دوران أقصى يبلغ 560 نيوتن-متر. وقد صُمم هذا المحرك ليلبي مختلف معايير الانبعاثات، بما في ذلك المعايير المكافئة لمعايير الاتحاد الأوروبي (EU Stage IIIB) ومعايير وكالة حماية البيئة الأمريكية (U.S. EPA Tier 4 Interim). كما توفر المحركات التي تعمل بنظام التحكم الإلكتروني ضمن هذه السلسلة حقناً دقيقاً للوقود بناءً على الحمل المطبق عليها."},
    specs: {
      spec1: "Model: 1204E-E44TA",
      spec2: "4.4L, 4-cyl",
      spec3: "Max torque: 560Nm",
      spec4: "Meets EU Stage IIIB/US Tier 4i",
      spec5: "Electronically controlled",
    },
    image: [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/engine_perkins_eti7uj.jpg",
    ],
    feature : true
  },
  {
    id: "14",
    name: { en: "Perkins C4.4 engine piston", ar: "مكبس محرك بيركنز C4.4" },
    category: "engine",
    desc: "Material: Forged aluminum alloy with heat-treated crown Diameter: OEM standard bore size for the Perkins C4.4 engine Piston Pin: Included; floating type with circlips Ring Grooves: Pre-machined with hardened steel ring inserts",
    specs: {
      spec1: "Forged aluminum piston",
      spec2: "Heat-treated crown",
      spec3: "OEM C4.4 bore",
      spec4: "Includes pin & circlips, steel ring grooves",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667823/piston_62_ujmnay.jpg",
    ]
  },
  {
    id: "15",
    name: { en: "Mechanical fuel lift pump", ar: "مضخة رفع وقود ميكانيكية" },
    category: "engine",
    desc: "It is compatible with a range of engines, including certain Perkins and John Deere models. The pump is designed to resist fuel corrosion with a premium cast aluminum housing and quality diaphragm materials. It is a direct-fit replacement part designed for easy bolt-on installation. A mounting gasket is included for proper sealing and a hassle-free installation",
    specs: {
      spec1: "Cast aluminum body",
      spec2: "Fuel-resistant diaphragm",
      spec3: "Direct-fit, includes gasket",
      spec4: "For Perkins & John Deere",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667822/fuel_lift_pump_02_yiblxx.jpg",
    ]
  },
  {
    id: "16",
    name: { en: "Perkins water pump and gasket set", ar: "مجموعة طرمبة ماء وحشية بيركنز" },
    category: "engine",
    desc: "The water pump is a critical component for engine cooling systems. The included gasket has the OEM number 3682A011. These parts are compatible with Perkins 1100 Series engines, specifically models like the 1103 and 1104. The gasket ensures a secure seal to prevent coolant leaks. ",
    specs: {
      spec1: "High-flow water pump",
      spec2: "OEM gasket 3682A011 included",
      spec3: "For Perkins 1100 Series (1103/1104)",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667820/water_pump_bqvybm.jpg",
    ]
  },
  {
    id: "17",
    name: { en: "ATS International diesel engine parts", ar: "قطع غيار محركات ديزل ATS انترناشونال" },
    category: "engine",
    desc: "The components are designed for heavy-duty applications in trucks, buses, agricultural tractors, and power generators. ATS International supplies premium quality diesel engine and agricultural tractor parts to Original quipment Manufacturers and aftermarket distributors globally. Key features include high durability, precision engineering, and performance under pressure. The parts are engineered to meet OE (Original Equipment) quality standards. ",
    specs: {
      spec1: "OE-quality parts",
      spec2: "Heavy-duty design",
      spec3: "Precision engineering",
      spec4: "Engineered for trucks, tractors, generators",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/Copy_of_perkins_parts_gvkrjn.jpg",
    ]
  },
  {
    id: "18",
    name: { en: "400 series Perkins engines water pump", ar: "طرمبة ماء لمحركات بيركنز 400 سيريز" },
    category: "engine",
    desc: "Part Numbers: U45010062, 145010060, 145010070, and 145010061. Function: Circulates coolant to regulate engine temperature. Compatibility: Fits Perkins engine models 403D-15, 403D-15T, 404D-15, 404D-22, 404D-22T, 404D-22TA, 403D-17, and 404C-22T. Contents: Includes the pump assembly and a gasket for installation. Material: Constructed with high-quality, durable materials designed to withstand high temperatures and pressure. ",
    specs: {
      spec1: "Pump+gasket",
      spec2: "For Perkins 400 Series (403D/404D)",
      spec3: "High-temp materials",
      spec4: "PN: U45010062, 145010060/70/61",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667819/water_pump_404_faypgc.jpg",
    ]
  },
  {
    id: "19",
    name: { en: "Caterpillar engine overhaul kit", ar: "مجموعة إصلاح محرك كاتربيلر" },
    category: "engine",
    subcategory: "caterpiller",
    desc: "The kit includes essential components for rebuilding a diesel engine, such as pistons, cylinder liners, valves, and gaskets. It is designed for various Caterpillar engine models, including the 3306. The components are made from durable materials like aluminum alloy and cast iron to withstand high pressure and thermal loads. Overhaul kits help restore engine performance, efficiency, and longevity. ",
    specs: {
      spec1: "Complete CAT engine overhaul set",
      spec2: "Incl. pistons, liners, valves, gaskets",
      spec3: "Fits 3306 & others",
      spec4: "Heavy-duty materials",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667803/cat_oh_mpmfnx.avif",
    ]
  },
  {
    id: "20",
    name: { en: "Caterpiller set of pistons", ar: "طقم مكابس كاتربيلر" },
    category: "engine",
    subcategory: "caterpiller",
    desc: "Part Number: 329-4510 Engine Type: Suitable for Caterpillar C18 diesel engines and generator sets Material: Forged from premium aerospace-grade aluminum and features proprietary coatings Features: Optimized for high-flow cylinder heads and camshafts, designed for improved thermal stability ",
    specs: {
      spec1: "Set for CAT C18",
      spec2: "Forged aerospace aluminum",
      spec3: "Proprietary coatings",
      spec4: "PN: 329-4510",
      spec5: "High-flow, thermally stable",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/-329-4510_tmddfn.webp",
    ]
  },
  {
    id: "21",
    name: { en: "Caterpillar engine piston kit", ar: "مجموعة مكبس محرك كاتربيلر" },
    category: "engine",
    subcategory: "caterpiller",
    desc: "The kit includes the piston body, a piston pin (also called a wrist pin), and two circlips. Piston kits are designed to create a seal, compress the air-fuel mixture, and transfer force to the crankshaft. The parts in the image appear to be new aftermarket or replacement parts designed to meet or exceed OEM specifications. Specific part numbers can vary depending on the exact engine model (e.g., C4.4T/Ta, C7.1, 3406). These parts are crucial for smooth and powerful engine operation. ",
    specs: {
      spec1: "Piston, pin, circlips kit",
      spec2: "For CAT C4.4T, C7.1, 3406",
      spec3: "Aftermarket/OEM spec",
      spec4: "Compression seal & durability",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667802/c9_mjl27z.jpg",
    ]
  },
  {
    id: "22",
    name: { en: "Caterpiller Engine Water Pump", ar: "طرمبة ماء محرك كاتربيلر" },
    category: "engine",
    subcategory: "caterpiller",
    desc: "It is a direct replacement part. Compatible OEM part numbers include 352-0211, 10R0484, and 161-5719. It circulates coolant to prevent the engine from overheating. The pump comes complete with an impeller drive gear and companying gaskets/O-rings. ",
    specs: {
      spec1: "Water pump w/ impeller drive gear",
      spec2: "Includes gaskets/O-rings",
      spec3: "For CAT 352-0211, 10R0484, 161-5719",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/water_pumpc15_jnrcqh.jpg",
    ]
  },
  {
    id: "23",
    name: { en: "Caterpiller diesel engine pistons", ar: "مكابس ديزل كاتربيلر" },
    category: "rubberCoupling",
    desc: "The pistons are standard size and made of high-quality, high-strength alloy to withstand extreme temperatures and pressures. They feature a standard design with grooves for piston rings and a central bore for a piston pin. The surface has a polished finish. These parts are designed for use in various applications, including excavators, generators, and tractors. ",
    specs: {
      spec1: "Standard size",
      spec2: "High-strength alloy",
      spec3: "Includes ring grooves & pin bore",
      spec4: "Polished finish",
      spec5: "For industrial/agri use",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667801/3406_crtqdg.jpg",
    ]
  },
  {
    id: "24",
    name: { en: "Caterpillar engine parts kit", ar: "مجموعة أجزاء محرك كاتربيلر" },
    category: "rubberCoupling",
    desc: "Brand: Caterpillar (CAT) Usage: Used in diesel engines for applications such as generators, industrial machinery, and construction equipment Components: The image displays various parts, including cylinder liners, pistons, piston rings, and pins Packaging: Components are packaged in distinctive yellow and black Caterpillar-branded boxes and plastic sleeves ",
    specs: {
      spec1: "Kit incl. liners, pistons, rings, pins",
      spec2: "Genuine CAT packaging",
      spec3: "For diesel engine overhaul",
      spec4: "Industrial/constr. use",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/CAT-Engine-Spare-Parts_bbdpuk.jpg",
    ]
  },
  {
    id: "25",
    name: { en: "3306 and 3304 SERIES WATER PUMP", ar: "طرمبة ماء سلسلة 3306 و3304" },
    category: "rubberCoupling",
    desc: "It is compatible with various heavy-duty machinery, including loaders and excavators. It circulates coolant to maintain optimal engine operating temperature. It is designed as a direct replacement for OEM part numbers like 2P0661, 172-7767, and 2W8001. The pump features a helical cut gear with 33 cogs. ",
    specs: {
      spec1: "Direct-fit pump",
      spec2: "Fits loaders/excavators",
      spec3: "33-cog helical gear",
      spec4: "For CAT 2P0661, 172-7767, 2W8001",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/waterpump3406_tgb4jh.avif",
    ]
  },
  {
    id: "26",
    name: { en: "diesel engine fuel injectors", ar: "حاقنات وقود لمحركات الديزل" },
    category: "rubberCoupling",
    desc: "Function: They are responsible for delivering a precise amount of atomized fuel into the engine's combustion hamber at the appropriate time. Types: The image shows examples including Unit Injectors (UI) and Common Rail Injectors. Benefits: High-pressure injection systems improve fuel efficiency, reduce emissions, and enhance engine performance. Compatibility: Specific part numbers such as 127-8209, 7E6408, and 111-3718 are compatible with different CAT engine models like the 3116, 3508, 3512, and 3516. System: Some operate using mechanical actuation, while others, like Hydraulic Electronic Unit Injectors (HUEI), use high-pressure engine oil to fire the injector. ",
    specs: {
      spec1: "High-pressure injectors (UI, CR)",
      spec2: "Fits CAT 3116, 3508, 3512, 3516",
      spec3: "Atomized fuel delivery",
      spec4: "OEM PNs: 127-8209+",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768667800/inject_o0vh5a.avif",
    ]
  },
  // ... rest of products unchanged but specs as an array as above ...
  {
    id: "122",
    name: { en: "flexible rubber coupling", ar: "وصلـة مطاطية مرنة" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a flexible rubber coupling, compatible with part numbers 48HE D48407, D-48407, 1604076100, and 1604-0761-00. It is designed as a replacement for Centa Bowex, Atlas Copco, and KTR RHEINE air compressors. The coupling is made from high-quality materials to ensure reliable performance. It is typically used in various Atlas Copco models, such as the XAS series of portable compressors. The product has stable characteristics and high reliability for industrial applications. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/oxbmyliaygrfjf43bsol_gz5mgg.jpg",
    ]
  },
  {
    id: "123",
    name: { en: "air compressor flexible coupling element", ar: "عنصر وصلة مطاطية لضاغط الهواء" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an air compressor flexible coupling element, a component used to connect motor and compressor shafts. Function: It transmits torque while accommodating minor misalignments, absorbing shocks and vibrations to protect connected machinery. Material: Typically made from a durable elastic material, such as rubber. Part Numbers: Similar items are associated with part numbers like 1604-0761-00, 46492955, and 22509699. Compatibility: They are compatible with various brands of air compressors, including Atlas Copco, Ingersoll Rand, and Kaeser. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673872/ltiq1emwbz7uesyxufmm_xyzxf2.jpg",
    ]
  },
  {
    id: "124",
    name: { en: "fan blade for an air compressor", ar: "ريشة مروحة لضاغط الهواء" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a fan blade for an air compressor, likely an Atlas Copco model. Usage: Used in industrial screw air compressors for cooling. Blades: Features 9 blades. Material/Color: The blades are typically made of plastic and are white or off-white in color. Compatibility: Specific part numbers fit various models, such as 1613745400 or 1613674900 for Atlas Copco air compressors. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673870/fan_afhypq.jpg",
    ]
  },
  {
    id: "125",
    name: { en: "excavator coupling plate rubber", ar: "لوح وصلة مطاطية للحفارات" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an excavator coupling plate rubber, also known as a rubber coupling or flexible clutch. Function: It is used in excavators to connect the engine to the hydraulic pump, allowing for flexibility and absorbing shock. Material: Made from premium, impact-resistant rubber. Compatibility: This specific style (likely 45H or 7Y-0460) fits various Hitachi and Caterpillar excavator models. Durability: Designed for high performance and a long working life. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673868/excavtor_ejwfzu.jpg",
    ]
  },
  {
    id: "126",
    name: { en: "flexible rubber hydraulic pump coupling", ar: "وصلة مطاطية مرنة لمضخة هيدروليكية" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a flexible rubber hydraulic pump coupling, commonly used in excavators and heavy machinery. It is designed to transmit torque and protect hydraulic pump components by absorbing shocks and dampening vibration. The component is made from durable, flexible rubber resistant to impact and wear. It is compatible with various excavator brands, including Komatsu, Hitachi, and Kobelco. Specific part numbers and compatibility models vary (e.g., PC60, 4AS, 30AS, 20T-01-31110). ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673867/Engine-Shaft-Couplings_avif_z1xpgw.jpg",
    ]
  },
  {
    id: "127",
    name: { en: "rubber shock absorber or vibration mount", ar: "ممتص صدمات مطاطي أو قاعدة امتصاص اهتزاز" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a rubber shock absorber or vibration mount used in heavy machinery like road rollers. Designed to damp shocks and vibrations in both vertical and lateral directions.Used in industrial applications for crushers and road compactors.Provides protection against metal-to-metal bottoming.Compatible with various brands, including Dynapac, CAT, and Sakai.",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673839/dynapac_x21vpt.jpg",
    ]
  },
  {
    id: "128",
    name: { en: "road roller coupling", ar: "وصلة بكرة مدحلة الطرق" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a road roller coupling. It is used in road roller machines. It is typically made from durable materials like ABS plastic. The coupling wheel helps absorb shocks and isolate vibrations, protecting engine and transmission systems. This specific model appears to be a BoWex FLE-PA style coupling. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673837/d440_zns9sd.jpg",
    ]
  },
  {
    id: "129",
    name: { en: "engine cooling fan blade", ar: "ريشة مروحة تبريد المحرك" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is an engine cooling fan blade. Made from durable plastic materials designed to handle vibration and heat cycles. Moves air efficiently to maintain optimal engine operating temperature and prevent overheating. Specific part numbers (e.g., VOE3827491, 2485C521) vary depending on the engine or machinery it is compatible with, such as certain Volvo or Perkins models. Features multiple blades for effective air circulation. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673835/cat_fan_kbo0ff.jpg",
    ]
  },
  {
    id: "130",
    name: { en: "replacement coupling element", ar: "عنصر وصلة بديلة" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "The image displays a replacement coupling element, part number LCD-0075-47-C. It is compatible with Sullair 185 and Ingersoll Rand P185 air compressors. The inner diameter is typically 35mm. The coupling connects the motor or engine shaft to the compressor's shaft to transfer rotational motion and torque. It is designed for smooth torque transfer, precise alignment, and vibration reduction. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673836/Coupling-O_agvufv.jpg",
    ]
  },
  {
    id: "131",
    name: { en: "anti-vibration rubber mounts", ar: "حوامل مطاطية مقاومة للاهتزاز" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "The image displays a variety of anti-vibration rubber mounts, also known as vibration isolators or shock mounts, used to reduce or isolate vibrations in machinery, equipment, and structures. They are key components in reducing noise and vibration in heavy machinery and equipment. The mounts permit relative movement of suspended mass to the ground and isolate the effects of noise, vibration, and shock. Different types, such as bobbin mounts and pedestal mounts, are designed for various industrial applications and load types. The effectiveness of isolation depends on the specific design and the type of rubber used. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673832/Anti-Vibration_upfbvg.jpg",
    ]
  },
  {
    id: "132",
    name: { en: "plastic flywheel coupling", ar: "وصلة طارة طيارة بلاستيكية" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a plastic flywheel coupling used in heavy machinery. It has 42 teeth on the inner diameter. It is designed to connect a hydraulic pump to an engine. It is used in concrete transit mixers and excavators. It is available as an aftermarket or replacement part from various suppliers. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673833/cat_coup_httypb.jpg",
    ]
  },
  {
    id: "133",
    name: { en: "metal-cased anti-vibration rubber mounts", ar: "حوامل مطاطية معدنية لامتصاص الاهتزاز" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are metal-cased anti-vibration rubber mounts used as shock absorbers for machinery. They are designed to absorb vibrations and reduce noise generated by machines. The mounts feature a fail-safe design and are constructed with specially engineered, oil-resistant rubber and metal components. They are commonly used in applications such as generators, engines, pumps, and compressors. The numbers stamped on the mounts (e.g., 200, 400, 600, 1000) likely indicate their load capacity in kilograms. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673831/anti-vib_tx7nij.jpg",
    ]
  },
  {
    id: "134",
    name: { en: "anti-vibration engine mounts", ar: "حوامل محرك مضادة للاهتزاز" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "These are anti-vibration engine mounts used for isolating vibrations in machinery and engines. They are designed to reduce noise and vibration for smoother operation of equipment like marine engines, generators, pumps, and compressors. The mounts typically feature a rubber element bonded to metal components to provide dampening. The design with an overload stop makes them failsafe and suitable for marine propulsion engines, as they can accommodate thrust. They help protect the engine from externally generated shock loads during operation. ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673830/antivib_zxlnsz.jpg",
    ]
  },
  {
    id: "135",
    name: { en: "rubber vibration dampening mount", ar: "قاعدة تخميد اهتزاز مطاطية" },
    category: "rubberCoupling",
    // subcategory: "deutz",
    desc: "This is a rubber vibration dampening mount, also known as a rubber buffer or shock absorber. It is used as a dynamic buffer between moving components and structural frameworks to absorb and dissipate harmful vibrations generated by heavy-duty machinery. Function: Reduces stress transmission, absorbs impact, and minimizes noise in machinery. Material: Made from natural rubber and typically includes iron plates or threaded inserts for mounting. Application: Commonly used in construction and road-making machinery like road rollers, compactors, and excavators. Specific Models: Similar mounts are available for brands such as Dynapac and Caterpillar (part number 227-0172). ",
    specs: {
      spec1: "Hardened Steel Shaft",
      spec2: "Multi-Lip Seal",
      spec3: "Dynamic Balanced Impeller",
    },
    image : [
      "https://res.cloudinary.com/dpy2micpg/image/upload/v1768673830/Absorber-Buffer_g49ahc.jpg",
    ]
  },
];

// export const products: Product[] = PRODUCTS.map((p: any) => {
//   const description =
//     typeof p.desc === "string"
//       ? { en: p.desc, ar: "" }
//       : p.desc ||
//         (typeof p.description === "string"
//           ? { en: p.description, ar: "" }
//           : p.description) || { en: "", ar: "" };

//   const image = Array.isArray(p.image) ? p.image[0] : p.image;

//   return {
//     ...p,
//     image,
//     description,
//   };
// });
