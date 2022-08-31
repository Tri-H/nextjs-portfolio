import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router'
import { Accent } from '../atoms'
import { ThemeButton } from '../molecules'

type MenuType = {
	label: string
	href: string
}

type NavProps = {
	router: NextRouter
	isMenuOpen: boolean
	setIsMenuOpen: (val: boolean) => void
}

function Nav({ router, isMenuOpen, setIsMenuOpen }: NavProps) {
	const links: MenuType[] = [
		{ label: 'Home', href: '/' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'About', href: '/about' },
	]

	return (
		<nav
			className={`${
				isMenuOpen ? 'block' : 'hidden md:block'
			} fixed right-6 top-full w-2/4 rounded-lg border bg-white p-12 dark:border-zinc-800 dark:bg-primary md:static md:w-4/12 md:border-none md:bg-transparent md:p-0 dark:md:border-none dark:md:bg-transparent`}
		>
			<ul className="flex flex-col items-center justify-center gap-6 py-2 md:flex-row">
				{links.map(({ href, label }) => (
					<li key={label}>
						<Link href={href}>
							<a
								onClick={() => setIsMenuOpen(false)}
								className={`${
									router.pathname === href
										? 'text-black dark:text-white'
										: 'text-zinc-400 hover:text-sky-400'
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
				<ThemeButton className="rounded-xl border p-2 dark:border-zinc-800" />
			</div>
		</nav>
	)
}

export default withRouter(Nav)
