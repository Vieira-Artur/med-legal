import { GraduationCap, Shield, BookOpen, Award } from "lucide-react";
import profPhoto from "@/assets/prof-artur.jpg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Mestre em Direito",
    text: "Universidade Católica de Petrópolis (UCP-RJ)",
  },
  {
    icon: Shield,
    title: "Ex-Delegado de Polícia Civil",
    text: "Estado da Bahia — vivência prática em investigação criminal",
  },
  {
    icon: BookOpen,
    title: "Autor",
    text: "Direito Penal e os Direitos Sociais — Editora Dialética",
  },
  {
    icon: Award,
    title: "Formação complementar",
    text: "Bacharel em Direito (UFJF) · MBAs USP-ESALQ · Especializações em Direito Público e Penal/Processual Penal",
  },
];

export const Professor = () => {
  return (
    <section id="professor" className="bg-secondary py-20 md:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto w-fit lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-gradient-accent opacity-20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-full border-4 border-card shadow-elegant">
                <img
                  src={profPhoto}
                  alt="Prof. Artur Vieira"
                  className="h-56 w-56 object-cover md:h-64 md:w-64"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-accent">
                Professor
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-8">
            <span className="section-eyebrow">Quem ministra</span>
            <h2 className="section-title mt-3">Prof. Artur Vieira</h2>
            <span className="accent-rule" />

            <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              Mestre em Direito pela Universidade Católica de Petrópolis e
              ex-Delegado da Polícia Civil da Bahia, o Prof. Artur reúne sólida
              formação acadêmica e vivência prática em investigação criminal.
              Atua como professor de Graduação e Pós-Graduação no Instituto
              Vianna Júnior e em cursinhos preparatórios de referência.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {credentials.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">{title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
