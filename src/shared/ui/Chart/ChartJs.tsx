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
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import { BubbleState, bubbleSortInit, bubbleSortStep } from 'shared/lib';
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
   const [isSorted, setIsSorted] = useState<boolean>(false);
   let labels: string[] = [];
   let fakerData: number[];
   let timerId: NodeJS.Timeout;

   if (length <= 1000) {
      labels = [...Array(length)].map(
         (number, index) => (number = index.toString())
      );
   } else {
      alert('Максимальное количество элементов 1000');
   }

   const randArr = (): number[] => {
      const min = 0;
      const max = 100;
      const arr: number[] = [...Array(length)];

      for (let i = 0; i < arr.length; i += 1) {
         arr[i] = _.random(min, max);
      }

      return arr;
   };

   const [bubbleState, setBubbleState] = useState<BubbleState>({
      ...bubbleSortInit([...Array(length)])
   });

   useEffect(() => {
      fakerData = randArr();
      setBubbleState({
         ...bubbleSortInit(fakerData)
      });
   }, [length]);

   const handleSort = () => {
      setIsSorted(true);
      timerId = setInterval(() => handleTimer(), 250);
   };

   const handleTimer = () => {
      setBubbleState((oldState) => {
         const newState = bubbleSortStep(oldState) as BubbleState;

         if (newState.done) {
            clearInterval(timerId);
            setIsSorted(false);
         }

         return newState;
      });
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   const handleShuffle = () => {
      clearInterval(timerId);
      fakerData = randArr();
      setBubbleState({
         ...bubbleSortInit(fakerData),
         done: true
      });
   };

   let data = {
      labels,
      datasets: [
         {
            label: 'Random Dataset',
            data: bubbleState.array,
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
            <Button
               disabled={isSorted}
               theme={isSorted ? ThemeButton.disabled : ThemeButton.nothing}
               onClick={handleSort}
            >
               Sort
            </Button>
            <Button onClick={handleShuffle}>Shuffle</Button>
         </div>
      </div>
   );
};

export default ChartJs;
