import type { Variants, Transition } from "framer-motion";

/* ─── Easing curves ─────────────────────────────────────────── */
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeInOutExpo = [0.87, 0, 0.13, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/* ─── Shared transitions ────────────────────────────────────── */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const fadeLift: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ─── Stagger container for children ────────────────────────── */
export const staggerContainer = (staggerMs = 80): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerMs / 1000,
      delayChildren: 0.15,
    },
  },
});

/* ─── Individual child fade+lift ────────────────────────────── */
export const fadeLiftChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ─── Split-text character stagger ──────────────────────────── */
export const charReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.03,
      ease: easeOutQuart,
    },
  }),
};

/* ─── Clip-path wipe transition ─────────────────────────────── */
export const clipWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: easeInOutExpo },
  },
};

/* ─── Spring pill tag ─────────────────────────────────────── */
export const springPill: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

/* ─── Page section fade in ──────────────────────────────────── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};
