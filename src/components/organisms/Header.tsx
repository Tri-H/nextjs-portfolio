import { useState } from "react";
import { IconLogo } from "../atoms/icons";
import { ButtonLink } from "../atoms";
import { Nav, ThemeButton } from "../molecules";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/40 py-4 backdrop-blur-md dark:bg-dark/40">
      <div className="container flex items-center justify-between">
        <div className="inline-flex md:w-4/12">
          <ButtonLink href="/">
            <IconLogo size="2.5rem" />
          </ButtonLink>
        </div>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="flex md:w-4/12 md:justify-end">
          <button
            className={`md:hidden ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="menu-toggle"></div>
          </button>
          <ThemeButton className="hidden py-3 md:block" />
        </div>
      </div>
    </header>
  );
}
