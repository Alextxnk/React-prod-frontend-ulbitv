import { ChangeEvent, memo, useContext } from 'react';
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import styles from './ChartConfig.module.scss';
import { ChartContext } from 'app/providers/ChartProvider';

interface ChartConfigProps {
   isSorted: boolean;
   handleSort: () => void;
   handleShuffle: () => void;
}

const ChartConfig = ({
   isSorted,
   handleSort,
   handleShuffle
}: ChartConfigProps) => {
   const { length, setLength } = useContext(ChartContext);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

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
