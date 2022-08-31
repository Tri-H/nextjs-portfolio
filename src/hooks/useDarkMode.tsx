import { useState, useEffect } from 'react'

export const useDarkMode = () => {
	const [theme, setTheme] = useState<string>('light')
	const [isMounted, setIsMounted] = useState<boolean>(false)

	const setMode = (mode: string) => {
		const root = document.documentElement
		window.localStorage.setItem('theme', mode)
		mode === 'dark' ? root.classList.add('dark') : root.classList.remove('dark')
		setTheme(mode)
	}

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setMode(newTheme)
	}

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme')
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches &&
		!localTheme
			? setMode('dark')
			: localTheme
			? setMode(localTheme)
			: setMode('light')
		setIsMounted(true)
	}, [])

	return [theme, toggleTheme, isMounted]
}
