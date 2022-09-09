import { FC } from "react";
import { useThemeContext } from "context";
import { Icon } from "../atoms/icons";

type ThemeButtonProps = {
  className?: string;
};

const ThemeButton: FC<ThemeButtonProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button className={className} onClick={toggleTheme}>
      {theme === "dark" ? <Icon name="Sun" /> : <Icon name="Moon" />}
    </button>
  );
};

export default ThemeButton;
