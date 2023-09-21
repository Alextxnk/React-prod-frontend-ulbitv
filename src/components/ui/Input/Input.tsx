import { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';

interface InputProps {
   type: string;
   value: number;
   placeholder: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
   return <input {...props} className={styles.Input} />;
};

export default Input;
