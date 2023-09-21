import { classNames } from 'shared/lib';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(styles.Navbar, [className])}>
         <ThemeSwitcher />
         <div className={styles.Links}>
            <AppLink
               theme={AppLinkTheme.secondary}
               className={styles.MainLink}
               to='/'
            >
               Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.secondary} to='/about'>
               О сайте
            </AppLink>
            <AppLink theme={AppLinkTheme.secondary} to='/chart'>
               График
            </AppLink>
            <AppLink theme={AppLinkTheme.secondary} to='/chartjs'>
               Chart js
            </AppLink>
         </div>
      </div>
   );
};
