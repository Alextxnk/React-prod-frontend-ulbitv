import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
   className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
   const { t } = useTranslation();

   const reloadPage = () => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
   };

   return (
      <div className={classNames(styles.PageError, [className])}>
         <h2>{t('Произошла непредвиденная ошибка')}</h2>
         <Button onClick={reloadPage}><h3>{t('Обновить страницу')}</h3></Button>
      </div>
   );
};

export default PageError;
