import { Reveal } from "@/components/Reveal";
import { passos } from "@/config/content";
import { whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons";

export function Encomendar() {
  return (
    <section id="encomendar" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-500">
            Como encomendar
          </span>
          <h2 className="font-display text-3xl font-bold text-choco-700 md:text-4xl">
            Pedir é fácil — e gostoso
          </h2>
          <p className="mt-4 text-choco-500">
            Não trabalhamos com delivery de apps: o pedido é direto com a gente,
            pelo WhatsApp. Simples assim:
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((passo, i) => (
            <Reveal key={passo.titulo} delay={i * 90}>
              <div className="relative h-full rounded-3xl bg-white p-6 shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-500 font-display text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-choco-700">
                  {passo.titulo}
                </h3>
                <p className="mt-1.5 text-sm text-choco-500">
                  {passo.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-base font-semibold text-white shadow-card transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Começar meu pedido
          </a>
        </Reveal>
      </div>
    </section>
  );
}
