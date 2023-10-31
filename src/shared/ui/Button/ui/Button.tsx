import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export enum ThemeButton {
   clear = 'clear',
   disabled = 'disabled',
   nothing = ''
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

const Button: FC<ButtonProps> = memo((props) => {
   const { className, theme, children, ...otherProps } = props;

   return (
      <button
         type='button'
         className={classNames(styles.Button, [className, styles[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   );
});

export default Button;
