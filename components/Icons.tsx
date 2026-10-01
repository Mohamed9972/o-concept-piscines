/** Drawn icon set — one consistent 1.5px stroke. No emoji, no unicode glyphs. */

type IconProps = { className?: string; size?: number };

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function ArrowIcon({ className, size = 22 }: IconProps) {
  return (
    <svg {...base(size)} className={className ? `${className} arrow` : "arrow"}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloseIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function CheckIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function PhoneIcon({ className, size = 18 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
