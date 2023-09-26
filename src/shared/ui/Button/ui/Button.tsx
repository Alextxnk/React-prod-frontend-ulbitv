import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib';

export enum ThemeButton {
   clear = 'clear',
   disabled = 'disabled',
   nothing = 'nothing'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
   const { className, theme, children, ...otherProps } = props;

   return (
      <button
         className={classNames(styles.Button, [className, styles[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   );
};

export default Button;
