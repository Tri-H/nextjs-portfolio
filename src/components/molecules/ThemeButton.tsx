import { useThemeContext } from "context";
import { Icon } from "@/components/atoms/icons";

type ThemeButtonProps = {
  className?: string;
};

const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={className} onClick={toggleTheme}>
      {theme === "dark" ? <Icon name="Sun" /> : <Icon name="Moon" />}
    </button>
  );
};

export default ThemeButton;
