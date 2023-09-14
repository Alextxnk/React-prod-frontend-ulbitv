import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
   children: ReactNode;
   onClick: MouseEventHandler<HTMLElement>;
}

const Button = ({ children, ...props }: ButtonProps) => {
   return (
      <button {...props} className={styles.button}>
         {children}
      </button>
   );
};

export default Button;
