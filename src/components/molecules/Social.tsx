import { Icon } from '../atoms/icons'

type SocialType = {
	id: string
	href: string
}

type SocialProps = {
	className?: string
}

export default function Social({ className }: SocialProps) {
	const socials: SocialType[] = [
		{
			id: 'Github',
			href: 'https://github.com/Tri-H',
		},
		{
			id: 'Instagram',
			href: 'https://instagram.com/trihartanto_',
		},
		{
			id: 'Twitter',
			href: 'https://twitter.com/tri_hartanto_',
		},
		{
			id: 'Linkedin',
			href: 'https://linkedin.com/in/tri-h',
		},
	]

	return (
		<ul className={`flex gap-4 ${className}`}>
			{socials.map(({ id, href }) => (
				<li key={id}>
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						className="text-zinc-400 transition-colors hover:text-sky-400"
					>
						<Icon name={id} />
					</a>
				</li>
			))}
		</ul>
	)
}
