import Reveal from "@/components/Reveal";
import { bp } from "@/lib/site";

const facts = [
  { k: "1998", v: "o ano em que a família abriu as portas" },
  { k: "5 kg", v: "de massa fresca produzida por dia" },
  { k: "480 °C", v: "no forno a lenha, todos os dias" },
];

export default function Story() {
  return (
    <section id="casa" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${bp}/img/table.jpg`}
              alt="Mesa posta da Cantina Bella com pratos italianos e vinho tinto"
              width={1200}
              height={800}
              className="h-[340px] w-full object-cover sm:h-[460px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 hidden bg-clay px-6 py-5 text-cream sm:block lg:-right-6">
            <p className="font-display text-3xl leading-none">25+</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/80">
              anos de mesa cheia
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-ink-soft">A casa</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              A receita não mudou.
              <br />
              <span className="text-clay">Só o bairro.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              A Cantina Bella começou como uma mesa comprida na casa dos avós, na Itália, e virou
              restaurante na Vila Madalena em 1998. A massa ainda é aberta à mão, todas as manhãs.
              O molho ainda cozinha por horas. E o vinho ainda é servido sem cerimônia.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Não temos pressa, nem música alta, nem menu sazonal inventado. Temos uma cozinha que
              respeita o tempo do ingrediente — e uma casa que gosta de gente sentada à mesa.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.k}>
                  <dt className="font-display text-2xl text-ink">{fact.k}</dt>
                  <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">{fact.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
