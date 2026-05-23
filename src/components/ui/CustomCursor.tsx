"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    if (mq.matches || hasTouch) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const bindHover = () => {
      const targets = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea, [role="button"]',
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      return () =>
        targets.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
    };

    let unbind = bindHover();
    const observer = new MutationObserver(() => {
      unbind();
      unbind = bindHover();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      unbind();
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  const size = hovering ? 48 : 16;

  return (
    <div
      ref={dotRef}
      className="cursor-dot fixed top-0 left-0 pointer-events-none z-[10001] rounded-full flex items-center justify-center"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        backgroundColor: hovering ? "transparent" : "var(--text-primary)",
        border: hovering ? "2px solid rgba(240, 238, 248, 0.9)" : "none",
        mixBlendMode: "difference",
        transition:
          "width 0.15s, height 0.15s, margin-left 0.15s, margin-top 0.15s, background-color 0.15s, border 0.15s",
        willChange: "transform",
      }}
    >
      {hovering && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F0EEF8] select-none">
          Open
        </span>
      )}
    </div>
  );
}
