import { Button, ThemeButton } from 'shared/ui/Button';
import { classNames } from 'shared/lib';
import { Languages } from 'lucide-react';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
   className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
   return (
      <Button
         theme={ThemeButton.clear}
         className={classNames(styles.LanguageSwitcher, [className])}
      >
         <Languages />
      </Button>
   );
};

export default LanguageSwitcher;
