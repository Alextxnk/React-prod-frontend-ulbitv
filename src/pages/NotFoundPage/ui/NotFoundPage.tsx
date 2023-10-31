import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
   const { t } = useTranslation('notFound');

   return (
      <div className={classNames(styles.NotFoundPage)}>
         <h1>{t('Страница не найдена')}</h1>
      </div>
   );
};

export default NotFoundPage;
