"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry from IA Perma website");
    formData.append("from_name", "IA Perma Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {!WEB3FORMS_ACCESS_KEY ? (
        <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs text-accent-dark">
          Form is not fully configured yet: add your Web3Forms access key to
          <code className="mx-1 rounded bg-surface px-1.5 py-0.5">.env.local</code>
          as <code className="rounded bg-surface px-1.5 py-0.5">NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-ink">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
          placeholder="+92 3XX XXXXXXX"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
          placeholder="Tell us about your business and what you'd like to automate"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <div aria-live="polite">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-secondary-dark">
            <CheckCircle2 size={16} />
            Thanks — your message has been sent. We&apos;ll get back to you shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600">
            <AlertCircle size={16} />
            Something went wrong. Please try again or email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
