"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, MapPin, Send, AtSign } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan/60 font-medium">
            Hubungi Kami
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="text-white">Mari </span>
            <span className="gradient-text">Diskusi</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ceritakan kebutuhan proyek Anda dan kami akan memberikan solusi
            terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-futuristic rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Kontak Langsung</h3>

              <a
                href="https://wa.me/628970641711"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 hover:bg-[#25D366]/15 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="text-white font-semibold group-hover:text-[#25D366] transition-colors">
                    0897-0641-711
                  </p>
                </div>
              </a>

              <a
                href="https://www.threads.com/aikhacomp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-cyan/5 border border-cyan/10 hover:border-cyan/30 hover:bg-cyan/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center shrink-0">
                  <AtSign className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Threads</p>
                  <p className="text-white font-semibold group-hover:text-cyan transition-colors">
                    @aikhacomp
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lokasi</p>
                  <p className="text-white font-semibold">Indonesia</p>
                </div>
              </div>
            </div>

            <div className="card-futuristic rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                Jam Operasional
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Senin &ndash; Jumat</span>
                  <span className="text-white">09:00 &ndash; 17:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sabtu</span>
                  <span className="text-white">09:00 &ndash; 14:00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Minggu</span>
                  <span className="text-cyan/60">Konsultasi WhatsApp</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="card-futuristic rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = new FormData(form);
                  const name = data.get("name");
                  const message = data.get("message");
                  const phone = data.get("phone");
                  const waUrl = `https://wa.me/628970641711?text=Halo%20Wu%20Ma%20Dev%0A%0ANama%3A%20${encodeURIComponent(
                    name as string
                  )}%0ATelp%3A%20${encodeURIComponent(
                    phone as string
                  )}%0APesan%3A%20${encodeURIComponent(message as string)}`;
                  window.open(waUrl, "_blank");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Nama
                    </label>
                    <Input
                      name="name"
                      placeholder="Nama Anda"
                      required
                      className="bg-[#0a0a1a] border-cyan/10 focus:border-cyan/40 text-white placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      No. Telp
                    </label>
                    <Input
                      name="phone"
                      placeholder="08xxx"
                      required
                      className="bg-[#0a0a1a] border-cyan/10 focus:border-cyan/40 text-white placeholder:text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">
                    Pesan
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Ceritakan proyek Anda..."
                    required
                    rows={4}
                    className="bg-[#0a0a1a] border-cyan/10 focus:border-cyan/40 text-white placeholder:text-gray-600 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan to-purple hover:from-cyan/80 hover:to-purple/80 text-[#050510] font-bold py-6 btn-glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Kirim via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
