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

        <div className="space-y-5 text-base leading-relaxed text-foreground/85 lg:col-span-7 lg:text-lg text-justify hyphens-auto">
          <p>
            Uma introdução prática à Medicina Legal voltada para advogados,
            estudantes, concurseiros e profissionais do Direito que desejam
            compreender melhor a leitura de laudos periciais, formular quesitos
            e atuar com mais segurança em casos que envolvem prova técnica.
          </p>
          <p>
            Em um sábado de imersão, você terá contato com os principais
            fundamentos da Medicina Legal aplicados ao cotidiano jurídico:
            noções de leitura de laudo cadavérico, identificação de pontos
            relevantes e possíveis inconsistências em perícias, além de
            estratégias básicas para utilização dessa prova no processo penal,
            especialmente no Tribunal do Júri.
          </p>
          <p>
            O conteúdo também dialoga com a preparação para concursos públicos,
            com abordagem de temas recorrentes como lesões corporais, causa da
            morte, fenômenos cadavéricos e estimativa do tempo de morte.
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
