import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
};

const Button = ({
  children,
  className,
  onClick,
  disabled,
  type,
  title,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-3 font-medium ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  );
};

export default Button;
