import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   return (
      <div className={styles.Counter}>
         <h1>{count}</h1>
         <button type='button' className={styles.Btn} onClick={increment}>
            Increment
         </button>
      </div>
   );
};

export default Counter;
