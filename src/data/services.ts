import {
  Globe,
  LayoutDashboard,
  Bot,
  ShoppingCart,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export const techStack = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "shadcn/ui", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "OpenAI", color: "#00A67E" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Docker", color: "#2496ED" },
];

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  color: string;
  glow: string;
  gradient: string;
  features: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    slug: "website-modern",
    icon: Globe,
    title: "Website Modern",
    shortTitle: "Website",
    tagline: "Landing page, company profile & website custom berperforma tinggi",
    description:
      "Landing page, company profile, dan website custom dengan desain futuristik yang memukau dan performa tinggi.",
    longDescription: [
      "Website adalah wajah digital bisnis Anda di era modern. Wu Ma Dev membangun website modern yang tidak hanya indah secara visual, tetapi juga dioptimalkan untuk performa, konversi, dan SEO. Setiap website kami mengusung desain futuristik dengan animasi halus, micro-interaction, dan user experience yang intuitif.",
      "Dengan teknologi Next.js dan Tailwind CSS, website Anda akan memiliki load time di bawah 1 detik, mobile-first responsive, dan accessibility yang mumpuni. Kami juga mengintegrasikan fitur-fitur cerdas seperti analytics, form otomatis, dan integrasi WhatsApp untuk memaksimalkan potensi bisnis Anda.",
      "Baik Anda butuh landing page untuk kampanye, company profile untuk membangun kredibilitas, atau showcase portfolio — tim kami siap mewujudkannya dengan standar kualitas internasional.",
    ],
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(0, 240, 255, 0.15)",
    gradient: "linear-gradient(135deg, #00f0ff, #3b82f6)",
    features: [
      "Desain UI/UX futuristik & modern",
      "Load time super cepat (< 1 detik)",
      "Mobile-first responsive",
      "SEO optimized & technical SEO",
      "Integrasi WhatsApp & form",
      "Analytics & conversion tracking",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    slug: "webapp-saas",
    icon: ShoppingCart,
    title: "WebApp & SaaS",
    shortTitle: "WebApp",
    tagline: "Aplikasi web lengkap dari e-commerce hingga SaaS platform",
    description:
      "Aplikasi web lengkap dari e-commerce hingga SaaS platform dengan arsitektur scalable dan modern.",
    longDescription: [
      "WebApp dan SaaS adalah solusi untuk bisnis yang membutuhkan lebih dari sekadar website. Dengan Wu Ma Dev, kami membangun aplikasi web lengkap yang scalable, secure, dan mudah dikembangkan — mulai dari e-commerce, marketplace, aplikasi internal, hingga platform SaaS multitenant.",
      "Arsitektur yang kami terapkan mendukung ribuan pengguna bersamaan, dengan database teroptimasi, autentikasi aman, payment gateway, dan admin panel yang powerful. Semua dibangun dengan best practice agar mudah di-maintain dan dikembangkan di masa depan.",
      "Integrasi AI yang cerdas membuat webapp Anda mampu beradaptasi dengan kebutuhan pengguna — mulai dari rekomendasi produk, personalisasi konten, hingga otomasi proses bisnis.",
    ],
    color: "from-purple-400 to-pink-500",
    glow: "rgba(139, 92, 246, 0.15)",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    features: [
      "Arsitektur scalable & microservices",
      "Autentikasi & role-based access",
      "Payment gateway terintegrasi",
      "Admin panel & dashboard",
      "Integrasi AI & otomasi",
      "Backup & disaster recovery",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    slug: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard Interaktif",
    shortTitle: "Dashboard",
    tagline: "Dashboard real-time dengan visualisasi data yang powerful",
    description:
      "Dashboard real-time dengan visualisasi data, analytics, dan reporting untuk pengambilan keputusan.",
    longDescription: [
      "Data adalah aset berharga, dan dashboard adalah jendela untuk melihatnya secara jelas. Wu Ma Dev membangun dashboard interaktif yang mengubah data mentah menjadi insight yang actionable dengan visualisasi modern, real-time, dan mudah dipahami.",
      "Dengan chart interaktif, filter dinamis, export otomatis, dan alert real-time, Anda dan tim dapat mengambil keputusan lebih cepat dan tepat. Dashboard kami dirancang untuk berbagai kebutuhan — operational monitoring, sales analytics, financial reporting, hingga BI enterprise.",
      "Kami membangun dashboard yang scalable, aman, dan mobile-friendly sehingga Anda bisa memantau bisnis dari mana saja dan kapan saja.",
    ],
    color: "from-emerald-400 to-cyan-500",
    glow: "rgba(6, 182, 212, 0.15)",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    features: [
      "Visualisasi data real-time",
      "Chart & grafik interaktif",
      "Filter & drill-down dinamis",
      "Export data (CSV/Excel)",
      "Alert & notifikasi otomatis",
      "Role-based access control",
    ],
    stack: ["Next.js", "Recharts", "Chart.js", "PostgreSQL", "WebSocket"],
  },
  {
    slug: "ai-sales",
    icon: Bot,
    title: "AI Sales Assistant",
    shortTitle: "AI Sales",
    tagline: "Otomasi penjualan cerdas untuk meningkatkan konversi",
    description:
      "AI yang mengotomasi proses penjualan, lead generation, dan follow-up pelanggan secara cerdas.",
    longDescription: [
      "AI Sales Assistant adalah solusi untuk tim penjualan yang ingin bekerja lebih efisien dan efektif. Dengan memanfaatkan kecerdasan buatan, AI kami mampu melakukan lead generation otomatis, kualifikasi prospek, personalisasi penawaran, dan follow-up pelanggan secara cerdas 24/7.",
      "AI Sales memahami konteks percakapan, menawarkan produk yang relevan, dan menutup penjualan dengan pendekatan personal. Ini menghemat waktu tim sales Anda hingga 70% dan meningkatkan conversion rate secara signifikan.",
      "Integrasi dengan CRM, WhatsApp, email, dan berbagai channel menjadikan AI Sales Assistant sebagai asisten penjualan virtual yang handal untuk bisnis Anda.",
    ],
    color: "from-orange-400 to-pink-500",
    glow: "rgba(236, 72, 153, 0.15)",
    gradient: "linear-gradient(135deg, #fb923c, #ec4899)",
    features: [
      "Lead generation otomatis",
      "Kualifikasi & scoring prospek",
      "PERSONA penawaran cerdas",
      "Follow-up otomatis 24/7",
      "Integrasi CRM & WhatsApp",
      "Analytics conversion real-time",
    ],
    stack: ["OpenAI", "LangChain", "Next.js", "PostgreSQL", "WhatsApp API"],
  },
  {
    slug: "ai-customer-service",
    icon: Headphones,
    title: "AI Customer Service",
    shortTitle: "AI CS",
    tagline: "Layanan pelanggan otomatis yang memahami konteks",
    description:
      "Chatbot AI 24/7 yang memahami konteks, handle keluhan, dan memberikan respons personal untuk pelanggan Anda.",
    longDescription: [
      "AI Customer Service mengubah cara Anda melayani pelanggan. Chatbot AI kami bekerja 24/7, memahami konteks percakapan, menjawab pertanyaan berulang, handle keluhan, dan memberikan solusi dengan respons personal — mengurangi beban tim support Anda dan meningkatkan kepuasan pelanggan.",
      "Dibangun dengan model language terbaru, AI kami dapat memahami berbagai bahasa termasuk Indonesian dan English, mengenali intent pelanggan, dan melakukan escalation otomatis ke agen manusia ketika diperlukan.",
      "Integrasi dengan WhatsApp, website widget, dan aplikasi messaging lainnya membuat layanan pelanggan Anda selalu tersedia dari channel mana pun yang pelanggan sukai.",
    ],
    color: "from-blue-400 to-purple-500",
    glow: "rgba(96, 165, 250, 0.15)",
    gradient: "linear-gradient(135deg, #60a5fa, #a855f7)",
    features: [
      "Chatbot AI 24/7 multi-bahasa",
      "Natural language understanding",
      "Handle keluhan otomatis",
      "Escalation ke agen manusia",
      "Integrasi WhatsApp & web chat",
      "Sentiment analysis",
    ],
    stack: ["OpenAI", "LangChain", "Next.js", "Pinecone", "WhatsApp API"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
