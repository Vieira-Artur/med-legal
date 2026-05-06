const topics = [
  { n: "01", t: "Introdução à Medicina Legal", d: "Conceito, histórico, peritos oficiais e a estrutura da perícia no Brasil." },
  { n: "02", t: "Documentos médico-legais, perícia e perito", d: "Notificação, atestado, relatório, parecer, laudo pericial e a atuação do perito." },
  { n: "03", t: "Corpo de delito", d: "Exame de corpo de delito direto e indireto e sua relevância probatória." },
  { n: "04", t: "Antropologia forense", d: "Estudo dos ossos e estimativas de sexo, idade, estatura e ancestralidade." },
  { n: "05", t: "Identificação médico-legal", d: "Métodos de identificação aplicados à Medicina Legal." },
  { n: "06", t: "Identificação policial e judiciária", d: "Sistema datiloscópico e demais técnicas de identificação humana." },
  { n: "07", t: "Traumatologia forense", d: "Lesões por instrumentos contundentes, perfurantes, cortantes e perfurocortantes." },
  { n: "08", t: "Lesões e morte por PAF", d: "Lesões e morte causadas por projéteis de arma de fogo." },
  { n: "09", t: "Energias de ordem física", d: "Lesões por temperatura, eletricidade, pressão e radiações." },
  { n: "10", t: "Energias de ordem química", d: "Cáusticos, venenos e demais agentes químicos lesivos." },
  { n: "11", t: "Toxicofilia", d: "Drogas de abuso, dependência química e implicações médico-legais." },
  { n: "12", t: "Asfixiologia", d: "Asfixias mecânicas: enforcamento, estrangulamento, esganadura, afogamento e sufocação." },
  { n: "13", t: "Tanatologia", d: "Fenômenos cadavéricos, cronotanatognose e causa jurídica da morte." },
];

export const Program = () => {
  return (
    <section id="programa" className="py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Conteúdo programático</span>
          <h2 className="section-title mt-3">
            Treze blocos temáticos em um sábado de imersão
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
