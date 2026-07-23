"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type FormEvent } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const length = testimonials.length;
  const active = useMemo(() => testimonials[activeIndex], [activeIndex]);

  const stop = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
    stop();
  }, [length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
    stop();
  }, [length]);

  useEffect(() => {
    if (length <= 1) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => stop();
  }, [length]);

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          const isLeft = (activeIndex - 1 + length) % length === index;
          const isRight = (activeIndex + 1) % length === index;

          let style: CSSProperties = { zIndex: 1, opacity: 0, pointerEvents: "none" };
          if (isActive) {
            style = { zIndex: 3, opacity: 1, pointerEvents: "auto", transform: "translateX(0) scale(1)" };
          } else if (isLeft) {
            style = {
              zIndex: 2,
              opacity: 1,
              pointerEvents: "auto",
              transform: "translateX(-30px) translateY(-20px) scale(0.85) rotate(-6deg)",
            };
          } else if (isRight) {
            style = {
              zIndex: 2,
              opacity: 1,
              pointerEvents: "auto",
              transform: "translateX(30px) translateY(-20px) scale(0.85) rotate(6deg)",
            };
          }

          return (
            <div
              key={testimonial.id}
              className="absolute inset-0 overflow-hidden rounded-3xl border border-border shadow-xl transition-all duration-700 ease-out"
              style={style}
            >
              <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 text-accent">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-ink sm:text-xl">“{active.quote}”</p>
            <div>
              <p className="text-sm font-semibold text-ink">{active.name}</p>
              <p className="text-xs text-body-text">{active.designation}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {length > 1 ? (
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors hover:border-primary/40 hover:text-primary-dark cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New review submitted — IA Perma website");
    formData.append("from_name", "IA Perma Website Reviews");
    formData.append("rating", String(rating));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setRating(5);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-ink">Share your experience</h3>
      <p className="mt-1 text-sm text-body-text">
        Worked with IA Perma? We&apos;d love to hear about it. Reviews are checked before
        being published.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
        {!WEB3FORMS_ACCESS_KEY ? (
          <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-xs text-accent-dark">
            Form is not fully configured yet: add your Web3Forms access key to
            <code className="mx-1 rounded bg-background px-1.5 py-0.5">.env.local</code>
            as{" "}
            <code className="rounded bg-background px-1.5 py-0.5">
              NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
            </code>
            .
          </p>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="review-name" className="text-sm font-medium text-ink">
              Your Name <span className="text-accent">*</span>
            </label>
            <input
              id="review-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="review-role" className="text-sm font-medium text-ink">
              Company / Role
            </label>
            <input
              id="review-role"
              name="role"
              type="text"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
              placeholder="e.g. Operations Manager, ABC Traders"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="review-email" className="text-sm font-medium text-ink">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="review-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            placeholder="you@company.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-ink">Your Rating</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const starValue = i + 1;
              const filled = starValue <= (hoverRating || rating);
              return (
                <button
                  key={starValue}
                  type="button"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoverRating(starValue)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
                  className="cursor-pointer text-accent transition-transform hover:scale-110"
                >
                  <Star size={22} fill={filled ? "currentColor" : "none"} strokeWidth={filled ? 0 : 1.5} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="review-message" className="text-sm font-medium text-ink">
            Your Review <span className="text-accent">*</span>
          </label>
          <textarea
            id="review-message"
            name="message"
            required
            rows={4}
            className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
            placeholder="Tell us about your experience working with IA Perma"
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
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </button>

        <div aria-live="polite">
          {status === "success" ? (
            <p className="flex items-center gap-2 text-sm font-medium text-secondary-dark">
              <CheckCircle2 size={16} />
              Thank you — your review has been received and will be reviewed shortly.
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
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/60 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Client Voices"
          title="What businesses say after working with us"
          description="Real feedback from teams running on systems we've built — and we'd love to hear from you too."
        />

        <div className="mt-14">
          <TestimonialCarousel />
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <ReviewForm />
        </div>
      </div>
    </section>
  );
}