import { Reveal } from "@/components/Reveal";
import { depoimentos } from "@/config/content";

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-choco-700 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-300">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
            Quem prova, ama
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-choco-600/60 p-7 ring-1 ring-white/10">
                <div className="mb-3 text-3xl text-gold">“</div>
                <blockquote className="flex-1 text-choco-50">
                  {d.texto}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-rose-200">
                  — {d.autor}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
