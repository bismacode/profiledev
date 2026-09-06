"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2.5jt",
    period: "/proyek",
    description: "Cocok untuk UMKM yang ingin go digital",
    features: [
      "Landing page responsif",
      "SSL & Hosting 1 tahun",
      "Integrasi WhatsApp",
      "SEO basic",
      "1x revisi",
    ],
    accent: "cyan",
    popular: false,
  },
  {
    name: "Business",
    price: "7.5jt",
    period: "/proyek",
    description: "Solusi lengkap untuk bisnis yang berkembang",
    features: [
      "Multi-page website modern",
      "AI Chatbot CS basic",
      "Dashboard analytics",
      "Admin panel",
      "Integrasi payment gateway",
      "SEO advanced",
      "3x revisi",
    ],
    accent: "purple",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi custom untuk korporasi & startup",
    features: [
      "Full-stack webapp / SaaS",
      "AI Sales Assistant",
      "AI Customer Service advanced",
      "Custom dashboard & BI",
      "Microservices architecture",
      "Dedicated support team",
      "Unlimited revisi",
    ],
    accent: "pink",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
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
            Harga
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">Investasi </span>
            <span className="gradient-text">Terbaik</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group card-futuristic rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
                  PALING POPULER
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    plan.accent === "cyan"
                      ? "text-cyan"
                      : plan.accent === "purple"
                      ? "text-purple-400"
                      : "text-pink-400"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-400">Rp</span>
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.accent === "cyan"
                          ? "text-cyan"
                          : plan.accent === "purple"
                          ? "text-purple-400"
                          : "text-pink-400"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                nativeButton={false}
                className={`w-full font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-500/80 hover:to-pink-500/80 text-white btn-glow"
                    : plan.accent === "cyan"
                    ? "border border-cyan/30 text-cyan hover:bg-cyan/5"
                    : "border border-gray-600 text-gray-300 hover:bg-white/5"
                }`}
                variant={plan.popular ? "default" : "outline"}
                render={
                  <a
                    href="https://wa.me/628970641711"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {plan.price === "Custom" ? "Hubungi Kami" : "Pilih Paket"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
