import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { galeria } from "@/config/content";

/** Placeholders quando ainda não há fotos cadastradas. */
const placeholders = ["🍫", "🧁", "🍩", "🍬", "🎂", "🍪"];

export function Galeria() {
  const temFotos = galeria.length > 0;

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-500">
            Galeria
          </span>
          <h2 className="font-display text-3xl font-bold text-choco-700 md:text-4xl">
            Um gostinho do que fazemos
          </h2>
          <p className="mt-4 text-choco-500">
            {temFotos
              ? "Algumas das nossas criações mais queridas."
              : "Em breve, fotos reais dos nossos doces aqui. 🍓"}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {temFotos
            ? galeria.map((src, i) => (
                <Reveal key={src} delay={i * 70}>
                  <div className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                    <Image
                      src={src}
                      alt={`Doce da Brownessa ${i + 1}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))
            : placeholders.map((emoji, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-choco-200 bg-gradient-to-br from-rose-50 to-choco-50 text-5xl">
                    {emoji}
                  </div>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
