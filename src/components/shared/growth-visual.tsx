"use client";

import { useRef, useState, type FocusEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { quickLeadSchema, type QuickLeadValues } from "@/lib/validations/quick-lead";
import { getClientLeadMetadata } from "@/lib/lead-metadata";

const defaultBars = [34, 48, 42, 60, 55, 76, 94];

interface GrowthMetric {
  value: string;
  label: string;
}

interface GrowthVisualProps {
  eyebrow?: string;
  heading?: string;
  trendBadge?: string;
  bars?: number[];
  metrics?: GrowthMetric[];
}

export function GrowthVisual({
  eyebrow = "Ad spend performance",
  heading = "Last 7 weeks",
  trendBadge = "+38%",
  bars = defaultBars,
  metrics = [
    { value: "4.2x", label: "Average ROAS" },
    { value: "-31%", label: "Cost per lead" },
  ],
}: GrowthVisualProps) {
  const [flipped, setFlipped] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const open = () => setFlipped(true);
  const requestClose = () => {
    if (!formActive) setFlipped(false);
  };
  const forceClose = () => {
    setFormActive(false);
    setFlipped(false);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (containerRef.current && !containerRef.current.contains(e.relatedTarget as Node | null)) {
      setFormActive(false);
      setFlipped(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="group/card relative w-full max-w-md [perspective:1800px]"
      onMouseEnter={open}
      onMouseLeave={requestClose}
      onFocus={open}
      onBlur={handleBlur}
    >
      {/* Ambient halo — a slow-rotating light behind the card that wakes up on hover */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 rounded-[2rem] opacity-30 blur-3xl transition-opacity duration-700 group-hover/card:opacity-80"
        style={{
          background:
            "conic-gradient(from 90deg, hsl(var(--primary)/0.5), transparent 30%, transparent 70%, hsl(var(--primary)/0.35))",
        }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative h-[430px] w-full sm:h-[450px] [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 19 }}
      >
        {/* ---------- FRONT ---------- */}
        <div
          className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/80 p-6 shadow-glow-sm backdrop-blur [backface-visibility:hidden]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Floating aurora blobs */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
            animate={reduceMotion ? undefined : { y: [0, 12, 0], x: [0, -8, 0] }}
            transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
            animate={reduceMotion ? undefined : { y: [0, -10, 0], x: [0, 10, 0] }}
            transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{eyebrow}</p>
              <p className="mt-1 font-display text-lg font-semibold">{heading}</p>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" /> {trendBadge}
            </span>
          </div>

          <div
            className="relative mt-6 flex h-28 items-end gap-2"
            role="img"
            aria-label={`Chart illustrating ${eyebrow.toLowerCase()} (${heading.toLowerCase()}), with ${metrics
              .map((m) => `${m.value} ${m.label.toLowerCase()}`)
              .join(" and ")}`}
          >
            {bars.map((height, i) => {
              const isLast = i === bars.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className={cn(
                    "flex-1 rounded-t-md",
                    isLast ? "bg-gradient-to-t from-primary to-lime shadow-glow-sm" : "bg-white/10"
                  )}
                />
              );
            })}
          </div>

          <div
            className={cn(
              "relative mt-6 grid gap-3 border-t border-white/10 pt-4",
              metrics.length > 1 ? "grid-cols-2" : "grid-cols-1"
            )}
          >
            {metrics.map((metric) => {
              const isDown = metric.value.trim().startsWith("-");
              const Icon = isDown ? TrendingDown : TrendingUp;
              return (
                <div key={metric.label} className="flex items-start gap-2">
                  <Icon className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-display text-xl font-semibold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={open}
            onFocus={open}
            className="group/cta relative mt-auto flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              Get results like this for your business
            </span>
            <ArrowRight
              className="h-4 w-4 text-primary transition-transform duration-300 group-hover/cta:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* ---------- BACK ---------- */}
        <div
          className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border border-primary/25 bg-card/95 p-6 shadow-glow backdrop-blur [backface-visibility:hidden]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          onFocus={() => setFormActive(true)}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          />

          <QuickLeadForm onDone={forceClose} onBack={forceClose} eyebrow={eyebrow} />
        </div>
      </motion.div>
    </div>
  );
}

function QuickLeadForm({
  onDone,
  onBack,
  eyebrow,
}: {
  onDone: () => void;
  onBack: () => void;
  eyebrow: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuickLeadValues>({
    resolver: zodResolver(quickLeadSchema),
    defaultValues: { name: "", phone: "", company_website: "" },
  });

  const onSubmit = async (values: QuickLeadValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/quick-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "growth-card", ...getClientLeadMetadata() }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-lg font-semibold">You&apos;re on the list</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll call within 24 hours with a free growth plan built for your numbers.
        </p>
        <button
          type="button"
          onClick={onDone}
          className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back to results
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col">
      <button
        type="button"
        onClick={onBack}
        className="flex w-fit items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back
      </button>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary">{eyebrow}</p>
      <h3 className="mt-1 text-balance font-display text-lg font-semibold leading-snug">
        Want numbers like these for your business?
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Leave your number — we&apos;ll call within 24 hours with a free growth plan.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-1 flex-col gap-4" noValidate>
        {/* Honeypot — hidden from real visitors, left for bots to fill in */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="quick-lead-company-website">Leave this field empty</label>
          <input
            id="quick-lead-company-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />
        </div>

        <div>
          <Label htmlFor="quick-lead-name" className="sr-only">
            Full name
          </Label>
          <Input id="quick-lead-name" placeholder="Your name" autoComplete="name" {...register("name")} />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="quick-lead-phone" className="sr-only">
            Phone number
          </Label>
          <Input
            id="quick-lead-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            {...register("phone")}
          />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>

        {status === "error" ? (
          <p className="text-xs text-destructive">Something went wrong. Please try again.</p>
        ) : null}

        <div className="mt-auto space-y-3">
          <Button type="submit" className="w-full" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            Get my free growth plan
          </Button>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            No spam. Your number stays private.
          </p>
        </div>
      </form>
    </div>
  );
}
