export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 border border-violet rounded-sm rotate-45" />
                <div className="absolute inset-[5px] bg-violet rounded-sm" />
              </div>
              <span className="font-display font-700 text-sm tracking-[0.15em] uppercase text-ink">
                Studio
              </span>
            </div>
            <p className="text-ink-muted text-body-sm max-w-xs leading-relaxed">
              Diseño y desarrollo para proyectos creativos. Música, tecnología y diseño en un mismo espacio.
            </p>
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
                href="mailto:hola@studio.com"
                className="text-ink-muted hover:text-violet text-body-sm transition-colors duration-200"
              >
                hola@studio.com
              </a>
              <div className="flex items-center gap-4 mt-2">
                {["Instagram", "Behance", "GitHub"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-mono text-label text-ink-dim hover:text-violet uppercase tracking-wider transition-colors duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-label text-ink-dim">
            © {year} Studio. Todos los derechos reservados.
          </span>
          <span className="font-mono text-label text-ink-dim">
            Diseño + Desarrollo propio
          </span>
        </div>
      </div>
    </footer>
  );
}
