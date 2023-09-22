import { Button, ThemeButton } from 'shared/ui/Button';
import { classNames } from 'shared/lib';
import { Languages } from 'lucide-react';
import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
   className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
   const { i18n } = useTranslation();

   const handleChangeLanguage = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
   };

   return (
      <Button
         theme={ThemeButton.clear}
         onClick={handleChangeLanguage}
         className={classNames(styles.LanguageSwitcher, [className])}
      >
         <Languages />
      </Button>
   );
};

export default LanguageSwitcher;
