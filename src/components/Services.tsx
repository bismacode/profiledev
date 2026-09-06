"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            Layanan Kami
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">Solusi Digital </span>
            <span className="gradient-text">Lengkap</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dari website sederhana hingga sistem AI canggih — kami bangun
            semuanya dengan standar kualitas terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative card-futuristic rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Link
                href={`/artikel/${service.slug}`}
                className="absolute inset-0 z-10 rounded-2xl"
                aria-label={`Baca artikel tentang ${service.title}`}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${service.glow}, inset 0 0 40px ${service.glow}`,
                }}
              />

              <div className="relative z-10 pointer-events-none">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7 text-[#050510]" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-cyan/40 group-hover:text-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 mt-6 group-hover:text-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-cyan/60 group-hover:text-cyan transition-colors text-sm font-medium">
                  <span>Baca artikel</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
