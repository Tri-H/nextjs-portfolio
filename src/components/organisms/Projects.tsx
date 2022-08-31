import { ProjectCard } from '../molecules'
import { projects } from 'data'
import type { ProjectType } from 'data'

type ProjectsProps = {
	selectedTag?: string
}

export default function Projects({ selectedTag }: ProjectsProps) {
	function filteredProjects() {
		if (selectedTag) {
			return projects.filter(({ technologies }) =>
				technologies.includes(selectedTag)
			)
		}
		return projects
	}

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{filteredProjects().map((project: ProjectType) => (
				<ProjectCard project={project} key={project.id} />
			))}
		</div>
	)
}
