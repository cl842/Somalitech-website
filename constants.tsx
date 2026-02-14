
import React from 'react';
import { Layout, Smartphone, Code, ShieldCheck, Server, Settings, Cloud, Search, Zap, CheckCircle, Lock } from 'lucide-react';

export const BRAND_NAME = "SomaliTech";

export const NAV_LINKS = [
  { name: "Hoyga", href: "#home" },
  { name: "Hiigsiga", href: "#about" },
  { name: "Adeegyada", href: "#services" },
  { name: "Qiimaha", href: "#pricing" },
  { name: "Mashaariicda", href: "#projects" },
  { name: "Xiriir", href: "#contact" }
];

export const SERVICES = [
  {
    title: "Naqshadaynta Mareegaha",
    description: "Waxaan dhisnaa mareego casri ah oo indhaha soo jiita, xawaarahooduna aad u sarreeyo si ganacsigaagu u kobco.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Amniga Digital-ka",
    description: "Ilaalinta xogtaada waa muhiimadayada koowaad. Waxaan dhisnaa gidaarro ammaan oo adag si looga hortago jabsashada.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Networking & Server-yada",
    description: "Xalalka isgaarsiinta xafiisyada iyo maamulka xogta ee server-yada si shaqadu u noqoto mid isku xiran.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    title: "Taageerada Farsamada",
    description: "Ma qabtaa caqabad IT? Khubaradayada ayaa diyaar u ah inay kaa caawiyaan dhibaato kasta oo dhinaca hardware-ka ama software-ka ah.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    title: "Xalalka Cloud-ka",
    description: "U wareeji ganacsigaaga daruuraha (Cloud). Hel xogtaada meel kasta iyo goor kasta si sugan oo degdeg ah.",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    title: "Apps-ka Mobile-ka",
    description: "App-yo u gaar ah ganacsigaaga oo ka shaqaynaya iOS iyo Android, looguna talagalay inay u adeegaan macaamiishaada.",
    icon: <Smartphone className="w-8 h-8" />,
  }
];

export const PRICING_PLANS = [
  {
    name: "Bilow (Starter)",
    price: "150",
    description: "Ku habboon ganacsiyada yaryar ama shakhsiyaadka.",
    features: [
      "Mareeg hal bog ah (Landing Page)",
      "Naqshad mobile-friendly ah",
      "Xiriirinta Form-ka",
      "1 bilood oo taageero ah",
      "Basic SEO"
    ],
    buttonText: "Hadda Bilow",
    popular: false
  },
  {
    name: "Ganacsi (Pro)",
    price: "450",
    description: "Xalka ugu fiican ee shirkadaha raba inay koraan.",
    features: [
      "Mareeg ka kooban ilaa 5 bog",
      "Maamulka Xogta (CMS)",
      "Sugidda Amniga (SSL)",
      "3 bilood oo taageero ah",
      "Advanced SEO",
      "Xiriirinta Social Media"
    ],
    buttonText: "Hadda Bilow",
    popular: true
  },
  {
    name: "Enterprise",
    price: "999",
    description: "Nidaamyo adag oo loogu talagalay shirkadaha waaweyn.",
    features: [
      "Custom Web Application",
      "App-ka Mobile-ka (Android/iOS)",
      "Server Management",
      "Taageero 24/7 ah",
      "Amniga Heerka Caalami",
      "Cloud Hosting"
    ],
    buttonText: "Nala Xiriir",
    popular: false
  }
];

export const PROCESS_STEPS = [
  {
    title: "Turxaan-bixin",
    description: "Waxaan si dhow u dhagaysanaa fikradahaaga si aan u dejino khariidadda guusha ee mashruucaaga.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Naqshad Farshaxan",
    description: "Muuqaalka mareegtaada waxaan u dhisnaa si farshaxanimo leh oo u gaar ah sumaddaada (Brand).",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Dhisid & Hirgelin",
    description: "Isticmaalka tignoolajiyada ugu dambaysa si loo dhisno nidaam adag oo wax-qabadkiisu sareeyo.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Hubinta Tayada",
    description: "Baaritaanno ammaan iyo kuwo tayo si aan u xaqiijino in wax walba ay u shaqaynayaan si kaamil ah.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Gudbin & Garab-istaag",
    description: "Daba-gal iyo taageero joogto ah ka dib marka mashruucu dhammaado si guushaadu u noqoto mid waarta.",
    icon: <Zap className="w-6 h-6" />,
  }
];

export const TESTIMONIALS = [
  {
    name: "Mohamed Hassan",
    role: "Maamulaha Global Logistics",
    content: "SomaliTech waxay naga caawiyeen inaan digital-ka u wareejino dhammaan shaqadayada. Xirfaddoodu waa mid heerkeedu sarreeyo.",
    avatar: "https://i.pravatar.cc/150?u=mohamed"
  },
  {
    name: "Fartun Ali",
    role: "Agaasimaha Suuqgeynta",
    content: "Website-ka cusub wuxuu noo keenay macaamiil aad u badan. Aad ayaan ugu qanacsanahay naqshadda iyo adeegga macaamiisha.",
    avatar: "https://i.pravatar.cc/150?u=fartun"
  },
  {
    name: "Abdiwahab Islow",
    role: "Aas-aasaha Fintech StartUp",
    content: "Xagga amniga (Cyber Security), SomaliTech waa lama huraan. Waxay noo dhisneen nidaam ammaan oo aad u adag.",
    avatar: "https://i.pravatar.cc/150?u=abdi"
  }
];

export const FAQS = [
  {
    question: "Intee in le'eg ayay qaadataa dhisidda website?",
    answer: "Muddadu waxay ku xiran tahay baaxadda shaqada. Mareegaha fudud waxay qaataan 10-15 maalmood, halka nidaamyada waaweyn ay qaadan karaan ilaa bil."
  },
  {
    question: "Ma bixisaan taageero ka dib marka shaqadu dhammaato?",
    answer: "Haa, waxaan bixinaa taageero farsamo oo bilaash ah mudada 3 bilood ah ee ugu horeysa, si aan u hubino in wax walba u shaqaynayaan si sax ah."
  },
  {
    question: "Sidee u sugtid amniga xogtayada?",
    answer: "Waxaan adeegsanaa farsamooyinka ugu dambeeya ee Encryption-ka iyo Firewall-yada, sidoo kale waxaan mar walba samaynaa xog-kaydin (Backup)."
  },
  {
    question: "Qiimaha adeegyadiina sidee u xisaabisaan?",
    answer: "Qiimuhu wuxuu ku yimaadaa falanqaynta baahidaada. Waxaan bixinaa qiimayn bilaash ah ka hor inta aanan bilaabin shaqada."
  }
];

export const PROJECTS = [
  {
    title: "Dhisidda Enterprise Network",
    category: "Networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Security Audit oo Dhammaystiran",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mobile App-ka E-Banking",
    category: "Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Daruuraha Cloud Migration",
    category: "Cloud Systems",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  }
];
