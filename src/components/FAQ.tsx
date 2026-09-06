"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Berapa biaya pembuatan website di Wu Ma Dev?",
    answer:
      "Biaya pembuatan website di Wu Ma Dev dimulai dari Rp 2.500.000 untuk paket Starter, Rp 7.500.000 untuk paket Business, dan harga custom untuk paket Enterprise. Harga disesuaikan dengan kompleksitas fitur, jumlah halaman, dan kebutuhan AI. Konsultasi gratis tanpa biaya untuk semua proyek.",
  },
  {
    question: "Berapa lama proses pembuatan web / webapp?",
    answer:
      "Proses pembuatan website landing page umumnya 1-2 minggu, website company profile 2-4 minggu, dan webapp/SaaS lengkap 4-8 minggu. Durasi tergantung scope proyek dan ketersediaan konten dari klien. Kami menerapkan 8 tahap terstruktur: konsultasi, riset, desain, development, testing, deploy, security audit, dan maintenance.",
  },
  {
    question: "Teknologi apa yang digunakan oleh Wu Ma Dev?",
    answer:
      "Kami menggunakan teknologi modern dan teruji: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui untuk frontend; Node.js, PostgreSQL, dan Docker untuk backend; serta OpenAI dan LangChain untuk integrasi AI. Semua dioptimalkan untuk performa tinggi dan skala besar.",
  },
  {
    question: "Apakah Wu Ma Dev menyediakan layanan AI sales dan AI customer service?",
    answer:
      "Ya, Wu Ma Dev menyediakan dua solusi AI: AI Sales Assistant yang mengotomasi lead generation dan penjualan, serta AI Customer Service yang memberikan layanan pelanggan 24/7 multi-bahasa. Keduanya terintegrasi dengan WhatsApp dan platform lain, memahami konteks percakapan, dan dapat bekerja otomatis tanpa campur tangan manusia.",
  },
  {
    question: "Bagaimana cara menghubungi Wu Ma Dev untuk konsultasi?",
    answer:
      "Anda dapat menghubungi kami melalui WhatsApp di nomor 0897-0641-711 untuk konsultasi gratis. Tim kami akan merespons dalam 1 jam pada jam operasional. Anda juga dapat mengikuti perkembangan kami di Threads @aikhacomp.",
  },
  {
    question: "Apakah layanan pembuatan website sudah termasuk SEO?",
    answer:
      "Ya, semua paket kami sudah termasuk optimasi SEO dasar. Untuk paket Business dan Enterprise, kami menyediakan SEO advanced termasuk technical SEO, optimasi kecepatan, structured data, dan strategi konten agar website Anda mudah ditemukan di mesin pencari seperti Google dan mudah dipahami oleh AI (AEO/GEO).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            <span className="text-white">Pertanyaan </span>
            <span className="gradient-text">Umum</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Jawaban singkat untuk pertanyaan yang paling sering diajukan.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-futuristic rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
