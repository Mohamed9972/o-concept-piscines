"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export default function Reveal({ children, className = "", style, variant = "fade" }: { children: ReactNode; className?: string; style?: CSSProperties; variant?: "fade" | "clip" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Clip variant: the observer watches the OUTER box (always has layout area)
  // while clip-path animates on an INNER wrapper. Clipping the observed node
  // itself would zero its intersection rect, so IO would never fire (deadlock).
  if (variant === "clip") {
    return (
      <div ref={ref} className={`reveal clip ${className}`} style={style}>
        <div className="clip-inner">{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
