"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xblgworg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border rounded px-4 py-2"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border rounded px-4 py-2"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border rounded px-4 py-2"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
            color: "var(--foreground)",
          }}
        />
      </div>

      <PrimaryButton label="Send Message" type="submit" />

      {submitted && (
        <p className="text-sm mt-4" style={{ color: "var(--accent)" }}>
          Thank you for reaching out! I’ll get back to you soon ✨
        </p>
      )}
    </motion.form>
  );
}
