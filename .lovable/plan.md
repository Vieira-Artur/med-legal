## Botão flutuante do WhatsApp

Adicionar um botão verde fixo no canto inferior direito da tela (visível em todas as seções) com o ícone do WhatsApp e o texto **"Tire suas dúvidas"**. Ao clicar, abre o WhatsApp Web/app com uma mensagem pré-preenchida.

## O que vai ser feito

### 1. Criar `src/components/landing/WhatsAppButton.tsx`
- Botão `position: fixed` no canto inferior direito (`bottom-5 right-5`, com `z-50` para ficar por cima de tudo)
- Cor verde oficial do WhatsApp (`#25D366`), com hover mais escuro e leve zoom
- Ícone (`MessageCircle` do lucide-react) + texto "Tire suas dúvidas"
- Link `https://wa.me/<NUMERO>?text=<mensagem-prefixada>` abrindo em nova aba
- **Número placeholder** `5500000000000` com um comentário `// TODO` em destaque para você trocar quando me mandar
- Mensagem pré-preenchida: *"Olá! Tenho uma dúvida sobre o curso de Noções Básicas de Medicina Legal."*
- `aria-label` para acessibilidade

### 2. Montar o botão no `src/pages/Index.tsx`
- Importar `WhatsAppButton`
- Renderizar logo após o `<Footer />`, fora do `<main>`, para ficar fixo sobre a página inteira

## Detalhes

- Visível em mobile e desktop (botão compacto, não atrapalha leitura)
- Quando você me mandar o número, troco apenas a constante `WHATSAPP_NUMBER` no arquivo
- Não mexe em nenhum outro componente