import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const SITE_URL = "https://bismacode.my.id";
const SITE_NAME = "Wu Ma Dev";
const DEFAULT_DESCRIPTION =
  "Wu Ma Dev — Jasa pembuatan website, webapp, dashboard, AI Sales & AI Customer Service modern. Solusi digital lengkap untuk bisnis Anda dengan teknologi terdepan: Next.js, React, TypeScript, dan AI. Hubungi kami di WhatsApp 0897-0641-711.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050510",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wu Ma Dev | Jasa Pembuatan Website, WebApp, Dashboard & AI Solution",
    template: `%s | Wu Ma Dev`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Wu Ma Dev", url: SITE_URL }],
  creator: "Wu Ma Dev",
  publisher: "Wu Ma Dev",
  category: "technology",
  keywords: [
    "jasa pembuatan website",
    "jasa web app",
    "pembuatan dashboard",
    "AI sales",
    "AI customer service",
    "chatbot AI Indonesia",
    "web developer Indonesia",
    "Next.js developer",
    "jasa IT",
    "bismacode",
    "Wu Ma Dev",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "id-ID": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Wu Ma Dev | Jasa Pembuatan Website, WebApp, Dashboard & AI Solution",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Wu Ma Dev — AI-Powered Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wu Ma Dev | AI-Powered Web Solutions",
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  verification: {
    google: "pending_add_verification_in_search_console",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  image: `${SITE_URL}/og-image.svg`,
  logo: `${SITE_URL}/favicon.ico`,
  priceRange: "Rp2.500.000 - Custom",
  telephone: "+628970641711",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  areaServed: "Indonesia",
  sameAs: ["https://www.threads.com/aikhacomp"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pembuatan Website Modern",
        url: `${SITE_URL}/artikel/website-modern`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "WebApp & SaaS Development",
        url: `${SITE_URL}/artikel/webapp-saas`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Dashboard Interaktif",
        url: `${SITE_URL}/artikel/dashboard`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Sales Assistant",
        url: `${SITE_URL}/artikel/ai-sales`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Customer Service",
        url: `${SITE_URL}/artikel/ai-customer-service`,
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Berapa biaya pembuatan website di Wu Ma Dev?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biaya pembuatan website di Wu Ma Dev dimulai dari Rp 2.500.000 untuk paket Starter, Rp 7.500.000 untuk paket Business, dan harga custom untuk paket Enterprise.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses pembuatan web / webapp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Website landing page umumnya 1-2 minggu, company profile 2-4 minggu, dan webapp/SaaS lengkap 4-8 minggu dengan 8 tahap terstruktur.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Wu Ma Dev menyediakan layanan AI sales dan AI customer service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Wu Ma Dev menyediakan AI Sales Assistant dan AI Customer Service yang terintegrasi WhatsApp, multi-bahasa, dan bekerja 24/7 otomatis.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara menghubungi Wu Ma Dev untuk konsultasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hubungi kami melalui WhatsApp di nomor 0897-0641-711 untuk konsultasi gratis, atau ikuti Threads @aikhacomp.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050510] grid-bg">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
