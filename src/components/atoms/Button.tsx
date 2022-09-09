import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  type,
  title,
}) => {
  return (
    <button
      className={`button ${className}`}
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
