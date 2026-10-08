
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
  id="footer"
  className="border-t border-border bg-[#2a2a2a]"
>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
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

          {/* Contact */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:frequencystudiodev@gmail.com"
              className="text-ink-muted hover:text-violet text-body-sm transition-colors duration-200"
            >
              frequencystudiodev@gmail.com
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/frecuencystudio.lab"
                aria-label="Instagram"
                className="text-ink-muted hover:text-violet transition-colors duration-200"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://wa.me/59894399771"
                aria-label="WhatsApp"
                className="text-ink-muted hover:text-violet transition-colors duration-200"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <span className="font-mono text-label text-ink-muted">
            © {year} Frequency Studio. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

