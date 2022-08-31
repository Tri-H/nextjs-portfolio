import { ReactNode } from 'react'

type AccentProps = {
	children: ReactNode
	className?: string
}

export default function Accent({ children, className }: AccentProps) {
	return <span className={`accent font-bold ${className}`}>{children}</span>
}
