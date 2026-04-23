import { MapPin, Phone, Mail } from "lucide-react";

const ADDRESS = "Av. dos Andradas, 415 — Centro, Juiz de Fora/MG";
const MAP_QUERY = encodeURIComponent("Av. dos Andradas, 415, Centro, Juiz de Fora, MG");
const MAP_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

export const Location = () => {
  return (
    <section id="local" className="bg-secondary py-20 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Onde acontece</span>
          <h2 className="section-title mt-3">Local e contato</h2>
          <span className="accent-rule" />
          <p className="mt-5 text-muted-foreground md:text-lg">
            O curso será realizado na sede do Instituto Vianna Júnior, no
            Centro de Juiz de Fora — fácil acesso e estrutura completa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">Endereço</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">Telefones</h3>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    <li>
                      <a href="tel:+553232392940" className="hover:text-accent">
                        (32) 3239-2940
                      </a>
                    </li>
                    <li>
                      <a href="tel:+5532991274197" className="hover:text-accent">
                        (32) 99127-4197
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">E-mail</h3>
                  <p className="mt-1 text-sm">
                    <a
                      href="mailto:viannajr@vianna.edu.br"
                      className="text-muted-foreground hover:text-accent"
                    >
                      viannajr@vianna.edu.br
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-card lg:col-span-3">
            <iframe
              src={MAP_SRC}
              title="Mapa — Instituto Vianna Júnior"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
