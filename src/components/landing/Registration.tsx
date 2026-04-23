import { Button } from "@/components/ui/button";
import { ExternalLink, Gift } from "lucide-react";

const FORM_URL = "https://forms.gle/hKV9H1PHXyiJ6wR66";
// Embed equivalent (Google Forms accepts /viewform?embedded=true via the share link)
const FORM_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLSdummy/viewform?embedded=true";

export const Registration = () => {
  return (
    <section id="inscricao" className="py-20 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow justify-center">Inscrição</span>
          <h2 className="section-title mt-3">Garanta a sua vaga</h2>
          <span className="accent-rule" />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground shadow-accent">
            <Gift className="h-4 w-4" />
            Inscrição 100% gratuita · Vagas limitadas
          </div>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
            Preencha o formulário abaixo. Em caso de qualquer dificuldade, você
            também pode acessá-lo diretamente no Google Forms.
          </p>
        </div>

        {/* Embed */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          <iframe
            src={FORM_URL}
            title="Formulário de inscrição"
            className="h-[1100px] w-full"
            loading="lazy"
          >
            Carregando…
          </iframe>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              Abrir formulário em nova aba
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
