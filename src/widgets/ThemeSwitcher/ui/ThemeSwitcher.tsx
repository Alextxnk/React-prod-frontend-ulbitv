import Button from 'components/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib';
import { SunMoon, Moon } from 'lucide-react';

interface ThemeSwitcherProps {
   className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { toggleTheme } = useTheme();

   return (
      <>
         <SunMoon />
         <Moon />
         <Button
            className={classNames(styles.ThemeSwitcher, [className])}
            onClick={toggleTheme}
         >
            Сменить тему
         </Button>
      </>
   );
};

export default ThemeSwitcher;
