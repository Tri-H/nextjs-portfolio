import { useState } from 'react'
import { Tag } from '@/components/molecules'
import { Projects } from '@/components/organisms'
import Seo from '@/components/Seo'
import { tags } from 'data'

export default function Project() {
	const [selectedTag, setSelectedTag] = useState<string>('')
	return (
		<>
			<Seo title="Projects" />
			<section className="container py-8">
				<h1 className="text-center">Projects</h1>
				<Tag
					tags={tags}
					selectedTag={selectedTag}
					setSelectedTag={setSelectedTag}
				/>
				<Projects selectedTag={selectedTag} />
			</section>
		</>
	)
}
