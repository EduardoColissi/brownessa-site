import { Reveal } from "@/components/Reveal";
import { sobre } from "@/config/content";

export function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Espaço para imagem / foto da confeiteira */}
        <Reveal className="order-2 md:order-1">
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-dashed border-choco-200 bg-rose-50/60 text-center text-sm text-choco-400">
            {/* Troque por uma foto: <Image src="/sobre.jpg" ... /> */}
            espaço para uma foto
            <br />
            (doces ou bastidores)
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2" delay={120}>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-500">
            Sobre
          </span>
          <h2 className="font-display text-3xl font-bold text-choco-700 md:text-4xl">
            {sobre.titulo}
          </h2>
          <div className="mt-5 space-y-4 text-choco-500">
            {sobre.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
