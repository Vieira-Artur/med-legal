import { Stethoscope, Scale, FileSearch, ShieldCheck, Gavel } from "lucide-react";

const points = [
  {
    icon: FileSearch,
    title: "Leitura crítica de laudos",
    text: "Saber interpretar laudos cadavéricos, de lesão corporal e de exame de corpo de delito é essencial para qualquer atuação criminal qualificada.",
  },
  {
    icon: Gavel,
    title: "Atuação no Tribunal do Júri",
    text: "Quem domina a Medicina Legal formula quesitos melhores, faz inquirições mais precisas e constrói teses mais sólidas em plenário.",
  },
  {
    icon: ShieldCheck,
    title: "Cadeia de custódia da prova",
    text: "Compreender a coleta, transporte e preservação de vestígios é diferencial em impugnações e nulidades probatórias.",
  },
  {
    icon: Scale,
    title: "Diferencial profissional",
    text: "Para advogados, delegados, membros do Ministério Público e da Magistratura, a Medicina Legal é hoje uma exigência prática — não mais um luxo acadêmico.",
  },
];

export const Importance = () => {
  return (
    <section id="importancia" className="bg-secondary py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Por que estudar</span>
          <h2 className="section-title mt-3">
            A Medicina Legal é a ponte entre a perícia e a Justiça
          </h2>
          <span className="accent-rule" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-justify hyphens-auto">
            Nenhum processo criminal grave caminha sem prova pericial. Dominar a
            linguagem da Medicina Legal é o que separa o operador do Direito que
            apenas <em>cita</em> um laudo daquele que efetivamente o{" "}
            <em>compreende, questiona e usa estrategicamente</em>.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border-l-4 border-accent bg-card p-6 shadow-card transition-smooth hover:shadow-elegant"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-5 shadow-card">
          <Stethoscope className="h-6 w-6 flex-shrink-0 text-accent" />
          <p className="text-sm text-foreground/80 md:text-base">
            <strong className="text-primary">Para quem é o curso:</strong>{" "}
            advogados criminalistas, estudantes de Direito, candidatos a
            concursos da área criminal.
          </p>
        </div>
      </div>
    </section>
  );
};
