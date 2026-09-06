"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ArticleCard({
  slug,
  title,
  tagline,
  description,
  color,
  children,
}: {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative card-futuristic rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
      <Link
        href={`/artikel/${slug}`}
        className="absolute inset-0 z-20"
        aria-label={`Baca tentang ${title}`}
      />

      <div className="relative h-44 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
            {children}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
      </div>

      <div className="relative z-10 p-6 pt-4 pointer-events-none">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan transition-colors">
          {title}
        </h3>
        <p className="text-sm text-cyan/60 mb-2">{tagline}</p>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-cyan/60 group-hover:text-cyan transition-colors text-sm font-medium">
          <span>Baca selengkapnya</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}
