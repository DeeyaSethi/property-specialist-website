type BadgeProps = React.PropsWithChildren<{}>;

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[--color-accent] px-3 py-1 text-xs font-medium text-[--color-navy]">
      {children}
    </span>
  );
}


