"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/#services", label: "Layanan" },
  { href: "/#features", label: "Fitur" },
  { href: "/#pricing", label: "Harga" },
  { href: "/artikel", label: "Artikel" },
  { href: "/#contact", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);
    if (!href.startsWith("/#")) return;

    const sectionId = href.replace("/#", "");
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/80 backdrop-blur-xl border-b border-cyan/10 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-cyan transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan to-purple group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
            <Button
              nativeButton={false}
              className="ml-4 bg-gradient-to-r from-cyan to-purple hover:from-cyan/80 hover:to-purple/80 text-[#050510] font-semibold btn-glow"
              render={
                <a
                  href="https://wa.me/628970641711"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Mulai Proyek
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-cyan/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="block text-gray-400 hover:text-cyan transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button
              nativeButton={false}
              className="w-full bg-gradient-to-r from-cyan to-purple text-[#050510] font-semibold"
              render={
                <a
                  href="https://wa.me/628970641711"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Mulai Proyek
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
