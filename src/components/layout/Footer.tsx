import Link from "next/link";
import {InstagramIcon, MailIcon, WhatsAppIcon} from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-border mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <img
                  src="/logo/fs-logo-web-bg.png"
                  alt="Frequency Studio"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-700 text-sm tracking-[0.15em] uppercase text-ink">
                Frequency Studio
              </span>
            </div>
          </div>
          {/* Links */}
          <div className="lg:flex lg:justify-center">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-label text-ink-dim uppercase tracking-widest">
                Navegación
              </span>
              {["Proyectos", "Servicios", "Herramientas", "Lab", "Studio"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-ink-muted hover:text-ink text-body-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social / contact */}
          <div className="lg:flex lg:justify-end">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-label text-ink-dim uppercase tracking-widest">
                Contacto
              </span>
              <a
                href="mailto:frequencystudiodev@gmail.com"
                className="text-ink-muted hover:text-violet text-body-sm transition-colors duration-200"
              >
                frequencystudiodev@gmail.com
              </a>
              <div className="flex items-center gap-4 mt-2">
              
                  <a
                 
                    href="https://instagram.com/websoluciones_uy"
                    className="font-mono text-label text-ink-dim hover:text-violet uppercase tracking-wider transition-colors duration-200"
                  >
                    <InstagramIcon />
                  </a>
                  
                  <a
                    href="https://wa.me/59894399771"
                    className="font-mono text-label text-ink-dim hover:text-violet uppercase tracking-wider transition-colors duration-200"
                  >
                    <WhatsAppIcon />
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-label text-ink-dim">
            © {year} Frequency Studio. Todos los derechos reservados.
          </span>
  
        </div>
      </div>
    </footer>
  );
}
