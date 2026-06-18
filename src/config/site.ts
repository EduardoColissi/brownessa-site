/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONFIGURAÇÃO DO SITE — Brownessa
 * ─────────────────────────────────────────────────────────────────────────────
 *  Este é o ÚNICO arquivo que você precisa editar para colocar os dados reais.
 *  Troque os valores marcados com  // TODO  pelos dados da Brownessa.
 *  Nada de mexer no resto do código. :)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  /** Nome da marca, exibido no topo e no rodapé. */
  nome: "Brownessa",

  /** Frase de efeito curta (aparece no topo, abaixo do nome). */
  tagline: "Doces artesanais, feitos com carinho",

  /** Descrição usada no SEO (Google / compartilhamento). */
  descricao:
    "Brownessa — brownies e brigadeiros artesanais feitos sob encomenda. Peça pelo WhatsApp e adoce seu dia.",

  /** Cidade/região de atendimento (aparece no contato). Deixe "" para ocultar. */
  regiao: "", // TODO: ex. "Porto Alegre e região"

  contato: {
    /**
     * WhatsApp em formato internacional, SÓ NÚMEROS (DDI + DDD + número).
     * Brasil = 55. Ex.: (51) 99999-8888  ->  "5551999998888"
     */
    whatsapp: "5551999999999", // TODO: número real da Brownessa

    /** Mensagem que já vem preenchida quando o cliente abre o WhatsApp. */
    whatsappMensagem:
      "Olá! Vim pelo site e gostaria de fazer uma encomenda na Brownessa 🍫",

    /** @ do Instagram, SEM o "@". Ex.: "brownessa.doces" */
    instagram: "brownessa", // TODO: @ real da Brownessa
  },
} as const;

/** Monta o link "abrir conversa" do WhatsApp com a mensagem pré-pronta. */
export const whatsappUrl = () =>
  `https://wa.me/${site.contato.whatsapp}?text=${encodeURIComponent(
    site.contato.whatsappMensagem,
  )}`;

/** Link do perfil no Instagram. */
export const instagramUrl = () =>
  `https://instagram.com/${site.contato.instagram}`;
