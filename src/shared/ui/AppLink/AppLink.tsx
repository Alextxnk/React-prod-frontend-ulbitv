import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
   className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
   const { to, className, children, ...otherProps } = props;
   return (
      <Link
         className={classNames(styles.AppLink, [className])}
         to={to}
         {...otherProps}
      >
         {children}
      </Link>
   );
};

export default AppLink;
