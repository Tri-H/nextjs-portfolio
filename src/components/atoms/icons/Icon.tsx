import {
  IconLogo,
  IconSun,
  IconMoon,
  IconInstagram,
  IconTwitter,
  IconLinkedin,
  IconGithub,
  IconVuejs,
  IconReact,
  IconNextjs,
  IconTailwind,
} from "@/components/atoms/icons";

type IconProps = {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "Logo":
      return <IconLogo />;
    case "Sun":
      return <IconSun />;
    case "Moon":
      return <IconMoon />;
    case "Instagram":
      return <IconInstagram />;
    case "Twitter":
      return <IconTwitter />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Github":
      return <IconGithub />;
    case "Vue.js":
      return <IconVuejs />;
    case "React":
      return <IconReact />;
    case "Next.js":
      return <IconNextjs />;
    case "Tailwind CSS":
      return <IconTailwind />;
    default:
      return <IconLogo />;
  }
};

export default Icon;
