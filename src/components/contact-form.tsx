"use client";

import { contact } from "@/data/site";
import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type FormState = { fullName: string; mobile: string; email: string; message: string };
type Status = "idle" | "submitting" | "done" | "error";

const initialState: FormState = { fullName: "", mobile: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contact.formEndpoint) {
      setStatus("done");
      setFeedback(
        "Demo mode: your message was not sent. Connect a form endpoint in src/data/site.ts to receive enquiries.",
      );
      setValues(initialState);
      return;
    }

    setStatus("submitting");
    setFeedback("");
    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("done");
      setFeedback("Thank you. Your message has been received.");
      setValues(initialState);
    } catch {
      setStatus("error");
      setFeedback("The message could not be sent. Please try again or use the contact details provided.");
    }
  };

  const inputClass =
    "w-full border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy placeholder:text-slate-600 transition-colors focus:border-saffron focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {contact.formFields.fullName} <span className="text-saffron-ink">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="mobile" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {contact.formFields.mobile} <span className="text-saffron-ink">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            required
            pattern="[0-9+\s-]{7,18}"
            value={values.mobile}
            onChange={(event) => update("mobile", event.target.value)}
            placeholder="Mobile number"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {contact.formFields.email} <span className="text-saffron-ink">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {contact.formFields.message} <span className="text-saffron-ink">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Write your message here"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-3 bg-navy px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-royal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>

      {feedback ? (
        <p
          role="status"
          className={`border-l-2 px-4 py-3 text-sm leading-relaxed ${
            status === "error" ? "border-red-500 bg-red-50 text-red-700" : "border-saffron bg-saffron/5 text-navy"
          }`}
        >
          {feedback}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-slate-600">
        Form fields are ready for a verified backend. No personal data is stored by this demonstration form.
      </p>
    </form>
  );
}
