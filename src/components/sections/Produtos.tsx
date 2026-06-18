import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { produtos } from "@/config/content";
import { whatsappUrl } from "@/config/site";

export function Produtos() {
  return (
    <section id="produtos" className="bg-rose-50/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-500">
            Cardápio
          </span>
          <h2 className="font-display text-3xl font-bold text-choco-700 md:text-4xl">
            Nossos docinhos
          </h2>
          <p className="mt-4 text-choco-500">
            Tudo feito sob encomenda. Escolha seu favorito e chame a gente no
            WhatsApp para combinar quantidades e sabores.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-card">
                {/* Imagem (ou placeholder com emoji) */}
                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-rose-100 to-choco-100 text-6xl">
                  {p.foto ? (
                    <Image
                      src={p.foto}
                      alt={p.nome}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {p.emoji}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold text-choco-700">
                    {p.nome}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-choco-500">
                    {p.descricao}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-rose-500">
                    {p.preco}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-choco-600 px-8 py-3.5 text-base font-semibold text-white shadow-card transition-transform hover:scale-105"
          >
            Quero encomendar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
