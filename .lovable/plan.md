## Objetivo

Deixar a página com SEO completo e um cartão bonito quando compartilhada no WhatsApp, Instagram, Facebook, LinkedIn e Twitter/X — hoje o `index.html` tem alguns metas, mas usa uma imagem OG genérica do Lovable e faltam campos importantes (locale, url canônica, favicon dedicado, imagem com dimensões etc.).

## O que será feito

### 1. Gerar imagem OG personalizada do curso
Criar uma imagem `1200×630px` (proporção padrão para link preview) com:
- Fundo no gradiente da marca (azul escuro do Hero)
- Título "Noções Básicas de Medicina Legal"
- Selo "GRATUITO · 10h · Certificado"
- "Instituto Vianna Júnior · Juiz de Fora/MG"
- Logo do Vianna Jr.

Salva em `public/og-image.jpg` (servida na raiz do site).

### 2. Reescrever os metadados do `index.html`
- Corrigir/expandir os existentes
- Adicionar `og:url`, `og:site_name`, `og:locale` (`pt_BR`), `og:image:width`/`height`/`alt`
- Adicionar `<link rel="canonical">` apontando pra `https://med-legal.lovable.app`
- Adicionar `theme-color` (azul da marca) — pinta a barra do navegador no celular
- Adicionar `keywords` (medicina legal, curso, Vianna Júnior, Juiz de Fora, Tribunal do Júri)
- Apontar a imagem OG pra `/og-image.jpg`

### 3. Favicon
Hoje `public/favicon.ico` é o padrão do Lovable. Substituir por uma versão simples baseada no logo do Vianna Jr. (mesma marca que aparece na aba do navegador).

### 4. Verificação
Após aplicar, gerar screenshot do `og-image.jpg` e conferir visualmente que está legível, sem texto cortado e com a marca correta.

## Detalhes técnicos

**Arquivos alterados/criados:**
- `index.html` — substituir o bloco de metas atual por versão completa
- `public/og-image.jpg` — novo (gerado via script Python/Pillow no `/tmp`)
- `public/favicon.ico` — substituir pelo favicon do Vianna Jr.

**URL canônica usada:** `https://med-legal.lovable.app` (URL publicada do projeto).

**Não será mexido:** nenhum componente React, nenhuma rota, nenhum estilo da página. Só `<head>` e arquivos estáticos em `public/`.