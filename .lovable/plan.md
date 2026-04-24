
# Substituir iframe do Google Forms por formulário nativo

## Problema
O iframe do Google Forms exibe cabeçalho do Google, descrição do form, aviso "Indica perguntas obrigatórias", logo do Forms e rodapé "Nunca envie senhas...". Isso quebra o visual da landing e deixa óbvio que é um Google Forms.

## Solução
Trocar o iframe por um formulário HTML nativo, estilizado com a paleta institucional, que envia os dados para o mesmo Google Forms via `fetch` no endpoint `formResponse` (técnica padrão e confiável). Para o usuário, parece um formulário próprio da página.

## O que vou fazer no `Registration.tsx`

1. **Remover** o `<iframe>` e o link "Abrir formulário em nova aba" (mantenho um link discreto de fallback caso ocorra erro de envio).

2. **Adicionar formulário nativo** com estes campos (apenas o essencial, como você pediu):
   - Nome completo
   - CPF (com máscara automática `000.000.000-00`)
   - E-mail
   - Telefone/WhatsApp (com máscara `(00) 00000-0000`)
   - Vínculo com a Vianna Jr (select: Aluno da Pós · Aluno da Graduação · Ex-aluno · Outro)
   - Botão "Confirmar inscrição" em vermelho institucional

3. **Validação** em tempo real (campos obrigatórios, formato de e-mail e CPF).

4. **Envio**: `POST` para `https://docs.google.com/forms/d/e/{FORM_ID}/formResponse` em modo `no-cors` (envio funciona, browser apenas não lê a resposta — comportamento esperado e amplamente usado).

5. **Estado de sucesso**: ao confirmar, esconde o formulário e mostra uma mensagem elegante: "Inscrição recebida! Você receberá a confirmação por e-mail." com ícone de check.

6. **Estado de erro**: se o `fetch` falhar (raro), mostra mensagem com link para o Google Forms original como fallback.

## O que preciso de você (uma única ação rápida)

Para mapear cada campo da landing ao campo correto do seu Google Forms, preciso dos **IDs internos dos campos** (`entry.XXXXXXXXX`). Existem duas opções:

**Opção A (mais simples — você faz em 1 minuto):**
1. Abra seu Google Form em modo de edição
2. Clique nos três pontinhos (⋮) no topo → "Obter link pré-preenchido"
3. Preencha cada campo com um valor de teste (ex: "Nome Teste", "111.111.111-11", etc.)
4. Clique em "Obter link" no rodapé → "Copiar link"
5. Cole o link aqui — eu extraio os `entry.IDs` automaticamente

**Opção B:** me confirme quais campos seu Google Form tem hoje (Nome, CPF, E-mail, Telefone, Vínculo?) e eu monto a página, deixando os `entry.IDs` como `TODO` para você preencher depois com o passo da Opção A.

## Detalhes técnicos
- Componente continua client-side puro, sem backend.
- Máscaras implementadas com `onChange` simples (sem dependências novas).
- Acessibilidade: `<label>` associado a cada `<input>`, mensagens de erro com `aria-live`.
- Visual: usa os componentes `Input`, `Label`, `Button` e `Select` já existentes em `src/components/ui/`, respeitando os tokens de cor da landing.
