import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const ButtonLink = ({ children, href, className }: ButtonLinkProps) => {
  return (
    <Link href={href}>
      <a className={`font-medium ${className}`}>{children}</a>
    </Link>
  );
};

export default ButtonLink;
