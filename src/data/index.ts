import projects from './projects.json'
import timeline from './timeline.json'
import tags from './tags.json'

export type ProjectType = typeof projects[0]
export type TimelineType = typeof timeline[0]
export type TagType = typeof tags

export { projects, timeline, tags }
