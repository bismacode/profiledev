import Link from "next/link";
import { Code2 } from "lucide-react";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-purple rounded-lg rotate-45" />
                <Code2 className="relative w-4 h-4 text-[#050510]" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-cyan">Wu Ma</span>
                <span className="text-purple-400"> Dev</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed">
              Layanan pembuatan website, webapp, dashboard, AI sales & AI
              customer service modern dengan teknologi terdepan.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.threads.com/aikhacomp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan/20 text-cyan text-sm hover:bg-cyan/5 hover:border-cyan/40 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.186 22.5c-2.809 0-4.244-1.036-5.281-2.22-1.13-1.292-1.645-3.03-1.882-4.354L10.22 14.02c.157.64.67 1.936 1.941 1.936.75 0 1.28-.322 1.687-.779.39-.437.767-1.21.765-2.142-0.002-1.9-1.474-3.898-3.88-5.226-.68-.377-2.03-1.02-3.09-.87-.355.05-.73.263-.773.582-.043.319.24.7.646 1.013 1.494 1.15 3.383 1.906 4.51 2.742-.002.001-1.295.884-2.482.887-1.311.003-2.305-.47-2.949-1.32-.597-.785-.672-2.225.074-3.63.78-1.47 2.318-2.513 4.33-2.513 1.35 0 2.6.448 3.664 1.233 1.36 1.003 2.386 2.518 2.61 4.317.55.14 1.36.15 1.992.003l-1.045 3.682c-1.052.178-2.272-.295-3.38-1.106-.177 1.177-.6 2.205-1.253 3.012-.78.967-1.91 1.578-3.244 1.578ZM18.6 2.4c-1.993 0-3.65 1.458-4.231 3.155-1.228.428-2.571 1.19-3.49 2.102-.477.475-.893 1.01-1.225 1.566a6.554 6.554 0 0 0-1.28-.782C7.563 7.67 6.14 7.383 4.879 7.759c-1.35.404-2.519 1.39-3.098 2.945-.7 1.877-.352 3.97.815 5.438 1.167 1.468 2.91 2.33 4.94 2.328h.002c2.589 0 4.495-1.248 5.747-2.874.42-.545.754-1.147 1.03-1.767.825.416 1.744.628 2.73.418l-1.045 3.683c-.199.034-.405.052-.617.052h-.006v1.7c2.678 0 4.939-1.34 6.335-3.42 1.414-2.109 1.65-4.93 1.061-7.005-.499-1.762-1.573-3.167-3.092-3.985-.436-.235-.919-.407-1.427-.527ZM18.6 4.1c.834 0 1.632.38 2.42.899.785.515 1.453 1.237 1.781 2.363.843 2.973.237 6.308-.227 7.396-.505.822-1.697 1.653-3.492 1.547v-1.4c.257.035.492.052.706.052 0 0-.61.166-1.16.353-.742-.44-1.095-.946-1.382-1.184.552-.848.972-1.766 1.023-2.7.062-1.14-.335-1.398-.335-1.398.186.447.153.683.077.933-.169.556-.806 1.14-1.484 1.02h-.007c.293.654.254 1.27.095 1.835-.57 2.028-1.909 3.42-3.553 3.42h-.001c-1.242 0-1.786-.612-2.09-.98-.318-.384-.425-.861-.351-1.392-2.744.05-4.78-.988-5.24-1.474-.591.547-1.178 1.356-1.178 2.398 0 1.36.975 2.255 1.958 3.28 1.047 1.092 2.015 1.48 4.494 1.48.001 0 3.928.006 4.574 1.098-.001.762.722 2.158 1.394 2.158h.013c.193 0 .386-.07.527-.2.272-.248.412-.714.154-1.533-2.354.098-2.988-1.786-3.026-3.055l1.258.51c.162.086.338.13.515.13.08 0 .16-.012.237-.035 1.923-.587 2.52-1.923 2.52-1.923V13.7c0-.854-.46-1.603-.25-2.445.2-.808.83-1.535 1.818-1.975 1.02-.455 2.298-.98 3.188-2.26.386-.555.613-1.635.613-1.635.2-.382.497-.88.497-1.421 0-.176-.14-.318-.317-.318Z" />
                </svg>
                Threads
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              Layanan
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/artikel/${service.slug}`}
                    className="hover:text-cyan transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a
                  href="https://wa.me/628970641711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: 0897-0641-711
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.com/aikhacomp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan transition-colors"
                >
                  Threads: @aikhacomp
                </a>
              </li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan/10 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Wu Ma Dev. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a
              href="#services"
              className="hover:text-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
