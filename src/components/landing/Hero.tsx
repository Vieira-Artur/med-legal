import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Award, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero text-primary-foreground"
    >
      {/* Decorative texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-primary-glow/30 blur-3xl"
      />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="section-eyebrow text-accent-soft">
            <Sparkles className="h-3.5 w-3.5" />
            Curso de Extensão · Instituto Vianna Júnior
          </span>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            Noções Básicas de{" "}
            <span className="text-accent-soft">Medicina Legal</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Noções Básicas de Medicina Legal é uma disciplina especial dentro
            da Pós-Graduação em Direito Penal, Processo Penal e Tribunal do
            Júri do Instituto Vianna Júnior — agora também aberta,{" "}
            <strong className="font-semibold text-accent">GRATUITA</strong>, em
            formato de curso de extensão, a alunos e ex-alunos das FIVJ.
          </p>

          {/* Free badge */}
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border-2 border-accent bg-accent/15 px-5 py-2.5 backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            <span className="text-sm font-bold uppercase tracking-wider text-accent-soft">
              Inscrição 100% gratuita
            </span>
          </div>

          {/* Quick facts */}
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-primary-foreground/90 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent-soft" />
              Sábado · data a definir
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-soft" />
              10h de carga horária
            </li>
            <li className="flex items-center gap-2">
              <Award className="h-4 w-4 text-accent-soft" />
              Certificado de extensão
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent-soft" />
              Juiz de Fora · MG
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-base"
            >
              <a href="#inscricao">Quero me inscrever</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base"
            >
              <a href="#sobre">Saiba mais</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
