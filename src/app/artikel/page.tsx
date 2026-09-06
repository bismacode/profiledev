import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import ArticleCard from "@/components/ArticleCard";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Kumpulan artikel tentang pembuatan website, webapp, dashboard, AI sales & AI customer service oleh Wu Ma Dev.",
  alternates: {
    canonical: "https://bismacode.my.id/artikel",
  },
};

export default function ArtikelPage() {
  return (
    <div className="min-h-screen bg-[#050510] grid-bg pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Artikel </span>
            <span className="gradient-text">Layanan Kami</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang setiap layanan yang kami tawarkan
            dan bagaimana solusi digital dapat mengubah bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ArticleCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              color={service.color}
            >
              <ServiceIcon slug={service.slug} />
            </ArticleCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-cyan/60 hover:text-cyan text-sm transition-colors"
          >
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
