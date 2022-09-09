import { FC, ReactNode } from "react";

type AccentProps = {
  children: ReactNode;
  className?: string;
};

const Accent: FC<AccentProps> = ({ children, className }) => {
  return <span className={`accent font-bold ${className}`}>{children}</span>;
};

export default Accent;
