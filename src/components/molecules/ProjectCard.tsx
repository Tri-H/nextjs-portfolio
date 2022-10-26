import { NextImage, TechIcon } from "@/components/atoms";
import { Icon } from "@/components/atoms/icons";
import type { ProjectType } from "data";

type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-between space-y-4 rounded-lg border bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-black">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={project.url === "" ? "pointer-events-none" : ""}
      >
        <NextImage
          src={`/images/projects/${project.image}`}
          alt={project.title}
          className="aspect-[3/2] rounded-lg"
        />
      </a>
      <div className="flex-grow">
        <h4 className="inline-block">{project.title}</h4>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <TechIcon techs={project.technologies} />
        <a href={project.repository} target="_blank" rel="noreferrer">
          <Icon name="Github" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
