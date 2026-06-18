import { Reveal } from "@/components/Reveal";
import { site, whatsappUrl, instagramUrl } from "@/config/site";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function Contato() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-cream to-rose-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-rose-500">
            Contato
          </span>
          <h2 className="font-display text-3xl font-bold text-choco-700 md:text-4xl">
            Vamos adoçar seu dia?
          </h2>
          <p className="mt-4 text-choco-500">
            Chame a gente no WhatsApp ou siga no Instagram para ver as
            novidades. Será um prazer atender você!
          </p>
          {site.regiao && (
            <p className="mt-2 text-sm text-choco-400">
              Atendemos {site.regiao}.
            </p>
          )}
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-semibold text-white shadow-card transition-transform hover:scale-105 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={instagramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-choco-500 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-transform hover:scale-105 sm:w-auto"
            >
              <InstagramIcon className="h-5 w-5" />
              @{site.contato.instagram}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
