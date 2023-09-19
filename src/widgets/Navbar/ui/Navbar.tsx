import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import styles from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(styles.navbar, [className])}>
         <Link className={styles.navbar__link} to='/'>Главная</Link>
         <Link className={styles.navbar__link} to='/about'>О сайте</Link>
         <Link className={styles.navbar__link} to='/chart'>График</Link>
         <Link className={styles.navbar__link} to='/chartjs'>Chart js</Link>
      </div>
   );
};
