import { FC } from "react";
import { Icon } from "./icons";

type TechIconProps = {
  techs: string[];
};

const TechIcon: FC<TechIconProps> = ({ techs }) => {
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
