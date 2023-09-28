import { ChangeEvent, memo, useContext } from 'react';
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import { ChartContext } from 'app/providers/ChartProvider';
import styles from './ChartConfig.module.scss';

interface ChartConfigProps {
   handleSort: () => void;
   handleShuffle: () => void;
}

const ChartConfig = ({ handleSort, handleShuffle }: ChartConfigProps) => {
   const { length, setLength, isSorted } = useContext(ChartContext);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   console.log('Config re-render');

   return (
      <div className={styles.ChartConfig}>
         <h3>Количество элементов</h3>
         <Input
            type='text'
            value={length}
            placeholder='Количество элементов'
            onChange={handleChange}
         />
         <Button
            disabled={isSorted}
            theme={isSorted ? ThemeButton.disabled : ThemeButton.nothing}
            onClick={handleSort}
         >
            Sort
         </Button>
         <Button onClick={handleShuffle}>Shuffle</Button>
      </div>
   );
};

export default memo(ChartConfig);
