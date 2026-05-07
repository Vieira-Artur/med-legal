## Ajustes a aplicar

### 1. Carga horária (8h de aula / 10h de certificado)
**`src/components/landing/Highlights.tsx`**
- Alterar o card "10 horas / Carga horária completa" para refletir corretamente:
  - Título: **"8 horas"**
  - Descrição: **"Certificado de 10h"** (computa atividades complementares)

Assim o Hero ("8h–12h e 13h–17h") fica coerente com o card, e o diferencial das 10h do certificado continua visível.

### 2. Público-alvo restrito (FIVJ)
**`src/components/landing/Importance.tsx`**
- No bloco final "Para quem é o curso", reescrever para deixar explícito que é **exclusivo para alunos e ex-alunos do Instituto Vianna Júnior** — mantendo a menção a advogados criminalistas, estudantes e concurseiros como perfil dentro desse público.

Texto sugerido:
> **Para quem é o curso:** alunos e ex-alunos do Instituto Vianna Júnior — advogados criminalistas, estudantes de Direito e candidatos a concursos da área criminal.

### 3. Header
- **Sem alteração.** Mantém só o botão CTA "Inscreva-se" (sem item de menu), conforme sua preferência.

### 4. Data
- **Sem alteração.** 27/06/2026 confirmada no Hero e Highlights.

---

## Fora do escopo (sugestão opcional)
Posso revisar o `index.html` (title, meta description, Open Graph para preview no WhatsApp) numa próxima rodada se quiser — me avise.
