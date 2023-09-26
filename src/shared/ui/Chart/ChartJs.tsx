import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { Input } from 'shared/ui/Input';
import { Button, ThemeButton } from 'shared/ui/Button';
import {
   BubbleState,
   bubbleSortInit,
   bubbleSortStep,
   randArr
} from 'shared/lib';
import { options } from 'shared/config/chartOptions/chartOptions';
import styles from './ChartJs.module.scss';

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const ChartJs = () => {
   const [length, setLength] = useState<number>(70);
   const [isSorted, setIsSorted] = useState<boolean>(false);
   let labels: string[] = [];
   let timerId: NodeJS.Timeout;

   if (length <= 1000) {
      labels = [...Array(length)].map(
         (number, index) => (number = index.toString())
      );
   } else {
      alert('Максимальное количество элементов 1000');
   }

   let fakerData: number[] = randArr(length);

   const [bubbleState, setBubbleState] = useState<BubbleState>({
      ...bubbleSortInit([...fakerData])
   });

   useEffect(() => {
      fakerData = randArr(length);
      setBubbleState({
         ...bubbleSortInit(fakerData)
      });
   }, [length]);

   const handleSort = () => {
      setIsSorted(true);
      /* setBubbleState({
         ...bubbleSortInit(fakerData)
      }); */
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
      fakerData = randArr(length);
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
