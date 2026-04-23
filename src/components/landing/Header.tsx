import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vianna-logo.png";

const links = [
  { href: "#sobre", label: "Sobre o curso" },
  { href: "#importancia", label: "Importância" },
  { href: "#programa", label: "Programa" },
  { href: "#professor", label: "Professor" },
  { href: "#local", label: "Local" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Instituto Vianna Júnior">
          <img src={logo} alt="Instituto Vianna Júnior" className="h-9 w-auto md:h-11" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent">
            <a href="#inscricao">Inscreva-se</a>
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="#inscricao" onClick={() => setOpen(false)}>
                Inscreva-se
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
