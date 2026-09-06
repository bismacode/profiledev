"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Siap Membangun </span>
            <span className="gradient-text">Masa Depan?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Konsultasikan proyek Anda secara gratis. Kami akan memberikan
            rekomendasi solusi terbaik untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              nativeButton={false}
              size="lg"
              className="bg-gradient-to-r from-cyan to-purple hover:from-cyan/80 hover:to-purple/80 text-[#050510] font-bold text-lg px-10 py-7 btn-glow"
              render={
                <a
                  href="https://wa.me/628970641711?text=Halo%20Wu%20Ma%20Dev%2C%20saya%20tertarik%20untuk%20konsultasi%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Chat WhatsApp Sekarang
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            Gratis konsultasi &bull; Tanpa komitmen &bull; Response dalam 1 jam
          </p>
        </motion.div>
      </div>
    </section>
  );
}
