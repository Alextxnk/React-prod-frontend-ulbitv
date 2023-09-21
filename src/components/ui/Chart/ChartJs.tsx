import { ChangeEvent, useEffect, useState } from 'react';
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { bubbleSort } from 'shared/lib/bubbleSort/bubbleSort';
import styles from './ChartJs.module.scss';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

export const options = {
   responsive: true,
   plugins: {
      legend: {
         position: 'top' as const
      },
      title: {
         display: true,
         text: 'Bubble sort'
      }
   }
};

const ChartJs = () => {
   const [length, setLength] = useState<number>(70);
   let labels: string[] = [];

   if (length <= 1000) {
      labels = [...Array(length)].map(
         (number, index) => (number = index.toString())
      );
   } else {
      alert('Максимальное количество элементов 1000');
   }

   const [labelData, setLabelData] = useState<number[]>([]);

   const randArr = (): number[] => {
      const min = 0;
      const max = 100;
      const arr: number[] = [...Array(length)];

      for (let i = 0; i < arr.length; i += 1) {
         arr[i] = _.random(min, max);
      }

      console.log('🚀 ~ file: Chart.tsx:72 ~ randArr ~ arr:', arr);
      return arr;
   };

   useEffect(() => {
      let fakerData: number[] = randArr();
      setLabelData(fakerData);
   }, [length]);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   const handleSort = () => {
      const arr: number[] = bubbleSort(labelData);
      setLabelData(arr);
      console.log('🚀 ~ file: Chart.tsx:85 ~ handleSort ~ arr:', arr);
   };

   let data = {
      labels,
      datasets: [
         {
            label: 'Random Dataset',
            data: labelData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
         }
      ]
   };

   return (
      <div className={styles.ChartMain}>
         <div className={styles.Chart}>
            <Bar options={options} data={data} />
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
         </div>
      </div>
   );
};

export default ChartJs;
