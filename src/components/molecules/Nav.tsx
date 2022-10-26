import Link from "next/link";
import { withRouter, NextRouter } from "next/router";
import { Accent } from "@/components/atoms";
import { ThemeButton } from "@/components/molecules";

type MenuType = {
  label: string;
  href: string;
};

type NavProps = {
  router: NextRouter;
  isOpen: boolean;
  onClose: () => void;
};

const Nav = ({ router, isOpen, onClose }: NavProps) => {
  const links: MenuType[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden md:block"
      } fixed right-6 top-full w-2/4 rounded-lg border bg-white p-12 dark:border-neutral-800 dark:bg-black md:static md:flex-1 md:border-none md:bg-transparent md:p-0 dark:md:border-none dark:md:bg-transparent`}
    >
      <ul className="flex flex-col items-center justify-center gap-6 py-2 md:flex-row">
        {links.map(({ href, label }) => (
          <li key={label}>
            <Link href={href}>
              <a
                onClick={onClose}
                className={`${
                  router.pathname === href
                    ? "text-black dark:text-white"
                    : "text-neutral-600 hover:text-primary dark:text-neutral-300"
                } py-3 text-sm font-medium`}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-4 border-t border-dashed border-black pt-4 dark:border-white md:hidden">
        <Accent>Theme</Accent>
        <ThemeButton className="rounded-xl border p-2 dark:border-neutral-800" />
      </div>
    </nav>
  );
};

export default withRouter(Nav);
