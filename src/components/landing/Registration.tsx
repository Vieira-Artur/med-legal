import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ExternalLink, Gift, Loader2 } from "lucide-react";

const FORM_ID = "1FAIpQLSfukJb7Kz_g-pkVw8RCFkcSTkDPVUKlwJi-G1VJS7me6R0XYw";
const FORM_ACTION = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
const FORM_FALLBACK_URL = "https://forms.gle/hKV9H1PHXyiJ6wR66";

const ENTRY = {
  nome: "entry.162190520",
  cpf: "entry.2027078131",
  email: "entry.1652942869",
} as const;

const schema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, { message: "Informe seu nome completo" })
    .max(120, { message: "Nome muito longo" }),
  cpf: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido (use 000.000.000-00)" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(255, { message: "E-mail muito longo" }),
});

type FormValues = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormValues, string>>;

const maskCPF = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
};

export const Registration = () => {
  const [values, setValues] = useState<FormValues>({ nome: "", cpf: "", email: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const next = field === "cpf" ? maskCPF(raw) : raw;
    setValues((prev) => ({ ...prev, [field]: next }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    const body = new FormData();
    body.append(ENTRY.nome, parsed.data.nome);
    body.append(ENTRY.cpf, parsed.data.cpf);
    body.append(ENTRY.email, parsed.data.email);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
      // Google Analytics: track conversion
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "sign_up", {
          event_category: "engagement",
          event_label: "Inscrição curso Medicina Legal",
        });
      }
    } catch {
      setStatus("error");
    }
  };

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
            Preencha seus dados abaixo para confirmar sua participação no curso.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center" aria-live="polite">
              <CheckCircle2 className="h-16 w-16 text-primary" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-primary">
                Inscrição confirmada!
              </h3>
              <p className="mt-3 text-muted-foreground">
                Recebemos seus dados. Em breve você receberá mais informações
                sobre o curso por e-mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  value={values.nome}
                  onChange={handleChange("nome")}
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                  disabled={status === "submitting"}
                />
                {errors.nome && (
                  <p id="nome-error" role="alert" className="text-sm text-destructive">
                    {errors.nome}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpf">CPF *</Label>
                <Input
                  id="cpf"
                  name="cpf"
                  type="text"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  value={values.cpf}
                  onChange={handleChange("cpf")}
                  aria-invalid={!!errors.cpf}
                  aria-describedby={errors.cpf ? "cpf-error" : undefined}
                  disabled={status === "submitting"}
                  maxLength={14}
                />
                {errors.cpf && (
                  <p id="cpf-error" role="alert" className="text-sm text-destructive">
                    {errors.cpf}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={status === "submitting"}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="w-full bg-accent font-semibold text-accent-foreground shadow-accent hover:bg-accent/90"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  "Confirmar inscrição"
                )}
              </Button>

              {status === "error" && (
                <div role="alert" className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                  Não foi possível enviar agora.{" "}
                  <a
                    href={FORM_FALLBACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold underline"
                  >
                    Use o formulário no Google Forms
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                  .
                </div>
              )}

              <p className="text-center text-xs text-muted-foreground">
                Ao se inscrever, você concorda em receber comunicações sobre este curso.
              </p>
              <p className="text-center text-[11px] text-muted-foreground/70">
                Seus dados são utilizados exclusivamente para matrícula e emissão de certificado, conforme a LGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
