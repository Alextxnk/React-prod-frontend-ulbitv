import React, { ChangeEvent, useEffect, useState } from 'react';
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
import Input from '../Input/Input';
import Button from '../Button/Button';
import { bubbleSort } from '../../../shared/lib/bubbleSort/bubbleSort';

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

const Chart = () => {
   const [length, setLength] = useState(30);
   let labels: string[] = [];

   if (length < 1000) {
      labels = [...Array(length)].map(
         (number, index) => (number = index.toString())
      );
   } else {
      alert('Максимальное количество элементов 999!');
   }

   let fakerData: number[] = [];

   const [labelData, setLabelData] = useState([]);

   useEffect(() => {
      fakerData = labels.map(() => faker.number.int({ min: 5, max: 100 }));
      setLabelData(fakerData);
      /* console.log(
         '🚀 ~ file: Chart.tsx:56 ~ useEffect ~ fakerData:',
         fakerData
      ); */
   }, [length]);

   const data = {
      labels,
      datasets: [
         {
            label: 'Random Dataset',
            data: labelData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
         }
      ]
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   const handleSort = () => {
      const arr = bubbleSort(fakerData);
      setLabelData(arr);
      console.log("🚀 ~ file: Chart.tsx:85 ~ handleSort ~ arr:", arr)
   };

   return (
      <div className={styles.chartMain}>
         <div className={styles.chart}>
            <Bar options={options} data={data} />
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

export default Chart;
