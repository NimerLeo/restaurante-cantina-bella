import { navLinks, site, waLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-soft">
              {site.address}
              <br />
              {site.phoneDisplay}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Rodapé">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft/70">Navegar</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] text-ink-soft transition-colors hover:text-clay"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-[13px] text-ink-soft">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ink-soft/70">Horários</span>
            <ul className="mt-2.5 space-y-1">
              {site.hours.map((item) => (
                <li key={item.day} className="flex justify-between gap-6">
                  <span>{item.day}</span>
                  <span className="text-ink">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a
              href={waLink("Olá! Gostaria de reservar uma mesa na Cantina Bella.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-clay px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-clay-dark"
            >
              Reservar mesa
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-[11.5px] text-ink-soft sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-ink-soft/70">
            Site demonstrativo de portfólio — restaurante fictício, sem vínculo comercial.
          </p>
        </div>
      </div>
    </footer>
  );
}
