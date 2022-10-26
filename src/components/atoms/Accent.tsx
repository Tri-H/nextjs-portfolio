import { ReactNode } from "react";

type AccentProps = {
  children: ReactNode;
  className?: string;
};

const Accent = ({ children, className }: AccentProps) => {
  return <span className={`accent font-bold ${className}`}>{children}</span>;
};

export default Accent;
