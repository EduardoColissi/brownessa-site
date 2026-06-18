import { site, whatsappUrl, instagramUrl } from "@/config/site";
import { HeartIcon, InstagramIcon, WhatsAppIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-choco-800 py-10 text-choco-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center">
        <a
          href="#topo"
          className="font-display text-2xl font-bold text-cream"
        >
          {site.nome}
          <span className="text-rose-400">.</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-choco-700 text-cream transition-colors hover:bg-rose-500"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={instagramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-choco-700 text-cream transition-colors hover:bg-rose-500"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-choco-300">
          Feito com
          <HeartIcon className="h-4 w-4 text-rose-400" />
          para você
        </p>
        <p className="text-xs text-choco-400">
          © {site.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
