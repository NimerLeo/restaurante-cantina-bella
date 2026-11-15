"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { site, waLink } from "@/lib/site";

const times = ["12:00", "13:00", "19:00", "20:00", "21:00", "22:00"];

export default function Reserve() {
  const [form, setForm] = useState({
    nome: "",
    pessoas: "2",
    data: "",
    hora: "20:00",
    obs: "",
  });
  const [sent, setSent] = useState(false);

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = [
      `Olá! Gostaria de reservar uma mesa na ${site.name}.`,
      "",
      `Nome: ${form.nome}`,
      `Pessoas: ${form.pessoas}`,
      `Data: ${form.data || "a combinar"}`,
      `Horário: ${form.hora}`,
      form.obs ? `Observação: ${form.obs}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="reservas" className="scroll-mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-cream/50">Reservas</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl">
                Sua mesa está esperando.
              </h2>
              <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-cream/60">
                Reservas pelo WhatsApp, confirmadas em até 30 minutos em horário comercial. Para
                grupos acima de 8 pessoas, fale direto com a recepção.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <dl className="mt-10 space-y-5 border-t border-cream/15 pt-8 text-[13.5px]">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-cream/45">Endereço</dt>
                  <dd className="mt-1.5">
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {site.address}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-cream/45">Telefone</dt>
                  <dd className="mt-1.5">
                    <a href={`tel:+${site.whatsapp}`} className="underline-offset-4 hover:underline">
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-cream/45">Horários</dt>
                  <dd className="mt-1.5 space-y-1">
                    {site.hours.map((item) => (
                      <span key={item.day} className="flex justify-between gap-6">
                        <span className="text-cream/50">{item.day}</span>
                        <span>{item.time}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="border border-cream/15 bg-cream/[0.04] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/45">Nome</span>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={update("nome")}
                    placeholder="Em nome de quem reservamos?"
                    className="mt-2 w-full border-b border-cream/20 bg-transparent px-0 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-cream/60"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/45">
                    Pessoas
                  </span>
                  <select
                    value={form.pessoas}
                    onChange={update("pessoas")}
                    className="mt-2 w-full appearance-none border-b border-cream/20 bg-transparent px-0 py-2.5 text-sm text-cream focus:border-cream/60"
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} className="text-ink">
                        {n} {n === 1 ? "pessoa" : "pessoas"}
                      </option>
                    ))}
                    <option value="9+" className="text-ink">
                      9 ou mais
                    </option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/45">Data</span>
                  <input
                    type="date"
                    value={form.data}
                    onChange={update("data")}
                    className="mt-2 w-full border-b border-cream/20 bg-transparent px-0 py-2.5 text-sm text-cream focus:border-cream/60 [color-scheme:dark]"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/45">
                    Horário
                  </span>
                  <select
                    value={form.hora}
                    onChange={update("hora")}
                    className="mt-2 w-full appearance-none border-b border-cream/20 bg-transparent px-0 py-2.5 text-sm text-cream focus:border-cream/60"
                  >
                    {times.map((t) => (
                      <option key={t} value={t} className="text-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream/45">
                    Observação
                  </span>
                  <input
                    type="text"
                    value={form.obs}
                    onChange={update("obs")}
                    placeholder="Aniversário, restrição…"
                    className="mt-2 w-full border-b border-cream/20 bg-transparent px-0 py-2.5 text-sm text-cream placeholder:text-cream/30 focus:border-cream/60"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
              >
                Confirmar no WhatsApp
              </button>

              <p className="mt-4 text-[11.5px] leading-relaxed text-cream/40">
                {sent
                  ? "Se a janela do WhatsApp não abrir, verifique o bloqueador de pop-up ou ligue para a recepção."
                  : "A reserva é confirmada pela recepção — o envio abre o WhatsApp com os dados preenchidos."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
