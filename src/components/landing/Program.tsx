const topics = [
  { n: "01", t: "Introdução à Medicina Legal", d: "Conceito, histórico, peritos oficiais e a estrutura da perícia no Brasil." },
  { n: "02", t: "Traumatologia forense", d: "Lesões por instrumentos contundentes, perfurantes, cortantes e por projétil de arma de fogo." },
  { n: "03", t: "Tanatologia forense", d: "Fenômenos cadavéricos, cronotanatognose e causa jurídica da morte." },
  { n: "04", t: "Sexologia forense", d: "Crimes contra a dignidade sexual e principais exames periciais." },
  { n: "05", t: "Toxicologia forense", d: "Embriaguez, drogas de abuso e envenenamentos relevantes ao processo penal." },
  { n: "06", t: "Psicopatologia forense", d: "Imputabilidade, semi-imputabilidade e medidas de segurança." },
  { n: "07", t: "Documentos médico-legais", d: "Notificação, atestado, relatório, parecer e o laudo pericial." },
  { n: "08", t: "Aplicação no Tribunal do Júri", d: "Como usar a Medicina Legal na construção de teses, quesitos e inquirições." },
];

export const Program = () => {
  return (
    <section id="programa" className="py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Conteúdo programático</span>
          <h2 className="section-title mt-3">
            Oito blocos temáticos em um sábado de imersão
          </h2>
          <span className="accent-rule" />
          <p className="mt-5 text-muted-foreground md:text-lg">
            Programa pensado para entregar visão prática e aplicada — direto ao
            que o operador do Direito precisa em sua rotina.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ n, t, d }) => (
            <article
              key={n}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
            >
              <span className="font-serif text-3xl font-bold text-accent/30 transition-colors group-hover:text-accent">
                {n}
              </span>
              <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-primary">
                {t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs italic text-muted-foreground">
          * O conteúdo programático poderá sofrer pequenos ajustes a critério do
          professor.
        </p>
      </div>
    </section>
  );
};
