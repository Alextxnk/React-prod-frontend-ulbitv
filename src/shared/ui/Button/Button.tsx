import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib';

interface ButtonProps {
   children: ReactNode;
   onClick: MouseEventHandler<HTMLElement>;
   className?: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
   return (
      <button
         {...props}
         className={classNames(styles.Button, [props.className])}
      >
         {children}
      </button>
   );
};

export default Button;
