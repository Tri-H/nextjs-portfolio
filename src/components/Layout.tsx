import { ReactNode, memo } from 'react'
import { Header, Footer } from './organisms'

function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default memo(Layout)
