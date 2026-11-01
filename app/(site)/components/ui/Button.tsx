import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-(--color-gold) focus:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-(--color-navy) text-white shadow-sm hover:bg-[#16306b] hover:shadow-md hover:-translate-y-0.5",
  secondary:
    "bg-white border-2 border-(--color-navy) text-(--color-navy) hover:bg-(--color-navy) hover:text-white hover:-translate-y-0.5",
  ghost: "text-(--color-navy) hover:text-(--color-gold)",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** When set, renders an anchor (next/link for internal paths, <a> otherwise). */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler;
  "aria-label"?: string;
};

// One CTA used across the whole site. Renders a <button>, or an anchor/Link
// when `href` is given, so link-styled CTAs are not a <button> nested in an <a>.
export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  type,
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("/") && !target) {
      return (
        <Link href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={cls}
        target={target}
        rel={rel}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      type={type ?? "button"}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
