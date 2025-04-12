"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      action="https://formspree.io/f/xblgworg" // 👈 replace this
      method="POST"
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

      <button
        type="submit"
        className="px-6 py-2 rounded font-medium transition-colors duration-300"
        style={{
          backgroundColor: "var(--accent)",
          color: "#ffffff",
        }}
      >
        Send Message
      </button>
    </motion.form>
  );
}
