import React from 'react';
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
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import styles from './Chart.module.scss';

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

const length = 30;
const numbers = [...Array(length)];
console.log(numbers);

const labels = numbers.map((number, index) => (number = index.toString()));
console.log('🚀 ~ file: Chart.tsx:53 ~ numberLabels:', labels);

export const data = {
   labels,
   datasets: [
      {
         label: 'Dataset 1',
         data: labels.map(() => faker.number.int({ min: 5, max: 100 })),
         backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
   ]
};

const Chart = () => {
   return (
      <>
         <Bar options={options} data={data} />
         <div className={styles.chartConfig}>
            <h2>Input</h2>
         </div>
      </>
   );
};

export default Chart;
