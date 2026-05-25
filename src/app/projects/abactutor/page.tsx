"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Quote,
  Users,
  Languages,
  ShieldCheck,
  Lightbulb,
  FileText,
  GraduationCap,
} from "lucide-react";
import { SiFigma } from "react-icons/si";
import CustomCursor from "../../../components/ui/CustomCursor";
import Navbar from "../../../components/ui/Navbar";
import ScrollReveal from "../../../components/ui/ScrollReveal";

const painPoints = [
  { icon: Users, label: "Freshmen unfamiliar with the university system" },
  { icon: ShieldCheck, label: "Tutoring is expensive and unreliable" },
  { icon: Languages, label: "English-only lectures create language barriers" },
  { icon: Lightbulb, label: "Isolation and low confidence in early weeks" },
];

const solutions = [
  {
    icon: GraduationCap,
    title: "ABAC Community Pool",
    desc: "Freshmen connect with seniors and alumni who've already passed the same courses. Reduces isolation and builds confidence early.",
    solves: "isolation",
  },
  {
    icon: Users,
    title: "1-on-1 Tutoring",
    desc: "Personalized sessions where students can ask every question they were too afraid to raise in a 200-person lecture.",
    solves: "limited individual attention",
  },
  {
    icon: Languages,
    title: "Language-Friendly Learning",
    desc: "Search tutors by language, bilingual Thai-English sessions, optional session recordings for revision.",
    solves: "language barriers",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Affordable Tutors",
    desc: "Admin-approved tutors, transparent THB pricing, course-specific reviews from real ABAC students.",
    solves: "unreliable expensive tutoring",
  },
];

const screens = [
  {
    alt: "ABACTutor home screen",
    caption: "Home - Browse tutors by subject and language",
  },
  {
    alt: "Tutor search results",
    caption: "Search - Filter by subject, language, and price",
  },
  {
    alt: "Tutor profile page",
    caption: "Profile - Verified badge, reviews, availability",
  },
  {
    alt: "Booking confirmation screen",
    caption: "Booking - Transparent pricing, no surprises",
  },
];

const reflection = [
  {
    label: "What we built",
    body: "ABACTutor connects ABAC freshmen with verified senior tutors through a bilingual, university-specific platform - removing the barriers of cost, language, and trust.",
  },
  {
    label: "What I learned",
    body: "Running an empathy mapping session before opening Figma was the best decision we made. It surfaced emotional blockers that a feature list would never have captured.",
  },
  {
    label: "What's next",
    body: "Usability testing with 5 real ABAC freshmen, watching where they hesitate in the booking flow and iterating based on actual drop-off behavior.",
  },
];

function Placeholder({ alt }: { alt: string }) {
  return (
    <div
      className="w-full aspect-[16/10] rounded-xl border flex items-center justify-center"
      style={{
        borderColor: "var(--border-dim)",
        background: "rgba(4,146,251,0.04)",
      }}
    >
      <div className="text-center space-y-2">
        <FileText
          className="w-6 h-6 mx-auto"
          style={{ color: "var(--text-muted)" }}
        />
        <p
          className="font-label text-[10px] uppercase tracking-[0.1em]"
          style={{ color: "var(--text-muted)" }}
        >
          {alt}
        </p>
      </div>
    </div>
  );
}

const tags = [
  { label: "UX Research", color: "#7C3AED" },
  { label: "Empathy Mapping", color: "#EC5990" },
  { label: "Figma", color: "#F24E1E" },
  { label: "Product Thinking", color: "#0EA5E9" },
];

