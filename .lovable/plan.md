
# Landing Page — Noções Básicas de Medicina Legal

Curso de extensão **gratuito** (10h, sábado a definir) ministrado pelo Prof. Artur Vieira no Instituto Vianna Júnior, aberto a alunos e ex-alunos.

## Identidade visual
- **Paleta institucional Vianna Jr**: azul-marinho `#1E2761` (dominante), vermelho `#C8102E` (acento), off-white `#F5F2EC` e branco. Tipografia: serifada elegante para títulos (Playfair Display) + sans-serif limpa (Inter) para corpo — transmite seriedade jurídica/acadêmica.
- Logo do Instituto no header e footer; foto do professor usada de forma discreta (retrato circular, médio porte, na seção "Sobre o Professor", não no hero).
- Motivo visual recorrente: filete vermelho fino abaixo dos títulos de seção e cards com borda lateral azul-marinho.

## Estrutura da página (one-page com âncoras)

1. **Header fixo** — Logo Vianna Jr à esquerda; navegação (Sobre o curso · Importância · Programa · Professor · Inscrição · Local); botão "Inscreva-se" em vermelho à direita.

2. **Hero** — Fundo azul-marinho com textura sutil. Tag "Curso de Extensão · Instituto Vianna Júnior". Título grande: *"Noções Básicas de Medicina Legal"*. Subtítulo: ferramenta essencial para a atuação criminal. Selo de destaque **"Inscrição gratuita"** logo abaixo do título. Linha de destaques (sábado · data a definir · 10h · certificado · presencial em Juiz de Fora). Dois CTAs: "Quero me inscrever" (vermelho) e "Saiba mais" (outline).

3. **Faixa de destaques (5 cards)** — **Gratuito** · 10h de carga horária · Certificado de extensão · Aberto a alunos e ex-alunos · Sábado integral. Ícones em círculos vermelhos sobre fundo claro; o card "Gratuito" recebe destaque visual extra (fundo vermelho invertido).

4. **Sobre o curso** — Texto curto explicando que é uma aula especial dentro da Pós em Direito Penal, Processo Penal e Tribunal do Júri, com vagas abertas a alunos e ex-alunos de qualquer curso da instituição, sem custo.

5. **Por que estudar Medicina Legal?** — Bloco em duas colunas com texto + lista de 4-5 benefícios concretos: leitura crítica de laudos periciais, atuação no Tribunal do Júri, formulação de quesitos, compreensão de cadeia de custódia, diferencial profissional para advogados/delegados/MP/magistratura.

6. **Conteúdo programático** — Grid de tópicos (sugestão inicial que você revisa): Introdução e perícia oficial · Traumatologia forense · Tanatologia · Sexologia forense · Toxicologia · Psicopatologia forense · Documentos médico-legais · Aplicação no Tribunal do Júri.

7. **Sobre o Professor** — Layout em duas colunas: foto circular discreta à esquerda; à direita nome, cargo e bio enfatizando **Mestre em Direito (UCP-RJ)** e **ex-Delegado da Polícia Civil da Bahia**, complementado por graduação UFJF, MBAs USP-ESALQ, especializações em Direito Público e Penal/Processo Penal, professor da Vianna Jr. e autor do livro *Direito Penal e os Direitos Sociais* (Ed. Dialética).

8. **Inscrição** — Seção destacada com fundo claro. Reforço visual de **"Inscrição 100% gratuita · vagas limitadas"**. Google Forms embutido via `<iframe>` apontando para `https://forms.gle/hKV9H1PHXyiJ6wR66`, com link externo de fallback caso o iframe seja bloqueado.

9. **Local e contato** — Card com endereço *Av. dos Andradas, 415 — Centro, Juiz de Fora/MG*, mapa do Google Maps embutido, telefones ((32) 3239-2940 e (32) 99127-4197) e e-mail institucional.

10. **Footer** — Logo Vianna Jr, redes sociais oficiais da instituição, copyright.

## Considerações técnicas
- 100% responsiva (mobile-first), navegação com âncoras suaves.
- Foto do professor e logo copiados para `src/assets/` e importados como módulos.
- Design tokens (cores HSL, fontes) centralizados em `index.css` + `tailwind.config.ts`.
- Iframe do Google Forms já configurado com a URL fornecida e altura adequada.
