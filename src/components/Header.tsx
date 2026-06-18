"use client";

import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/config/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#encomendar", label: "Como pedir" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* ── Espaço reservado para o LOGO ──
            Quando tiver o logo, troque este <a> pelo <Image> da logo.
            Ex.: <Image src="/logo.png" alt="Brownessa" width={150} height={48} /> */}
        <a
          href="#topo"
          className="font-display text-2xl font-bold tracking-tight text-choco-700"
        >
          {site.nome}
          <span className="text-rose-500">.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-choco-600 transition-colors hover:text-rose-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-105 sm:inline-block"
          >
            Fazer pedido
          </a>

          {/* Botão menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-choco-700 md:hidden"
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-choco-100 bg-cream/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-choco-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