export default function ABACTutorCaseStudy() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        {/* Hero */}
        <section
          className="relative min-h-[80vh] flex items-center pt-24 pb-16 px-6 md:px-8"
          style={{ backgroundColor: "#fc6903" }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <ScrollReveal>
              <p
                className="font-label text-label uppercase tracking-[0.12em] mb-6"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Case Study
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h1
                className="font-display text-[clamp(56px,8vw,96px)] font-extrabold leading-[0.92] tracking-[-0.03em] mb-4"
                style={{ color: "#fff" }}
              >
                ABACTutor
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p
                className="font-display text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.02em] mb-6"
                style={{ color: "#fff" }}
              >
                Boost your GPA
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p
                className="font-body font-light text-base mb-8"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                UX Research Lead . Team of 6 . Academic Project
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-10">
                {tags.map((t) => (
                  <span
                    key={t.label}
                    className="px-3 py-1.5 text-[11px] font-label font-semibold rounded-full border uppercase tracking-[0.08em]"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-[#fc6903] hover:bg-white/90 transition-colors duration-200"
                  data-cursor-hover
                >
                  <SiFigma className="w-4 h-4" /> Open in Figma{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border hover:bg-white/10 transition-colors duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#fff",
                  }}
                  data-cursor-hover
                >
                  <FileText className="w-4 h-4" /> View Pitch Deck{" "}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Overview */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
              <ScrollReveal>
                <span
                  className="font-label text-label uppercase tracking-[0.12em] block pt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Overview
                </span>
              </ScrollReveal>
              <ScrollReveal className="md:col-span-2">
                <p
                  className="font-body font-light text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  ABACTutor is a peer tutoring platform designed specifically
                  for ABAC (Assumption University Bangkok) freshmen. The core
                  idea: students shouldn&apos;t have to waste weeks searching
                  for unreliable help when seniors who&apos;ve already passed
                  the same courses are right on campus. The real problem
                  wasn&apos;t effort - students were working hard. The problem
                  was access to the right support, in the right language, at the
                  right price.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative mb-16">
                <Quote
                  className="absolute -top-4 -left-4 w-8 h-8 opacity-20"
                  style={{ color: "#fc6903" }}
                />
                <blockquote
                  className="font-display text-[clamp(28px,4vw,40px)] font-bold italic leading-[1.2] tracking-[-0.02em] pl-8"
                  style={{ color: "var(--text-primary)" }}
                >
                  &ldquo;If I don&apos;t get help early, I&apos;ll fall behind
                  for the whole semester.&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {painPoints.map((p, i) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={i}>
                    <div
                      className="flex items-start gap-4 p-5 rounded-xl border"
                      style={{
                        borderColor: "var(--border-dim)",
                        background: "var(--bg-elevated)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "rgba(252,105,3,0.1)" }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "#fc6903" }}
                        />
                      </div>
                      <span
                        className="font-body font-light text-sm leading-relaxed pt-1.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {p.label}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-6 mb-16">
                <span
                  className="font-label text-label uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Research &amp; Discovery
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border-dim)" }}
                />
              </div>
            </ScrollReveal>
            <div className="space-y-16">
              <div>
                <ScrollReveal>
                  <Placeholder alt="Empathy map for ABAC freshman user" />
                  <p
                    className="mt-4 font-body font-light text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="font-label text-[10px] uppercase tracking-[0.1em] mr-2"
                      style={{ color: "#fc6903" }}
                    >
                      Empathy Map
                    </span>
                    - surfaced emotional blockers: fear, isolation, and imposter
                    syndrome that a feature list would never have captured.
                  </p>
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal>
                  <Placeholder alt="Competitor analysis" />
                  <p
                    className="mt-4 font-body font-light text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="font-label text-[10px] uppercase tracking-[0.1em] mr-2"
                      style={{ color: "#fc6903" }}
                    >
                      Competitor Analysis
                    </span>
                    - TutorMe and Chegg are too generic. No university-specific
                    curriculum, no verified tutors, no bilingual support.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-6 mb-16">
                <span
                  className="font-label text-label uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  What we designed
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border-dim)" }}
                />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={i}>
                    <div
                      className="group p-6 rounded-xl border transition-all duration-300 hover:border-[var(--border-bright)]"
                      style={{
                        borderColor: "var(--border-dim)",
                        background: "var(--bg-elevated)",
                      }}
                      data-cursor-hover
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ background: "rgba(252,105,3,0.1)" }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: "#fc6903" }}
                        />
                      </div>
                      <h3
                        className="font-display text-base font-bold mb-2 tracking-[-0.01em]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="font-body font-light text-sm leading-relaxed mb-3"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {s.desc}
                      </p>
                      <span
                        className="font-label text-[10px] uppercase tracking-[0.1em]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Solves: {s.solves}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* UI Screens */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-6 mb-16">
                <span
                  className="font-label text-label uppercase tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  UI Design
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: "var(--border-dim)" }}
                />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {screens.map((s, i) => (
                <ScrollReveal key={i}>
                  <div className="group">
                    <Placeholder alt={s.alt} />
                    <p
                      className="mt-3 font-body font-light text-xs leading-relaxed text-center"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.caption}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-24 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x"
              style={{ borderColor: "var(--border-dim)" }}
            >
              {reflection.map((r, i) => (
                <ScrollReveal key={i}>
                  <div
                    className="px-0 md:px-8 py-6 md:py-0 first:pt-0 last:pb-0"
                    style={{ borderColor: "var(--border-dim)" }}
                  >
                    <h3
                      className="font-display text-sm font-bold mb-3 tracking-[-0.01em]"
                      style={{ color: "#fc6903" }}
                    >
                      {r.label}
                    </h3>
                    <p
                      className="font-body font-light text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {r.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section
          className="py-16 px-6 md:px-8 border-t"
          style={{ borderColor: "var(--border-dim)" }}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-label text-label uppercase tracking-[0.1em] hover:text-[#0492fb] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              data-cursor-hover
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-label text-label uppercase tracking-[0.1em] hover:text-[#0492fb] transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              data-cursor-hover
            >
              GearUp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
