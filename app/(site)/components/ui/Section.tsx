type SectionProps = React.PropsWithChildren<{
  id?: string;
  bg?: "default" | "muted" | "white" | "gradient";
  /** Vertical rhythm: md is the content default, lg for heroes, sm for tight bands. */
  size?: "sm" | "md" | "lg";
  /** Content width: default (max-w-6xl) or wide (max-w-7xl). */
  width?: "default" | "wide";
  className?: string;
}>;

export default function Section({
  id,
  bg = "default",
  size = "md",
  width = "default",
  className = "",
  children,
}: SectionProps) {
  const bgClass =
    bg === "muted"
      ? "bg-(--color-muted)"
      : bg === "white"
      ? "bg-white"
      : bg === "gradient"
      ? "bg-gradient-to-br from-(--color-muted) via-white to-(--color-muted)"
      : "";
  const space =
    size === "lg" ? "py-16 sm:py-24" : size === "sm" ? "py-8 sm:py-10" : "py-12 sm:py-16";
  const maxW = width === "wide" ? "max-w-7xl" : "max-w-6xl";
  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className={`mx-auto ${maxW} px-6 ${space}`}>{children}</div>
    </section>
  );
}
