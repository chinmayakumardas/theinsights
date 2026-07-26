"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";

function sanitize(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function containsUrl(value: string) {
  return /(https?:\/\/|www\.|bit\.ly|t\.co)[^\s]*/i.test(value);
}

function isCleanText(value: string) {
  return !/[<>{}[\]\\\/$`|]/.test(value);
}

function isBlockedContent(value: string) {
  return containsUrl(value) || !isCleanText(value);
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Block typing links / code characters live
    if (name !== "email" && isBlockedContent(value)) {
      setError("Links and code are not allowed.");
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // Block paste of links / code
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const pasted = e.clipboardData.getData("text");
    const field = (e.target as HTMLInputElement | HTMLTextAreaElement).name;

    if (field !== "email" && isBlockedContent(pasted)) {
      e.preventDefault();
      setError("Links and code cannot be pasted.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const name = sanitize(form.name);
    const email = sanitize(form.email);
    const subject = sanitize(form.subject);
    const message = sanitize(form.message);

    if (!name || !email || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[a-zA-Z\s.'-]{2,50}$/.test(name)) {
      setError("Please enter a valid name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (containsUrl(subject) || containsUrl(message)) {
      setError("Links are not allowed.");
      return;
    }

    if (!isCleanText(subject) || !isCleanText(message) || !isCleanText(name)) {
      setError("Invalid characters detected.");
      return;
    }

    if (subject.length > 120) {
      setError("Subject is too long.");
      return;
    }

    if (message.length > 2000) {
      setError("Message is too long.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject,
          message,
          from_name: "Insights Contact Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-[1rem] bg-muted px-8 py-14 sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

          <div className="relative mx-auto max-w-xl">
            {status === "success" ? (
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="size-7 text-primary" />
                </div>
                <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Message sent!
                </h2>
                <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    Contact
                  </p>
                  <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                    Get in touch
                  </h2>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    Have a question or feedback? Send a message and we&apos;ll
                    reply soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    required
                    maxLength={50}
                    value={form.name}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    placeholder="Your name"
                    disabled={status === "loading"}
                    className="h-12 w-full rounded-full border bg-background px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={100}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                    className="h-12 w-full rounded-full border bg-background px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />

                  <input
                    name="subject"
                    type="text"
                    required
                    maxLength={120}
                    value={form.subject}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    placeholder="Subject"
                    disabled={status === "loading"}
                    className="h-12 w-full rounded-full border bg-background px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />

                  <textarea
                    name="message"
                    required
                    maxLength={2000}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    placeholder="Write your message..."
                    disabled={status === "loading"}
                    className="w-full resize-none rounded-[1.25rem] border bg-background px-5 py-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                  />

                  {error && (
                    <p className="text-center text-sm text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}