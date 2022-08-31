import { Icon } from './icons'

type TechIconProps = {
	techs: string[]
}

export default function TechIcon({ techs }: TechIconProps) {
	return (
		<div className="flex flex-wrap gap-2">
			{techs.map((tech) => (
				<span key={tech}>
					<Icon name={tech} />
				</span>
			))}
		</div>
	)
}
