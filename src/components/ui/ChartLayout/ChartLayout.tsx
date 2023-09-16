import React, {
   ChangeEvent,
   useEffect,
   useMemo,
   useRef,
   useState
} from 'react';
/* import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
} from 'chart.js';
import { Chart } from 'react-chartjs-2'; */
import {
   Chart as ChartJS,
   LinearScale,
   CategoryScale,
   BarElement,
   PointElement,
   LineElement,
   Legend,
   Tooltip
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import styles from './ChartLayout.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { bubbleSort } from 'shared/lib/bubbleSort/bubbleSort';

/* ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
); */

ChartJS.register(
   LinearScale,
   CategoryScale,
   BarElement,
   PointElement,
   LineElement,
   Legend,
   Tooltip
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

const triggerTooltip = (chart: ChartJS | null) => {
   const tooltip = chart?.tooltip;

   if (!tooltip) {
      return;
   }

   if (tooltip.getActiveElements().length > 0) {
      tooltip.setActiveElements([], { x: 0, y: 0 });
   } else {
      const { chartArea } = chart;

      tooltip.setActiveElements(
         [
            {
               datasetIndex: 0,
               index: 2
            },
            /* {
               datasetIndex: 1,
               index: 2
            } */
         ],
         {
            x: (chartArea.left + chartArea.right) / 2,
            y: (chartArea.top + chartArea.bottom) / 2
         }
      );
   }
};

const ChartLayout = () => {
   const [length, setLength] = useState<number>(30);
   let labels: string[] = [];

   if (length < 1000) {
      labels = [...Array(length)].map(
         (number, index) => (number = index.toString())
      );
   } else {
      alert('Максимальное количество элементов 999!');
   }

   const [labelData, setLabelData] = useState<number[]>([]);

   /* const sortedNumbers = useMemo(() => {
      if (sort) {
         return handleSort();
      }

      return labelData;
   }, [labelData, sort]); */

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
      // let fakerData: number[]  = labels.map(() => faker.number.int({ min: 5, max: 100 }));
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
      // return arr;
   };

   /* const sortedNumbers = useMemo(() => {
      // setLabelData(labelData);
      return labelData;
   }, [labelData]); */

   let data = {
      labels,
      datasets: [
         {
            label: 'Random Dataset',
            data: labelData,
            // data: sortedNumbers,
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
         }
      ]
   };

   const chartRef = useRef<ChartJS>(null);

   useEffect(() => {
      const chart = chartRef.current;

      triggerTooltip(chart);
   }, []);

   return (
      <div className={styles.chartMain}>
         <div className={styles.chart}>
            {/* <Bar options={options} data={data} /> */}
            <Chart ref={chartRef} type='bar' data={data} options={options} />
         </div>
         <div className={styles.chartConfig}>
            <h3>Количество элементов</h3>
            <div className={styles.chartForm}></div>
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

export default ChartLayout;
