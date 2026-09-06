"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  MessageCircle,
  Lightbulb,
  FileCode2,
  Bug,
  Shield,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { techStack } from "@/data/services";

const flowSteps = [
  {
    icon: MessageCircle,
    title: "Konsultasi & Briefing",
    desc: "Diskusi kebutuhan, target market, dan visi proyek",
    color: "from-cyan to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Riset & Ideation",
    desc: "Analisis kompetitor, riset fitur, dan pemetaan solusi",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: FileCode2,
    title: "Wireframe & Desain",
    desc: "Prototipe UI/UX interaktif dengan design system",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Coding agile sprints dengan code review berkala",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Bug,
    title: "Testing & QA",
    desc: "Unit test, integration test, dan user acceptance test",
    color: "from-orange-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Deploy & Launch",
    desc: "Setup server, migrasi data, dan go-live",
    color: "from-emerald-500 to-cyan",
  },
  {
    icon: Shield,
    title: "Security Audit",
    desc: "Penetration testing, SSL, firewall, dan compliance",
    color: "from-cyan to-purple-500",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    desc: "Monitoring, bugfix, dan optimasi berkelanjutan",
    color: "from-purple-500 to-cyan",
  },
];

const webFlowDetails = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    items: [
      "Analisis kebutuhan bisnis & target audience",
      "Competitor research & benchmarking",
      "Technical requirements gathering",
      "Project roadmap & timeline",
      "Proposal & estimasi biaya",
    ],
  },
  {
    phase: "Phase 2",
    title: "Design & Prototype",
    items: [
      "Wireframe low-fidelity & high-fidelity",
      "UI/UX design dengan design system",
      "Prototipe interaktif (Figma)",
      "User testing & feedback",
      "Design approval & finalisasi",
    ],
  },
  {
    phase: "Phase 3",
    title: "Development & Integration",
    items: [
      "Setup development environment",
      "Frontend development (Next.js + React)",
      "Backend API & database setup",
      "Third-party integrasi (payment, WA, AI)",
      "CI/CD pipeline configuration",
    ],
  },
  {
    phase: "Phase 4",
    title: "Testing & Deployment",
    items: [
      "Unit testing & integration testing",
      "Performance & security audit",
      "UAT (User Acceptance Testing)",
      "Production deployment & DNS setup",
      "Post-launch monitoring & support",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flow Pembuatan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            Alur Kerja
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">Flow Pembuatan </span>
            <span className="gradient-text">Web & WebApp</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Setiap proyek melewati 8 tahap terstruktur untuk memastikan
            kualitas, keamanan, dan kepuasan klien di setiap langkah.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {flowSteps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative card-futuristic rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-5 h-5 text-[#050510]" />
                </div>
                <span className="text-[10px] font-bold text-cyan/40 uppercase tracking-widest">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {index < flowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                  <ArrowRight className="w-4 h-4 text-cyan/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed Phase Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-purple-400/60 font-medium">
            Detail Alur
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
            <span className="text-white">Setiap Tahap </span>
            <span className="gradient-text">Terstruktur</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {webFlowDetails.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-futuristic rounded-2xl p-8 group hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold border border-purple-500/20">
                  {phase.phase}
                </span>
                <h3 className="text-lg font-bold text-white">{phase.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan/60 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            <span className="text-white">Teknologi </span>
            <span className="gradient-text">yang Kami Gunakan</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-3 rounded-xl border border-cyan/10 bg-[#0a0a1a]/80 hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-300 group cursor-default"
            >
              <span
                className="text-sm font-medium group-hover:scale-105 transition-transform inline-block"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
