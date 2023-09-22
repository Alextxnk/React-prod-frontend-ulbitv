import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import styles from './Chart.module.scss';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { bubbleSort } from 'shared/lib';

const Chart = () => {
   const [length, setLength] = useState<number>(10);
   const [labelData, setLabelData] = useState<number[]>([...Array(length)]);

   const randArr = (): number[] => {
      const min = 0;
      const max = 100;
      const arr: number[] = [...Array(length)];

      for (let i = 0; i < arr.length; i += 1) {
         arr[i] = _.random(min, max);
      }

      console.log('🚀 ~ file: Chart.tsx:21 ~ randArr ~ arr:', arr);
      return arr;
   };

   useEffect(() => {
      const fakerData: number[] = randArr();

      if (length <= 30) {
         setLabelData(fakerData);
      } else {
         alert('Максимальное количество элементов 30!');
      }
   }, [length]);

   const handleSort = () => {
      const arr: number[] = bubbleSort(labelData);
      setLabelData(arr);
      console.log('🚀 ~ file: Chart.tsx:38 ~ handleSort ~ arr:', arr);

      console.log(
         '🚀 ~ file: Chart.tsx:40 ~ handleSort ~ labelData:',
         labelData
      );
      // return arr;
   };

   const handleCreate = () => {};

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   const sortedNumbers = useMemo(() => {
      // setLabelData(labelData);
      return labelData;
   }, [labelData]);

   return (
      <>
         <div className={styles.Chart}>
            {sortedNumbers.map((chart, index) => (
               <div className={styles.ChartItem} key={index}>
                  {chart}
               </div>
            ))}
         </div>
         <div className={styles.ChartConfig}>
            <h3>Количество элементов</h3>
            <Input
               type='text'
               value={length}
               placeholder='Количество элементов'
               onChange={handleChange}
            />
            <Button onClick={handleSort}>Сортировка</Button>
            <Button onClick={handleCreate}>Новый массив</Button>
         </div>
      </>
   );
};

export default Chart;
