import React, { useState, useEffect, ReactNode } from 'react';
import styles from './NewChart.module.scss';
import Button from '../Button/Button';
import { bubbleSort } from 'shared/lib/bubbleSort/bubbleSort';
import _ from 'lodash';

const numberData: number[] = [100, 40, 15, 126, 29, 89];

const NewChart = () => {
   const [numberExpensesData, setNumberExpensesData] =
      useState<number[]>(numberData);

   const maxExpense: number = 200;
   const chartHeight: number = maxExpense + 20;
   const barWidth: number = 50;
   const barMargin: number = 30;

   const numberOfBars: number = numberExpensesData.length;
   let width: number = numberOfBars * (barWidth + barMargin);

   const calculateHighestExpense = (data: number[]): number =>
      data.reduce((acc, cur) => {
         return cur > acc ? cur : acc;
      }, 0);

   const [highestExpense, setHighestExpense] = useState<number>(
      calculateHighestExpense(numberData)
   );

   /* useEffect(() => {
      console.log(
         'NewChart.tsx:41 ~ numberExpensesData:',
         JSON.stringify(numberExpensesData)
      );
      console.log('NewChart.tsx:42 ~ highestExpense:', highestExpense);
   }); */

   const createRandomData = (data: number[]): number[] =>
      data.map((expense: number) => (expense = _.random(0, maxExpense)));

   const refreshChart = () => {
      const newData = createRandomData(numberExpensesData);
      const newHighestExpense = calculateHighestExpense(newData);
      setNumberExpensesData(newData);
      setHighestExpense(newHighestExpense);
   };

   const handleSort = () => {
      const sortedArr = bubbleSort(numberExpensesData);
      const newHighestExpense = calculateHighestExpense(sortedArr);

      setNumberExpensesData(sortedArr);
      setHighestExpense(newHighestExpense);
   };

   return (
      <div className={styles.body}>
         <p className={styles.legend}>
            <span className={styles.expense}>Expense</span>
            <span className={styles.highestExpense}>Highest expense</span>
         </p>

         <Chart height={chartHeight} width={width}>
            {numberExpensesData.map((data, index) => {
               const barHeight = data;
               return (
                  <Bar
                     key={index}
                     x={index * (barWidth + barMargin)}
                     y={chartHeight - barHeight}
                     width={barWidth}
                     height={barHeight}
                     highestExpense={highestExpense}
                  />
               );
            })}
         </Chart>

         <Button onClick={refreshChart}>Новый график</Button>
         <Button onClick={handleSort}>Сортировка</Button>
      </div>
   );
};

interface ChartProps {
   children: ReactNode;
   width: number;
   height: number;
}

const Chart = ({ children, width, height }: ChartProps) => (
   <svg
      className={styles.svg}
      viewBox={`0 0 ${width} ${height}`}
      width='100%'
      height='70%'
      preserveAspectRatio='xMidYMax meet'
   >
      {children}
   </svg>
);

interface BarProps {
   x: number;
   y: number;
   width: number;
   height: number;
   highestExpense: number;
}

const Bar = ({ x, y, width, height, highestExpense }: BarProps) => (
   <>
      <rect
         x={x}
         y={y}
         width={width}
         height={height}
         fill={highestExpense === height ? `purple` : `black`}
      />
      <text x={x + width / 3} y={y - 5}>
         {height}
      </text>
   </>
);

export default NewChart;
