import { Facebook, Instagram, Mail } from "lucide-react";
import logo from "@/assets/vianna-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="rounded-md bg-white p-3">
              <img src={logo} alt="Instituto Vianna Júnior" className="h-12 w-auto" />
            </div>
          </div>

          <p className="text-center text-sm leading-relaxed text-primary-foreground/80">
            Curso de extensão <strong>Noções Básicas de Medicina Legal</strong>
            <br />
            Instituto Vianna Júnior — Juiz de Fora/MG
          </p>

          <div className="flex justify-center gap-3 md:justify-end">
            <a
              href="https://www.instagram.com/viannajuniorjf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/institutoviannajunior/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:viannajr@vianna.edu.br"
              aria-label="E-mail"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Instituto Vianna Júnior. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};
