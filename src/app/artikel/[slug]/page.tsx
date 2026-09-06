import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import ArticleDetail from "@/components/ArticleDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://bismacode.my.id";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} — Layanan Profesional | Wu Ma Dev`;
  const description = `${service.tagline}. Wu Ma Dev menyediakan ${service.title.toLowerCase()} profesional dengan teknologi terdepan. Hubungi WhatsApp 0897-0641-711.`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      service.shortTitle.toLowerCase(),
      "jasa " + service.title.toLowerCase(),
      "Wu Ma Dev",
      "bismacode",
      "web developer Indonesia",
      "pembuatan website modern",
      "AI customer service Indonesia",
      "dashboard development",
      "webapp development",
    ],
    alternates: {
      canonical: `${SITE_URL}/artikel/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/artikel/${slug}`,
      siteName: "Wu Ma Dev",
      type: "article",
      images: [
        {
          url: `/artikel/${slug}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${service.title} — Wu Ma Dev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: service.title,
    description: service.description,
    author: {
      "@type": "Organization",
      name: "Wu Ma Dev",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Wu Ma Dev",
      url: SITE_URL,
    },
    url: `${SITE_URL}/artikel/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/artikel/${slug}`,
    },
    about: {
      "@type": "Service",
      name: service.title,
      description: service.tagline,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <ArticleDetail
          slug={service.slug}
          title={service.title}
          shortTitle={service.shortTitle}
          tagline={service.tagline}
          description={service.description}
          longDescription={service.longDescription}
          features={service.features}
          stack={service.stack}
          color={service.color}
          gradient={service.gradient}
        />
      </main>
      <Footer />
    </>
  );
}
