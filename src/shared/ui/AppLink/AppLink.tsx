import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
   primary = 'primary',
   secondary = 'secondary'
}

interface AppLinkProps extends LinkProps {
   className?: string;
   theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
   const {
      to,
      className,
      children,
      theme = AppLinkTheme.primary,
      ...otherProps
   } = props;

   return (
      <Link
         className={classNames(styles.AppLink, [className, styles[theme]])}
         to={to}
         {...otherProps}
      >
         {children}
      </Link>
   );
};

export default AppLink;
