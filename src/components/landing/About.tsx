export const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <span className="section-eyebrow">Sobre o curso</span>
          <h2 className="section-title mt-3">
            Uma aula especial, aberta a toda a comunidade Vianna
          </h2>
          <span className="accent-rule" />
        </div>

        <div className="space-y-5 text-base leading-relaxed text-foreground/85 lg:col-span-7 lg:text-lg">
          <p>
            Uma imersão prática para advogados, estudantes e profissionais do
            Direito que querem dominar a leitura de laudos periciais, atuar
            com segurança no Tribunal do Júri e elevar sua atuação criminal.
          </p>
          <p>
            Em um único sábado de imersão, você vai conhecer os fundamentos da
            Medicina Legal aplicados ao dia a dia do operador do Direito: como
            ler um laudo cadavérico, identificar inconsistências em perícias,
            formular quesitos e atuar com mais segurança no Tribunal do Júri.
          </p>
          <p className="rounded-lg border-l-4 border-accent bg-accent-soft px-5 py-4 text-foreground">
            <strong>Vagas limitadas.</strong> Inscrição gratuita mediante
            preenchimento do formulário ao final desta página.
          </p>
        </div>
      </div>
    </section>
  );
};
