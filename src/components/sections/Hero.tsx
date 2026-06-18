import { site, whatsappUrl, instagramUrl } from "@/config/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-cream to-cream pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />

      {/* manchas decorativas suaves */}
      <div
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-choco-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center">
        {/* ── Espaço reservado para o LOGO ──
            Substitua este bloco pela logo real quando tiver:
            <Image src="/logo.png" alt="Brownessa" width={160} height={160} priority /> */}
        <div className="mb-8 flex h-32 w-32 animate-float items-center justify-center rounded-full border-2 border-dashed border-rose-300/70 bg-white/60 text-center text-xs font-medium text-choco-400 shadow-soft">
          espaço
          <br />
          do logo
        </div>

        <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
          Doces artesanais sob encomenda
        </span>

        <h1 className="font-display text-5xl font-bold leading-tight text-choco-700 md:text-7xl">
          {site.nome}
        </h1>

        <p className="mt-5 max-w-xl text-lg text-choco-500 md:text-xl">
          {site.tagline}. Brownies e brigadeiros preparados com ingredientes
          de verdade — peça o seu e adoce o dia.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir pelo WhatsApp
          </a>
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-choco-200 bg-white/70 px-7 py-3.5 text-base font-semibold text-choco-600 transition-colors hover:border-rose-300 hover:text-rose-500"
          >
            <InstagramIcon className="h-5 w-5" />
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
