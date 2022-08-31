import Head from 'next/head'
import { useRouter } from 'next/router'

const metaData = {
	title: 'Tri Hartanto',
	siteName: '',
	description:
		'An online portfolio by Tri Hartanto. I build an elegant and functional interface for the web.',
	url: '',
	image: '/images/large-og.png',
	type: 'website',
}

type SeoProps = {
	title?: string
} & Partial<typeof metaData>

export default function Seo({ title }: SeoProps) {
	const router = useRouter()

	const meta = { ...metaData }

	meta['title'] = title ? `${title} - ${meta.title}` : meta.title

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="description:" content={meta.description} />
			<meta property="og:url" content={`${meta.url}${router.asPath}`} />
			<link rel="canonical" href={`${meta.url}${router.asPath}`} />

			<meta property="og:title" content={meta.title} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={meta.image} />

			<meta property="twittwer:card" content="summary_large_image" />
			<meta property="twittwer:site" content="@tri_hartanto_" />
			<meta property="twittwer:title" content={meta.title} />
			<meta property="twittwer:image" content={meta.image} />

			{favicons.map((linkProps) => (
				<link key={linkProps.href} {...linkProps} />
			))}
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="thene-color" content="#ffffff" />
		</Head>
	)
}

type Favicons = {
	rel: string
	href: string
	sizes?: string
	type?: string
}

const favicons: Array<Favicons> = [
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: '/favicon/apple-touch-icon.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: '/favicon/favicon-32x32.png',
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: '/favicon/favicon-16x16.png',
	},
	{ rel: 'manifest', href: '/favicon/site.webmanifest' },
]
