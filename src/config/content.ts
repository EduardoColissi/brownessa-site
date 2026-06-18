/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTEÚDO DAS SEÇÕES — Brownessa
 * ─────────────────────────────────────────────────────────────────────────────
 *  Textos, produtos, depoimentos e passos da encomenda.
 *  Edite à vontade — é só texto. Para preços, use a string que preferir
 *  (ex.: "R$ 5,00 a unidade", "R$ 60,00 o cento", "sob consulta").
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** Texto da seção "Sobre". */
export const sobre = {
  titulo: "Feito à mão, com muito carinho",
  paragrafos: [
    "A Brownessa nasceu do amor por doces de verdade — aqueles que lembram afeto, casa e momentos especiais.",
    "Cada brownie e cada brigadeiro é preparado sob encomenda, com ingredientes selecionados e aquele toque artesanal que faz toda a diferença.",
    "Sem fôrma de fábrica: aqui é tudo feito para você, no capricho, pensando no seu pedido.",
  ],
};

/** Produtos exibidos na vitrine. emoji é só um placeholder visual até ter foto. */
export type Produto = {
  nome: string;
  descricao: string;
  preco: string;
  emoji: string;
  /** opcional: caminho da foto em /public, ex. "/produtos/brownie.jpg" */
  foto?: string;
};

export const produtos: Produto[] = [
  {
    nome: "Brownie Tradicional",
    descricao: "Massa densa, casquinha craquelada e muito chocolate.",
    preco: "sob consulta",
    emoji: "🍫",
  },
  {
    nome: "Brownie Recheado",
    descricao: "Recheios cremosos: brigadeiro, doce de leite ou Nutella.",
    preco: "sob consulta",
    emoji: "🍩",
  },
  {
    nome: "Brigadeiro Gourmet",
    descricao: "Brigadeiro cremoso em vários sabores, perfeito para festas.",
    preco: "sob consulta",
    emoji: "🍬",
  },
  {
    nome: "Caixas para Presente",
    descricao: "Combos montados para presentear quem você ama.",
    preco: "sob consulta",
    emoji: "🎁",
  },
];

/** Passos de "Como encomendar". */
export const passos = [
  {
    titulo: "Escolha seus doces",
    descricao: "Dê uma olhada nos produtos e decida o que vai adoçar seu dia.",
  },
  {
    titulo: "Chame no WhatsApp",
    descricao: "Mande sua encomenda, quantidade e a data que você precisa.",
  },
  {
    titulo: "Combinamos tudo",
    descricao: "Confirmamos sabores, valores e a forma de entrega ou retirada.",
  },
  {
    titulo: "É só aproveitar",
    descricao: "Seus doces ficam prontos com todo o carinho da Brownessa.",
  },
];

/** Depoimentos de clientes. Troque pelos reais quando tiver. */
export const depoimentos = [
  {
    texto:
      "Os brownies da Brownessa são simplesmente perfeitos. Encomendei para o aniversário e todo mundo amou!",
    autor: "Cliente Brownessa",
  },
  {
    texto:
      "Atendimento super atencioso e doce maravilhoso. Virei cliente fiel!",
    autor: "Cliente Brownessa",
  },
  {
    texto:
      "Brigadeiros impecáveis e entrega no precinho combinado. Recomendo demais!",
    autor: "Cliente Brownessa",
  },
];

/**
 * Galeria — coloque fotos em /public/galeria e liste aqui.
 * Enquanto não houver fotos, a seção mostra placeholders bonitinhos.
 * Ex.: ["/galeria/foto1.jpg", "/galeria/foto2.jpg"]
 */
export const galeria: string[] = [];
