import Icon from "./Icon";

type CardLinkProps = React.PropsWithChildren<{
  href: string;
  title: string;
  description?: string;
  icon?: "bolt" | "building" | "home" | "briefcase" | "mic" | "shield";
}>;

export default function CardLink({ href, title, description, icon }: CardLinkProps) {
  return (
    <a
      href={href}
      className="group p-8 rounded-2xl border-2 border-gray-100 bg-white hover:border-[--color-brand]/20 hover:bg-gradient-to-br hover:from-white hover:to-[--color-muted]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[--color-brand] hover-lift"
    >
      <div className="flex items-start gap-4 mb-4">
        {icon ? (
          <div className="w-12 h-12 bg-gradient-to-br from-[--color-brand] to-[--color-accent] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Icon name={icon} className="w-6 h-6 text-white" />
          </div>
        ) : null}
        <div>
          <h3 className="text-xl font-bold text-[--color-navy] group-hover:text-[--color-brand] transition-colors duration-300">{title}</h3>
        </div>
      </div>
      {description ? (
        <p className="text-base text-gray-600 leading-relaxed mb-4">{description}</p>
      ) : null}
      <div className="flex items-center text-[--color-brand] font-semibold group-hover:text-[--color-navy] transition-colors duration-300">
        <span>Explore Service</span>
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </div>
    </a>
  );
}


