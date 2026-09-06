"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Gauge,
  Smartphone,
  Globe2,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performa Ultra Cepat",
    description: "Load time di bawah 1 detik dengan optimasi image dan code splitting otomatis.",
  },
  {
    icon: Brain,
    title: "AI-First Approach",
    description: "Setiap solusi kami integrasikan dengan AI untuk automasi dan kecerdasan bisnis.",
  },
  {
    icon: Shield,
    title: "Security Level Tinggi",
    description: "Enkripsi data, SSL, dan proteksi dari serangan siber dengan standar enterprise.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Tampilan sempurna di semua perangkat — desktop, tablet, dan smartphone.",
  },
  {
    icon: Globe2,
    title: "SEO Optimized",
    description: "Technical SEO terbaik untuk peringkat tinggi di Google dan mesin pencari.",
  },
  {
    icon: Gauge,
    title: "Monitoring Real-time",
    description: "Dashboard monitoring untuk performa, error tracking, dan analytics usage.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/60 font-medium">
            Keunggulan
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">Mengapa </span>
            <span className="gradient-text">Wu Ma Dev?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kami tidak hanya membuat website — kami membangun pengalaman digital
            yang memberikan dampak nyata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative card-futuristic rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl border border-cyan/20 bg-cyan/5 flex items-center justify-center group-hover:border-cyan/40 group-hover:bg-cyan/10 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
