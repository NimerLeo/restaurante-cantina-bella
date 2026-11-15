import { bp, site, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${bp}/img/interior.jpg`}
        alt="Salão da Cantina Bella com mesas de madeira e luz baixa"
        width={1600}
        height={1067}
        className="absolute inset-0 size-full object-cover"
        loading="eager"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#120f0c]/92 via-[#120f0c]/55 to-[#120f0c]/35"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-8 sm:pb-16">
        <p className="eyebrow text-cream/60">Vila Madalena · São Paulo</p>

        <h1 className="mt-5 max-w-3xl font-display text-[2.9rem] leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-[5rem]">
          Massa fresca,
          <br />
          feita todos os dias.
        </h1>

        <div className="mt-8 flex flex-col gap-6 border-t border-cream/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[15px] leading-relaxed text-cream/70">
            Cozinha italiana de bairro desde 1998. Farinha, ovos e tempo — o resto é conversa de
            mesa.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Gostaria de reservar uma mesa na Cantina Bella.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Reservar mesa
            </a>
            <a
              href="#cardapio"
              className="rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/70"
            >
              Ver cardápio
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-2 px-5 py-4 text-[11px] uppercase tracking-[0.2em] text-cream/55 sm:px-8">
          <span>{site.phoneDisplay}</span>
          <span className="hidden sm:inline">Ter–qui 18h–23h</span>
          <span className="hidden sm:inline">Sex–sáb 18h–00h</span>
          <span>Domingo 12h–17h</span>
        </div>
      </div>
    </section>
  );
}
