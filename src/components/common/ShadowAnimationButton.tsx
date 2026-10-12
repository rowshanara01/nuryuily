import LinkWithProgress from "./LinkWithProgress";

interface ShadowAnimationButtonProps {
  title: string;
  href: string;
}

const ShadowAnimationButton = ({ title, href }: ShadowAnimationButtonProps) => {
  return (
    <LinkWithProgress
      href={href}
      className="relative px-12 py-3 bg-[var(--primary-color)] text-[var(--black-color)] font-bold rounded-xl 
      border-2 border-[var(--primary-color-2)] hover:border-[var(--primary-color)] transition-all duration-300 
      hover:shadow-[0_0_20px_10px_var(--primary-color-3)] active:scale-95 active:shadow-[0_0_10px_5px_var(--primary-color-2)] cursor-pointer group"
    >
      <span className="text-lg">{title}</span>
      <span className="absolute inset-0 rounded-[2rem] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--primary-color-2)] to-[var(--primary-color-3)]" />
    </LinkWithProgress>
  );
};

export default ShadowAnimationButton;
