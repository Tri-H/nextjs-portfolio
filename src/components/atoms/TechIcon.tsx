import { Icon } from "./icons";

type TechIconProps = {
  techs: string[];
};

const TechIcon = ({ techs }: TechIconProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span key={tech}>
          <Icon name={tech} />
        </span>
      ))}
    </div>
  );
};

export default TechIcon;
