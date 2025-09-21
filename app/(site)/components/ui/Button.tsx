type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[--color-gold] focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary: "bg-[--color-navy] text-white shadow-lg hover:shadow-xl hover:bg-[--color-gold] transform hover:scale-105",
    secondary: "bg-white border-2 border-[--color-navy] text-[--color-navy] hover:bg-[--color-gold] hover:text-white hover:border-[--color-gold] shadow-md hover:shadow-lg",
    ghost: "text-[--color-navy] hover:text-[--color-gold] hover:underline font-semibold bg-transparent",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}


