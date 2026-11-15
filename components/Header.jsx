"use client";

import { useEffect, useState } from "react";
import { navLinks, site, waLink } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark ? "border-b border-line bg-cream/95 backdrop-blur-md" : "border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className={`font-display text-xl tracking-tight transition-colors ${
            dark ? "text-ink" : "text-cream"
          }`}
          aria-label={`${site.name} — início`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors ${
                dark ? "text-ink-soft hover:text-clay" : "text-cream/75 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={waLink("Olá! Gostaria de reservar uma mesa na Cantina Bella.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors ${
              dark
                ? "bg-clay text-white hover:bg-clay-dark"
                : "bg-cream text-ink hover:bg-white"
            }`}
          >
            Reservar mesa
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`grid size-10 place-items-center rounded-full border lg:hidden ${
            dark ? "border-line text-ink" : "border-white/30 text-cream"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-cream transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[380px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 px-1 py-3.5 text-[15px] text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink("Olá! Gostaria de reservar uma mesa na Cantina Bella.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-clay px-5 py-3 text-center text-sm font-medium text-white"
          >
            Reservar mesa
          </a>
        </nav>
      </div>
    </header>
  );
}
