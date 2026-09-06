"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import ServiceImage from "@/components/ServiceImage";

type ArticleProps = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  stack: string[];
  color: string;
  gradient: string;
};

export default function ArticleDetail(props: ArticleProps) {
  const service = {
    slug: props.slug,
    title: props.title,
    color: props.color,
    gradient: props.gradient,
  };

  return (
    <div className="min-h-screen bg-[#050510] grid-bg">
      <div className="relative pt-28 pb-8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Artikel
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-cyan/10 text-cyan border-cyan/20 text-xs">
              Layanan
            </Badge>
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs">
              Wu Ma Dev
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {props.title}
          </h1>
          <p className="text-xl text-cyan/60 mb-8">{props.tagline}</p>

          <div className="relative rounded-2xl overflow-hidden mb-12 border border-cyan/10">
            <ServiceImage service={service} className="w-full" />
          </div>

          <div>
            {props.longDescription.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-300 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="card-futuristic rounded-2xl p-8 mt-10 mb-10">
            <h2 className="text-xl font-bold text-white mb-6">
              Fitur {props.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {props.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="card-futuristic rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {props.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/5 text-purple-400 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative card-futuristic rounded-2xl p-8 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-transparent to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-3">
                Tertarik dengan {props.shortTitle}?
              </h2>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Konsultasikan kebutuhan proyek Anda secara gratis. Kami siap
                membantu mewujudkan visi digital Anda.
              </p>
              <Button
                nativeButton={false}
                className="bg-gradient-to-r from-cyan to-purple hover:from-cyan/80 hover:to-purple/80 text-[#050510] font-bold btn-glow px-8 py-5"
                render={
                  <a
                    href={`https://wa.me/628970641711?text=Halo%20Wu%20Ma%20Dev%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(props.title)}.%20Bisa%20konsultasi%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
