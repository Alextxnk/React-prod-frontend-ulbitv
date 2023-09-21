import Button from 'components/ui/Button/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib';

interface ThemeSwitcherProps {
   className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
   const { toggleTheme } = useTheme();

   return (
      <Button
         className={classNames(styles.ThemeSwitcher, [className])}
         onClick={toggleTheme}
      >
         Сменить тему
      </Button>
   );
};

export default ThemeSwitcher;
