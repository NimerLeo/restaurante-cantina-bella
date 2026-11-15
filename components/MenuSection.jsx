"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { categories } from "@/lib/menu";
import { waLink } from "@/lib/site";

export default function MenuSection() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active) ?? categories[0];

  return (
    <section id="cardapio" className="scroll-mt-24 border-y border-line bg-cream-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow text-ink-soft">Cardápio</p>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
              O que sai da nossa cozinha.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-xs text-[13px] leading-relaxed text-ink-soft">
              Cardápio rotativo. Pratos podem variar conforme a chegada dos ingredientes — pergunte
              ao garçom.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex gap-1 overflow-x-auto border-b border-line pb-px">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              aria-pressed={active === cat.id}
              className={`shrink-0 border-b-2 px-4 py-3 text-[12px] uppercase tracking-[0.18em] transition-colors ${
                active === cat.id
                  ? "border-clay text-clay"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="animate-[fadeIn_.4s_ease]">
          <p className="mt-6 text-[13px] italic text-ink-soft">{current.note}</p>

          <ul className="mt-7 grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {current.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-[19px] leading-snug text-ink">{item.name}</h3>
                  <span
                    aria-hidden="true"
                    className="mb-1 flex-1 border-b border-dotted border-line"
                  />
                  <span className="shrink-0 text-[15px] font-medium text-clay">
                    {item.price.startsWith("—") ? item.price : `R$ ${item.price}`}
                  </span>
                </div>
                <p className="mt-1.5 max-w-md text-[13.5px] leading-relaxed text-ink-soft">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13.5px] text-ink-soft">
              Restrições alimentares? Avisa na reserva que a cozinha adapta.
            </p>
            <a
              href={waLink("Olá! Gostaria de saber mais sobre o cardápio da Cantina Bella.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-ink/45"
            >
              Perguntar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
