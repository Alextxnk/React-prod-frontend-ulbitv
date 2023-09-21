import { classNames } from 'shared/lib';
import AppLink from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(styles.Navbar, [className])}>
         <div className={styles.Links}>
            <AppLink className={styles.MainLink} to='/'>
               Главная
            </AppLink>
            <AppLink to='/about'>О сайте</AppLink>
            <AppLink to='/chart'>График</AppLink>
            <AppLink to='/chartjs'>Chart js</AppLink>
         </div>
      </div>
   );
};
