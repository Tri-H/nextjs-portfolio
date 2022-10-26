import { useState } from "react";
import { Logo } from "@/components/atoms";
import { ButtonLink } from "@/components/atoms";
import { Nav, ThemeButton } from "@/components/molecules";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/50 py-4 backdrop-blur-md dark:bg-dark/50 md:py-6">
      <div className="container flex items-center justify-between">
        <div className="inline-flex md:flex-1">
          <ButtonLink href="/" className="py-1">
            <Logo />
          </ButtonLink>
        </div>
        <Nav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <div className="flex md:flex-1 md:justify-end">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`menu-toggle ${
                isMenuOpen
                  ? "before:translate-y-1 before:rotate-45 after:-translate-y-1 after:-rotate-45"
                  : ""
              }`}
            />
          </button>
          <ThemeButton className="hidden py-3 md:block" />
        </div>
      </div>
    </header>
  );
};

export default Header;
