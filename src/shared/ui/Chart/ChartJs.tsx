import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
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
import {
   BubbleState,
   bubbleSortInit,
   bubbleSortStep,
   randArr
} from 'shared/lib';
import { options } from 'shared/config/chartOptions/chartOptions';
import { ChartConfig } from '../ChartConfig';
import { ChartContext } from 'app/providers/ChartProvider';
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
   const { length, setIsSorted, isDone, setIsDone } = useContext(ChartContext);

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

   const handleSort = useCallback(() => {
      // setIsDone(false);
      setIsSorted(true);
      setBubbleState({
         ...bubbleSortInit(fakerData),
         done: false
      });
      timerId = setInterval(() => handleTimer(), 250);
   }, [timerId, setIsSorted, setBubbleState]);

   const handleTimer = () => {
      setBubbleState((oldState) => {
         const newState = bubbleSortStep(oldState) as BubbleState;

         // newState.done | isDone
         if (newState.done) {
            clearInterval(timerId);
            setIsSorted(false);
         }

         return newState;
      });
   };

   const handleShuffle = useCallback(() => {
      clearInterval(timerId);
      setIsSorted(false);
      fakerData = randArr(length);

      // setIsDone(true);

      setBubbleState({
         ...bubbleSortInit(fakerData),
         done: true
      });
   }, [clearInterval, setBubbleState, setIsSorted]);

   const data = {
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
         <ChartConfig handleSort={handleSort} handleShuffle={handleShuffle} />
      </div>
   );
};

export default ChartJs;
