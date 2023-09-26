import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
   className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
   const { t } = useTranslation();

   return (
      <div className={classNames(styles.Navbar, [className])}>
         <div className={styles.Links}>
            <AppLink
               theme={AppLinkTheme.secondary}
               className={styles.MainLink}
               to='/'
            >
               {t('Главная')}
            </AppLink>
            <AppLink theme={AppLinkTheme.secondary} to='/about'>
               {t('О сайте')}
            </AppLink>
            {/* <AppLink theme={AppLinkTheme.secondary} to='/chart'>
               {t('График')}
            </AppLink> */}
            <AppLink theme={AppLinkTheme.secondary} to='/chartjs'>
               Chart js
            </AppLink>
         </div>
      </div>
   );
};

export default Navbar;
