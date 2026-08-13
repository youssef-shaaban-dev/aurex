export interface ProjectItem {
  id: string;
  title: string;
  category: "commercial" | "medical" | "hospitality" | "banking";
  categoryLabel: string;
  location: string;
  description: string;
  image?: string;
  scope: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  brands: string[];
  validity: string;
  description: string;
  image: string;
}

export const COMPANY_INFO = {
  name: "أوريكس",
  fullName: "أوريكس للأعمال الكهروميكانيكية والإنشاءات",
  tagline: "حلول التكييف المركزي والمقاولات الكهروميكانيكية المتكاملة",
  phone1: "01003866825",
  whatsapp: "+201003866825",
  email: "sales@aurexegypt.com",
  address: "مدينة نصر - الحي الثامن - مول ميديكال سنتر - الدور الثالث - مكتب 355 - القاهرة",
  workingHours: "السبت - الخميس: 9:00 صباحاً - 6:00 مساءً",
  about: `نسعى في أوريكس للتكييف والتوريد والمقاولات إلى تقديم حلول متكاملة وعصرية في أنظمة التكييف والتوريد والأعمال المقاولاتية الكهروميكانيكية، بجودة عالية ومعايير احترافية تضمنراحة عملائنا وكفاءة مشاريعهم، مع الالتزام بالدقة والسرعة وبناء شراكات طويلة الأمد قائمة على الثقة والتميز.`,
  stats: [
    { value: "+25", label: "مشروعاً رئيسياً منفذاً" },
    { value: "3", label: "توكيلات وموزع معتمد عالمي" },
    { value: "100%", label: "ضمان ومعايير السلامة والكفاءة" },
    { value: "+10", label: "سنوات من التميز في السوق المصري" },
  ],
  goals: [
    "تقديم خدمات عالية الجودة تلبي وتتجاوز تطلعات العملاء.",
    "أن نكون من الشركات الرائدة المعتمدة في قطاع التكييف والمقاولات الكهروميكانيكية.",
    "تطوير حلول مبتكرة ومستدامة تواكب أحدث التطورات التقنية العالمية.",
    "الالتزام الصارم بالمواعيد والمعايير العالمية للسلامة والجودة.",
    "بناء علاقات طويلة الأمد قائمة على الشفافية والثقة المتبادلة.",
    "تحقيق أعلى مستويات رضا العملاء من خلال الكفاءة التشغيلية والخدمة المستمرة.",
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hvac-central",
    title: "أنظمة التكييف المركزي والتبريد",
    subtitle: "Chilled Water - VRV/VRF - Concealed - Package Units",
    description: "توريد وتنفيذ وتشغيل أنظمة التكييف المركزي بمختلف قدراتها للمباني الإدارية والتجارية، الفنادق، والمستشفيات مع الضمان الكامل للعمل بأعلى كفاءة طاقة.",
    iconName: "Wind",
    image: "/images/site/chillers.webp",
    features: [
      "أنظمة الماء المثلج (Chilled Water Systems)",
      "أنظمة التدفق المتغير للفريون (VRV / VRF)",
      "التكييف المخفي (Concealed Units) والباكدج",
      "حسابات الأحمال الحرارية وتصميم الشبكات"
    ]
  },
  {
    id: "authorized-distributor",
    title: "موزع معتمد لأكبر الماركات العالمية",
    subtitle: "Carrier - Midea - Haier",
    description: "موزع معتمد رسمياً لتوريد وتثبيت كافة أجهزة ومعدات التكييف من كبرى الشركات العالمية مع تقديم الضمان المعتمد والدعم الفني المباشر.",
    iconName: "Award",
    image: "/images/certificates/miraco_distributor.webp",
    features: [
      "أجهزة تكييف كاريير (Miraco Carrier)",
      "أنظمة ميديا المتطورة (Midea HVAC)",
      "حلول هاير الذكية (Haier Appliances)"
    ]
  },
  {
    id: "ducting-isolation",
    title: "تصنيع وتوريد مجاري الهواء والعزل",
    subtitle: "Ductwork - Thermal Insulation - Grilles & Diffusers",
    description: "تصنيع وتوريد وتثبيت دكت الصاج المجلفن والمسبق العزل، مع تركيب العزل الحراري ومخارج وجريلات توزيع الهواء وفق الكود العالمي.",
    iconName: "Layers",
    image: "/images/site/ductwork_black.webp",
    features: [
      "تصنيع مجاري الهواء الصاج المجلفن (GI Ducts)",
      "تثبيت العزل الحراري والصوتي (Glasswool & Elastomeric)",
      "مخارج وموزعات الهواء (Diffusers & Grilles)",
      "اختبارات التوازن والتدفق الهوائي (Air Balancing)"
    ]
  },
  {
    id: "freon-piping",
    title: "تأسيس شبكات ومواسير الفريون",
    subtitle: "Copper Piping Networks for Residential & Commercial",
    description: "تأسيس شبكات النحاس وعزل مواسير الفريون للفيلات، الشقق السكنية، والمنشآت التجارية باستخدام أجود أنواع النحاس الجنوب أفريقي والأمريكي.",
    iconName: "Wrench",
    image: "/images/site/concealed_units.webp",
    features: [
      "مواسير نحاس جنوب أفريقي وأمريكي نقي",
      "عزل حراري عالي الجودة وحماية الخراطيم",
      "تأسيسات الفيلا والوحدات السكنية والتجارية",
      "اختبارات الضغط بالنيتروجين لضمان عدم التسريب"
    ]
  },
  {
    id: "firefighting-mep",
    title: "مكافحة الحريق والأعمال الكهروميكانيكية",
    subtitle: "Firefighting - Fire Alarm - Electromechanical Works",
    description: "تنفيذ وإشراف على أنظمة الإطفاء والإنذار المبكر ولوحات التحكم الكهروميكانيكية وتجهيز المضخات وحماية شبكات الأنابيب وفق الاشتراطات.",
    iconName: "Flame",
    image: "/images/site/vrf_roof.webp",
    features: [
      "تركيب مضخات وشبكات مكافحة الحريق (Fire Pumps)",
      "أنظمة الرش الآلي والإنذار المبكر (Fire Alarm & Sprinklers)",
      "الأعمال الكهروميكانيكية المتكاملة للمباني (MEP)",
      "لوحات التغذية والتحكم الكهربائي"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "hyde-park",
    title: "مبنى البيزنس بارك وفيلات هايد بارك",
    category: "commercial",
    categoryLabel: "منشآت تجارية وإدارية",
    location: "القاهرة الجديدة - كمبوند هايد بارك",
    description: "تنفيذ كامل أعمال التكييف المركزي والمخفي وتأسيس الشبكات لعدد من الفيلات ومبنى الأعمال الرئيسي بـ Hyde Park.",
    image: "/images/projects/hyde_park.webp",
    scope: ["أنظمة التكييف المركزي", "شبكات الصاج والعزل", "تأسيس مواسير الفريون"]
  },
  {
    id: "pyramisa-sharm",
    title: "فندق بيراميزا شرم الشيخ",
    category: "hospitality",
    categoryLabel: "فنادق ومنتجعات",
    location: "شرم الشيخ",
    description: "أعمال الإحلال والتجديد الشاملة لأنظمة التكييف المركزي والتبريد بالغرف والمرافق العامة للفندق.",
    image: "/images/projects/pyramisa_sharm.webp",
    scope: ["إحلال وتجديد الشيلرات", "تحديث شبكات الهواء", "صيانة الأجهزة المركزية"]
  },
  {
    id: "beni-suef-security",
    title: "مديرية أمن بني سويف",
    category: "commercial",
    categoryLabel: "مباني حكومية وإدارية",
    location: "بني سويف",
    description: "تنفيذ وتوريد أعمال التكييف المركزي وأنظمة مكافحة الحريق للمبنى الرئيسي للمديرية.",
    image: "/images/projects/beni_suef_security.webp",
    scope: ["أعمال التكييف المركزية", "شبكات مكافحة الحريق", "الإنذار المبكر"]
  },
  {
    id: "city-plaza-suez",
    title: "مول سيتي بلازا السويس",
    category: "commercial",
    categoryLabel: "مولات ومراكز تجارية",
    location: "السويس",
    description: "توريد وتركيب مجاري الهواء (Ductwork) والتكييف المركزي لكافة الأدوار والمحلات التجارية داخل المول.",
    image: "/images/projects/city_plaza_suez.webp",
    scope: ["تكييف مركزي للمول", "تركيب الدكت والعزل", "مخارج الهواء والجريلات"]
  },
  {
    id: "maamoura-hospital",
    title: "مستشفى المعمورة للطب النفسي",
    category: "medical",
    categoryLabel: "مستشفيات وقطاع طبي",
    location: "الإسكندرية",
    description: "تنفيذ شبكات التكييف والتكت وتجديد منظومة التهوية العامة للأقسام العلاقية والإدارية.",
    image: "/images/projects/maamoura_hospital.webp",
    scope: ["أنظمة التهوية والتكييف", "تنقية الهواء والفلترة", "تحديث الشبكات"]
  },
  {
    id: "sultan-gardens",
    title: "فندق حدائق السلطان شرم الشيخ",
    category: "hospitality",
    categoryLabel: "فنادق ومنتجعات",
    location: "شرم الشيخ",
    description: "تنفيذ أعمال إحلال وتجديد التكييف بالغرف والمطاعم والقاعات الرئيسية للمنتجع.",
    image: "/images/projects/sultan_gardens.webp",
    scope: ["تجديد التكييف المخفي", "عزل خطوط الفريون", "الرفع الهيدروليكي"]
  },
  {
    id: "ebe-bank",
    title: "بنك تنمية الصادرات - فرع أبو داود الظاهري",
    category: "banking",
    categoryLabel: "قطاع مصرفي",
    location: "مدينة نصر - القاهرة",
    description: "تنفيذ أعمال التكييف والتهوية وتجهيز فرع البنك الرئيسي بأحدث الأنظمة.",
    image: "/images/projects/ebe_bank.webp",
    scope: ["أنظمة التكييف المخفي", "الدكت والعزل", "الإنذار المبكر"]
  },
  {
    id: "nbe-branches",
    title: "فروع البنك الأهلي المصري",
    category: "banking",
    categoryLabel: "قطاع مصرفي",
    location: "فروع عدة (كايرو فيستفال، كورنيش المعادي، دارنا، الواسطى)",
    description: "تنفيذ وتوريد أنظمة التكييف والإنذار لعدد من فروع البنك الأهلي المصري.",
    image: "/images/projects/bavaria_katameya.webp",
    scope: ["تأمين وتكييف الفروع", "أنظمة الكونسيلد", "الصيانة الدورية"]
  },
  {
    id: "maxim-mall",
    title: "وحدات شركة KPI ومحلات مكسيم مول",
    category: "commercial",
    categoryLabel: "منشآت تجارية وإدارية",
    location: "القاهرة الجديدة",
    description: "تنفيذ أعمال التكييف والفاير لمجموعة وحدات تجارية ومقر شركة KPI بالمول.",
    image: "/images/projects/maxim_mall.webp",
    scope: ["تكييف الوحدات الإدارية", "شبكات الفاير فايتنج", "الدكت والتعليق"]
  },
  {
    id: "arabella-plaza",
    title: "7 وحدات إدارية بمول أرابيلا بلازا",
    category: "commercial",
    categoryLabel: "منشآت تجارية وإدارية",
    location: "التجمع الخامس",
    description: "تأسيس وتجهيز أنظمة التكييف الكونسيلد والدكت والتهوية السقفية المباشرة.",
    image: "/images/projects/arabella_plaza.webp",
    scope: ["تكييف مخفي عالي الجودة", "تركيب الجريلات الدائرية والخطية", "العزل الصوتى"]
  },
  {
    id: "carrefour-suez",
    title: "فرع كارفور السويس",
    category: "commercial",
    categoryLabel: "مولات ومراكز تجارية",
    location: "السويس",
    description: "تنفيذ أنظمة التكييف المركزية وتوزيع الهواء داخل الهايبر ماركت والمساحات المفتوحة.",
    image: "/images/projects/carrefour_suez.webp",
    scope: ["توزيع الهواء للمساحات الكبيرة", "دكت صاج مجلفن", "وحدات الباكدج"]
  },
  {
    id: "suez-uni-hospital",
    title: "مستشفى جامعة السويس وغرف عمليات جامعة بني سويف",
    category: "medical",
    categoryLabel: "مستشفيات وقطاع طبي",
    location: "السويس وبني سويف",
    description: "تنفيذ أعمال التكييف لغرف العمليات والعناية المركزة والتعقيم الطبي وفق المعايير الطبية القياسية.",
    image: "/images/projects/maamoura_hospital.webp",
    scope: ["فلترة وتكييف غرف العمليات", "الضغط الموجب والسالب", "العزل الفائق"]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "miraco-carrier",
    title: "شهادة موزع معتمد - شركة ميراكو",
    issuer: "شركة مصر لصناعة التبريد والتكييف 'ميراكو' (Miraco)",
    brands: ["Carrier", "Midea"],
    validity: "معتمدة حتى 2025/12/31",
    description: "شهادة اعتماد رسمية لشركة أوريكس كموزع معتمد لأجهزة تكييف ميراكو (كاريير - ميديا) المنزلية والتجارية، مع أحقية التركيب والتوريد والصيانة والضمان.",
    image: "/images/certificates/miraco_distributor.webp"
  },
  {
    id: "haier-egypt",
    title: "شهادة موزع معتمد - شركة هاير",
    issuer: "شركة هاير مصر للأجهزة الكهربائية (Haier Group)",
    brands: ["Haier"],
    validity: "شهادة موزع رسمي معتمد",
    description: "إفادة رسمية باعتماد أوريكس كموزع معتمد لأجهزة ومعدات تكييف هاير بمختلف موديلاتها، والتوريد والتركيب والدعم الفني المعتمد.",
    image: "/images/certificates/haier_distributor.webp"
  }
];
