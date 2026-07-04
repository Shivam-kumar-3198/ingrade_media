"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactFormSchema, type ContactFormValues, budgetRanges, countries, serviceOptions } from "@/lib/validations/contact";
import { useSelectedCountry } from "@/hooks/use-selected-country";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      country: "",
      budget: "",
      services: [],
      message: "",
      company_website: "",
    },
  });

  const selectedServices = watch("services");
  const currentCountry = watch("country");
  const detectedCountry = useSelectedCountry();

  useEffect(() => {
    if (detectedCountry && !currentCountry) {
      setValue("country", detectedCountry.name);
    }
    // Only auto-fill once, when a detected country first becomes available and the field is still untouched.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detectedCountry]);

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
        <h3 className="mt-4 font-display text-xl font-semibold">Got it — we&apos;ll reply within one business day</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Check your inbox for a confirmation. If you don&apos;t see it in ten minutes, check spam before reaching out again.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real visitors, left for bots to fill in */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Leave this field empty</label>
        <input id="company_website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" className="mt-2" placeholder="Alex Morgan" {...register("name")} />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" className="mt-2" placeholder="alex@company.com" {...register("email")} />
          {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">Company name</Label>
          <Input id="company" className="mt-2" placeholder="Acme Inc." {...register("company")} />
          {errors.company ? <p className="mt-1 text-xs text-destructive">{errors.company.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="website">Website URL</Label>
          <Input id="website" className="mt-2" placeholder="acme.com" {...register("website")} />
          {errors.website ? <p className="mt-1 text-xs text-destructive">{errors.website.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="country">Country</Label>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="country" className="mt-2">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.country ? <p className="mt-1 text-xs text-destructive">{errors.country.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="budget">Monthly marketing budget</Label>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="budget" className="mt-2">
                  <SelectValue placeholder="Select a budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget ? <p className="mt-1 text-xs text-destructive">{errors.budget.message}</p> : null}
        </div>
      </div>

      <div>
        <Label>Which services are you interested in?</Label>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => {
            const checked = selectedServices?.includes(service.id);
            return (
              <label
                key={service.id}
                htmlFor={`service-${service.id}`}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-secondary/20 px-4 py-3 text-sm"
              >
                <Checkbox
                  id={`service-${service.id}`}
                  checked={checked}
                  onCheckedChange={(value) => {
                    const current = selectedServices ?? [];
                    if (value) {
                      setValue("services", [...current, service.id]);
                    } else {
                      setValue("services", current.filter((id) => id !== service.id));
                    }
                  }}
                />
                {service.label}
              </label>
            );
          })}
        </div>
        {errors.services ? <p className="mt-1 text-xs text-destructive">{errors.services.message}</p> : null}
      </div>

      <div>
        <Label htmlFor="message">What are you trying to fix or grow?</Label>
        <Textarea
          id="message"
          className="mt-2"
          placeholder="Tell us what's working, what isn't, and what you'd consider a win in 90 days."
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message.message}</p> : null}
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive">
          Something went wrong sending your message. Please try again or email {" "}
          <a href="mailto:hello@ingrademedia.com" className="underline">hello@ingrademedia.com</a> directly.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Get my free growth plan
      </Button>
    </form>
  );
}
