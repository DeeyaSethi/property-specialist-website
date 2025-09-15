type IconProps = { name: "bolt" | "building" | "home" | "briefcase" | "mic" | "shield"; className?: string };

export default function Icon({ name, className = "w-5 h-5" }: IconProps) {
  const common = { 
    stroke: "currentColor", 
    fill: "none", 
    strokeWidth: 2, 
    strokeLinecap: "round" as const, 
    strokeLinejoin: "round" as const 
  };
  switch (name) {
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h2M7 11h2M7 15h2M11 7h2M11 11h2M11 15h2M15 7h2M15 11h2M15 15h2" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <path d="M3 10l9-7 9 7" />
          <path d="M5 10v10h14V10" />
        </svg>
      );
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <path d="M3 7h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <rect x="9" y="2" width="6" height="12" rx="3" />
          <path d="M5 10a7 7 0 0 0 14 0M12 19v3" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden {...common}>
          <path d="M12 3l8 4v6c0 4-3 7-8 8-5-1-8-4-8-8V7z" />
        </svg>
      );
    default:
      return null;
  }
}


