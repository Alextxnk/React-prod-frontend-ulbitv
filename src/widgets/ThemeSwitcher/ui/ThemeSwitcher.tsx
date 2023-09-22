import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { SunMoon, Moon } from 'lucide-react';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
   className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { theme, toggleTheme } = useTheme();

   return (
      <Button
         theme={ThemeButton.clear}
         className={classNames(styles.ThemeSwitcher, [className])}
         onClick={toggleTheme}
      >
         {theme === Theme.light ? <Moon /> : <SunMoon />}
      </Button>
   );
};

export default ThemeSwitcher;
