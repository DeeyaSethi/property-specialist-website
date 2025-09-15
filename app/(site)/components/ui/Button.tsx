type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[--color-brand]";
  const variants: Record<string, string> = {
    primary: "bg-[--color-brand] text-[--color-navy] shadow-sm hover:shadow-md font-semibold border-[--color-brand]",
    secondary: "bg-white border-2 border-[--color-brand] text-[--color-brand] hover:bg-[--color-brand] hover:text-white font-semibold",
    ghost: "text-[--color-brand] hover:text-[--color-navy] hover:underline font-medium bg-transparent",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


