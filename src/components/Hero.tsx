"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 border border-cyan/5 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-10 border border-purple-500/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-20 border border-cyan/5 rounded-full animate-[spin_80s_linear_infinite]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-cyan/80">AI-Powered Development</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-glow-cyan text-cyan">Bangun</span>
          <br />
          <span className="text-white">Masa Depan</span>
          <br />
          <span className="gradient-text">Digital Anda</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Website, WebApp, Dashboard, AI Sales & AI Customer Service — semuanya
          dibangun dengan teknologi terdepan untuk bisnis Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            nativeButton={false}
            size="lg"
            className="bg-gradient-to-r from-cyan to-purple hover:from-cyan/80 hover:to-purple/80 text-[#050510] font-bold text-lg px-8 py-6 btn-glow"
            render={
              <a
                href="https://wa.me/628970641711"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-cyan/30 text-cyan hover:bg-cyan/5 text-lg px-8 py-6"
            render={<a href="#services" />}
          >
            Lihat Layanan
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "150+", label: "Proyek Selesai" },
            { value: "99%", label: "Client Puas" },
            { value: "24/7", label: "Support AI" },
            { value: "3x", label: "Lebih Cepat" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-glow-cyan text-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
    </section>
  );
}
