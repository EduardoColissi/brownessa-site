import type { Metadata } from "next";
import { site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.nome} — ${site.tagline}`,
  description: site.descricao,
  openGraph: {
    title: `${site.nome} — ${site.tagline}`,
    description: site.descricao,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontes via <link> (em vez de next/font) para não depender de fetch
            no build — evita falha atrás de proxy/cert corporativo. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
