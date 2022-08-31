import { ReactNode, createContext, useContext } from 'react'
import { useDarkMode } from 'hooks'

type ThemeContextType = {
	theme?: string
	toggleTheme?: () => void
}

const ThemeContext = createContext({})

export const useThemeContext = () => useContext<ThemeContextType>(ThemeContext)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, toggleTheme, isMounted] = useDarkMode()

	if (!isMounted) return null

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
