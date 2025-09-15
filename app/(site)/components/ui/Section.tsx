type SectionProps = React.PropsWithChildren<{
  id?: string;
  bg?: "default" | "muted" | "white" | "gradient";
  className?: string;
}>;

export default function Section({ id, bg = "default", className = "", children }: SectionProps) {
  const bgClass =
    bg === "muted"
      ? "bg-[--color-muted]"
      : bg === "white"
      ? "bg-white"
      : bg === "gradient"
      ? "bg-gradient-to-br from-[--color-muted] via-white to-[#F0F9F8]"
      : "";
  return (
    <section id={id} className={`${bgClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8">{children}</div>
    </section>
  );
}


