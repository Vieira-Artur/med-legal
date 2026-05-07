import { Gift, Clock, Award, Users, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Gift,
    title: "Gratuito",
    desc: "Inscrição sem custo para alunos e ex-alunos",
    featured: true,
  },
  { icon: Clock, title: "Certificado de 10h", desc: "" },
  { icon: Award, title: "Certificado", desc: "Curso oficial de extensão" },
  { icon: Users, title: "Aberto", desc: "Alunos e ex-alunos do Vianna Jr." },
  { icon: CalendarDays, title: "Sábado integral", desc: "27/06/2026" },
];

export const Highlights = () => {
  return (
    <section className="relative -mt-10 md:-mt-14">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {items.map(({ icon: Icon, title, desc, featured }) => (
            <div
              key={title}
              className={cn(
                "group relative rounded-xl border p-4 text-center shadow-card transition-smooth hover:-translate-y-1 md:p-5",
                featured
                  ? "border-accent bg-accent text-accent-foreground shadow-accent"
                  : "border-border bg-card text-card-foreground hover:border-accent/40"
              )}
            >
              <div
                className={cn(
                  "mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full",
                  featured
                    ? "bg-accent-foreground/15 text-accent-foreground"
                    : "bg-accent/10 text-accent"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3
                className={cn(
                  "font-serif text-lg font-bold",
                  featured ? "text-accent-foreground" : "text-primary"
                )}
              >
                {title}
              </h3>
              <p
                className={cn(
                  "mt-1 text-xs leading-snug md:text-sm",
                  featured
                    ? "text-accent-foreground/85"
                    : "text-muted-foreground"
                )}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
