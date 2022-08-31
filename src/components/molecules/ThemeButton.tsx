import { useThemeContext } from 'context'
import { Icon } from '../atoms/icons'

type ThemeButtonProps = {
	className?: string
}

export default function ThemeButton({ className }: ThemeButtonProps) {
	const { theme, toggleTheme } = useThemeContext()

	return (
		<button className={className} onClick={toggleTheme}>
			{theme === 'dark' ? <Icon name="Sun" /> : <Icon name="Moon" />}
		</button>
	)
}
