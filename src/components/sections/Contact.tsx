"use client";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp } from "@/lib/animations";
import Title from "@/components/ui/Title";

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");

    if (!serviceId || !templateId || !publicKey) {
      setErrorMsg("Email service is not configured.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 5000);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey },
      );
      console.log("EmailJS success:", result.text);
      setStatus("sent");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      console.error("EmailJS error:", msg);
      setErrorMsg(msg);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 5000);
    }
  };

  const fieldClass =
    "w-full bg-transparent outline-none py-2.5 text-sm transition-colors duration-200 focus:border-[#FC6736] [border-bottom:1px_solid_var(--input-border)] [color:var(--text-primary)] placeholder:[color:var(--text-faint)]";

  const labelClass = "text-xs font-semibold uppercase tracking-widest";

  return (
    <motion.section
      id="contact"
      className="py-16 border-t rounded-xl px-5 -mx-5"
      style={{
        borderColor: "var(--border-subtle)",
        background: "var(--bg-section)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeInUp}
    >
      <Title text="Get In Touch" />

      <div className="max-w-lg">
        <p
          className="text-sm leading-relaxed mb-8"
          style={{ color: "var(--text-body)" }}
        >
          I am currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi — my inbox is always
          open.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-7"
        >
          {/* Name + Email row */}
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="flex-1 flex flex-col gap-1">
              <label
                htmlFor="name"
                className={labelClass}
                style={{ color: "var(--text-muted)" }}
              >
                Name
              </label>
              <input
                id="name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="John Doe"
                className={fieldClass}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label
                htmlFor="email"
                className={labelClass}
                style={{ color: "var(--text-muted)" }}
              >
                Email
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={fieldClass}
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className={labelClass}
              style={{ color: "var(--text-muted)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              className={`${fieldClass} resize-none`}
              required
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-3">
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#FC6736] text-[#FC6736] text-sm font-semibold tracking-wide hover:bg-[#FC6736] hover:text-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
              whileHover={{ scale: status === "idle" ? 1.04 : 1 }}
              whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {status === "sending" && (
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message Sent ✓"
                  : "Send Message"}
            </motion.button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.p
                  key="sent"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-emerald-400 text-xs font-medium"
                >
                  ✓ Thanks! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="text-red-400 text-xs font-medium"
                >
                  ✕ {errorMsg || "Something went wrong. Please try again."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
