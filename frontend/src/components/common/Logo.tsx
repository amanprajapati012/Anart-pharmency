interface LogoProps {
  variant?: "dark" | "light"; // dark = for light backgrounds, light = for dark backgrounds
  className?: string;
  markSize?: number;
}

export default function Logo({
  variant = "dark",
  className = "",
  markSize = 40,
}: LogoProps) {
  const ink = variant === "light" ? "#EDE7D3" : "#16241B";
  const primary = variant === "light" ? "#EDE7D3" : "#1F3D2C";
  const accent = "#B8763E";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r="20.5"
          stroke={accent}
          strokeWidth="1.2"
          strokeDasharray="2.6 3.4"
          opacity="0.7"
        />
        <path
          d="M22 8C22 8 30 13 30 21.5C30 27.5 26.5 31 22 31C17.5 31 14 27.5 14 21.5C14 13 22 8 22 8Z"
          fill={primary}
        />
        <path
          d="M22 12.5V27"
          stroke={variant === "light" ? "#0F2117" : "#EDE7D3"}
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M22 16.5C22 16.5 25.2 17.6 25.2 20.4C25.2 22 23.8 23 22 23"
          stroke={variant === "light" ? "#0F2117" : "#EDE7D3"}
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="22" cy="8.5" r="2" fill={accent} />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className="font-heading tracking-tight"
          style={{
            color: ink,
            fontSize: markSize * 0.46,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          Anart
        </span>
        <span
          className="uppercase"
          style={{
            color: accent,
            fontSize: Math.max(9, markSize * 0.19),
            letterSpacing: "0.28em",
            fontWeight: 600,
            marginTop: 2,
          }}
        >
          Pharmacy
        </span>
      </span>
    </span>
  );
}
