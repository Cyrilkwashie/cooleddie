type ArrowDir = "down-left" | "left" | "down";

const arrows: Record<ArrowDir, string> = {
  "down-left":
    "M28 8 C 20 18, 14 28, 8 40 M8 40 l7-1.5 M8 40 l1.2-7",
  left: "M36 18 C 24 12, 14 14, 6 20 M6 20 l7-2.5 M6 20 l5 5",
  down: "M18 6 C 12 16, 16 28, 22 40 M22 40 l-6.5-2 M22 40 l2-7",
};

export function HandwrittenNote({
  lines,
  arrow = "down-left",
  className = "",
  align = "left",
}: {
  lines: string[];
  arrow?: ArrowDir;
  className?: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <p
        className={`hand-note text-[26px] md:text-[30px] font-medium ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <svg
        viewBox="0 0 48 48"
        className={`mt-1 h-12 w-12 text-[#cfcfcf] ${
          align === "right" ? "ml-auto" : ""
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      >
        <path d={arrows[arrow]} />
      </svg>
    </div>
  );
}
