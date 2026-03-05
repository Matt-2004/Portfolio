/* ─── Reusable section heading ────────────────────────────────── */

const Title = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span
      className="text-xs font-bold tracking-[0.25em] uppercase"
      style={{ color: "var(--text-muted)" }}
    >
      {text}
    </span>
    <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
  </div>
);

export default Title;
