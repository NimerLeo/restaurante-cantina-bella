import Reveal from "@/components/Reveal";
import { bp } from "@/lib/site";

const shots = [
  {
    src: "pizza.jpg",
    alt: "Pizza margherita saindo do forno a lenha",
    label: "Forno a lenha",
    span: "sm:col-span-2",
    h: "h-64 sm:h-[360px]",
  },
  {
    src: "pasta.jpg",
    alt: "Prato de massa fresca com molho de tomate e manjericão",
    label: "Massa do dia",
    span: "",
    h: "h-64 sm:h-[360px]",
  },
  {
    src: "table.jpg",
    alt: "Mesa posta para o jantar na Cantina Bella",
    label: "Sala de jantar",
    span: "",
    h: "h-64 sm:h-[300px]",
  },
  {
    src: "interior.jpg",
    alt: "Vista do salão da Cantina Bella ao anoitecer",
    label: "O salão",
    span: "sm:col-span-2",
    h: "h-64 sm:h-[300px]",
  },
];

export default function Gallery() {
  return (
    <section id="ambiente" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24">
      <Reveal>
        <p className="eyebrow text-ink-soft">Ambiente</p>
        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
            Luz baixa, mesa cheia, conversa alta.
          </h2>
          <p className="max-w-xs text-[13px] leading-relaxed text-ink-soft">
            48 lugares no salão e 12 no balcão. Reserva recomendada de quinta a domingo.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {shots.map((shot, index) => (
          <Reveal
            key={shot.src}
            delay={index * 70}
            className={`group relative overflow-hidden ${shot.span}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${bp}/img/${shot.src}`}
              alt={shot.alt}
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${shot.h}`}
              loading="lazy"
            />
            <span className="absolute bottom-3 left-3 bg-cream/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur">
              {shot.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
