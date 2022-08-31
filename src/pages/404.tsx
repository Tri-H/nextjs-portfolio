import { ButtonLink } from '@/components/atoms'
import { IconLogo } from '@/components/atoms/icons'
import Seo from '@/components/Seo'

export default function Custom404() {
	return (
		<>
			<Seo title="Not Found" />
			<section className="container flex min-h-[calc(100vh-152px)] flex-col items-center justify-center gap-4">
				<IconLogo size="200" />
				<h3>Page Not Found</h3>
				<ButtonLink href="/" className="button--primary inline-block px-6 py-3">
					Back to Home
				</ButtonLink>
			</section>
		</>
	)
}
