import Link from "next/link";
import { FC, ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={`font-medium ${className}`}>{children}</a>
    </Link>
  );
};

export default ButtonLink;
