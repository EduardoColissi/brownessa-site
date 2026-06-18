# Brownessa — Site

Site institucional (one-page) da **Brownessa**, doceria artesanal especializada em
brownies e brigadeiros sob encomenda. O objetivo é **captar clientes** e direcioná-los
para o contato direto — **não há delivery por apps**; pedidos são feitos pelo
**WhatsApp** e o perfil vive no **Instagram**.

## 🍫 O que o site tem

Single-page com rolagem vertical e animações suaves de reveal:

1. **Hero** — nome da marca, espaço reservado para o logo e CTAs (WhatsApp + Instagram).
2. **Sobre** — breve história/proposta da doceria.
3. **Produtos** — vitrine dos doces (placeholder com emoji até ter fotos).
4. **Galeria** — grid de fotos (mostra placeholders enquanto não houver fotos).
5. **Depoimentos** — prova social.
6. **Como encomendar** — passo a passo (deixa claro que é pedido direto, sem app).
7. **Contato** — botões de WhatsApp e Instagram.
8. **Botão flutuante de WhatsApp** sempre visível.

## 🛠️ Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript** (estrito)
- **Tailwind CSS 3** — paleta marrom-chocolate + rosa-pastel + dourado
- Fontes **Playfair Display** (títulos) e **Poppins** (texto), carregadas via `<link>`
- 100% estático (SSG) — leve e rápido, hospedável em qualquer lugar (Vercel, Netlify, etc.)

## ✏️ Como editar os dados da Brownessa

Quase tudo que você precisa trocar está em **dois arquivos**, sem mexer no resto:

| Arquivo | O que tem lá |
|---|---|
| `src/config/site.ts` | **WhatsApp** (número + mensagem pronta), **Instagram** (@), nome, tagline, região. Procure os comentários `// TODO`. |
| `src/config/content.ts` | Textos do **Sobre**, lista de **produtos** (nome/descrição/preço), **passos** de encomenda, **depoimentos** e a lista da **galeria**. |

### Trocar o número do WhatsApp
Em `src/config/site.ts`, campo `whatsapp` — formato **só números**, com DDI 55:
`(51) 99999-8888` → `"5551999998888"`.

### Trocar o @ do Instagram
Em `src/config/site.ts`, campo `instagram` — **sem** o `@`. Ex.: `"brownessa.doces"`.

### Colocar o logo
Há um **espaço reservado** marcado com comentário "espaço para o LOGO" em:
- `src/components/Header.tsx` (topo)
- `src/components/sections/Hero.tsx` (centro do hero)

Coloque o arquivo em `public/` (ex.: `public/logo.png`) e troque o placeholder por:
```tsx
import Image from "next/image";
<Image src="/logo.png" alt="Brownessa" width={160} height={160} priority />
```

### Adicionar fotos (produtos / galeria)
- **Produto com foto:** ponha a imagem em `public/produtos/` e preencha o campo `foto`
  do produto em `content.ts` (ex.: `foto: "/produtos/brownie.jpg"`).
- **Galeria:** ponha as fotos em `public/galeria/` e liste os caminhos no array
  `galeria` em `content.ts`. Enquanto o array estiver vazio, aparecem placeholders.

## 🚀 Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Produção:

```bash
npm run build
npm run start
```

## 🌐 Deploy

Projeto estático — recomendado **Vercel** (deploy direto do GitHub, gratuito):
1. Conectar o repositório `EduardoColissi/brownessa-site` na Vercel.
2. Framework detectado automaticamente (Next.js). Sem variáveis de ambiente.
3. Cada push na branch principal publica sozinho.

## 📝 Notas técnicas

- **Fontes via `<link>`** em vez de `next/font/google`: evita falha de build atrás de
  proxy/certificado corporativo (o `next/font` baixa as fontes em tempo de build).
- **Animações de scroll** (`Reveal.tsx`) usam progressive enhancement: o conteúdo
  sempre renderiza visível por padrão e a animação só entra quando o JS está ativo —
  nada some se o JavaScript falhar.
- **Next 14.2.35** (patch de segurança aplicado). Os avisos restantes do `npm audit`
  pedem upgrade para Next 16 (breaking) e não afetam um site estático sem Image
  Optimizer remoto, rewrites ou RSC com deserialização — fora de escopo aqui.
