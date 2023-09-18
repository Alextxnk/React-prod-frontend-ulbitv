import React, { useState, useEffect, ReactNode } from 'react';
import styles from './NewChart.module.scss';
import Button from '../Button/Button';
import { bubbleSort } from 'shared/lib/bubbleSort/bubbleSort';
import _ from 'lodash';

interface DataProps {
   name: string;
   expense: number;
}

const data: DataProps[] = [
   { name: 'Phone', expense: 151 },
   { name: 'Electricity', expense: 100 },
   { name: 'Car', expense: 5 },
   { name: 'House', expense: 43 },
   { name: 'Food', expense: 56 },
   { name: 'Leisure', expense: 182 }
];

const sortedData: DataProps[] = [
   { name: 'Car', expense: 5 },
   { name: 'House', expense: 43 },
   { name: 'Food', expense: 56 },
   { name: 'Electricity', expense: 100 },
   { name: 'Phone', expense: 151 },
   { name: 'Leisure', expense: 182 }
];

const numberData: number[] = [100, 40, 15, 126, 29, 89];

const NewChart = () => {
   const [expensesData, setExpensesData] = useState<DataProps[]>(data);
   const [numberExpensesData, setNumberExpensesData] =
      useState<number[]>(numberData);

   const maxExpense: number = 200;
   const chartHeight: number = maxExpense + 20;
   const barWidth: number = 50;
   const barMargin: number = 30;

   const numberOfBars: number = expensesData.length;
   let width: number = numberOfBars * (barWidth + barMargin);

   // Calculate highest expense for the month
   const calculateHighestExpense = (data: DataProps[]): number =>
      data.reduce((acc, cur) => {
         const { expense } = cur;
         return expense > acc ? expense : acc;
      }, 0);

   const [highestExpense, setHighestExpense] = useState<number>(
      calculateHighestExpense(data)
   );

   useEffect(() => {
      console.log(
         'NewChart.tsx:41 ~ expensesData:',
         JSON.stringify(expensesData)
      );
      console.log('NewChart.tsx:42 ~ highestExpense:', highestExpense);
   });

   const createRandomData = (data: DataProps[]) =>
      data.map((exp) => ({
         name: exp.name,
         // expense: Math.floor(Math.random() * maxExpense),
         expense: _.random(0, maxExpense)
      }));

   const refreshChart = () => {
      const newData = createRandomData(expensesData);
      const newHighestExpense = calculateHighestExpense(newData);
      setExpensesData(newData);
      setHighestExpense(newHighestExpense);
   };

   const handleSort = () => {
      // const arr: number[] = bubbleSort(labelData);
      const newHighestExpense = calculateHighestExpense(sortedData);
      setExpensesData(sortedData);
      setHighestExpense(newHighestExpense);
   };

   return (
      <div className={styles.body}>
         <p className={styles.legend}>
            <span className={styles.expense}>Expense</span>
            <span className={styles.highestExpense}>Highest expense</span>
         </p>

         <Chart height={chartHeight} width={width}>
            {expensesData.map((data, index) => {
               const barHeight = data.expense;
               return (
                  <Bar
                     key={data.name}
                     x={index * (barWidth + barMargin)}
                     y={chartHeight - barHeight}
                     width={barWidth}
                     height={barHeight}
                     expenseName={data.name}
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
   expenseName: string;
   highestExpense: number;
}

const Bar = ({
   x,
   y,
   width,
   height,
   expenseName,
   highestExpense
}: BarProps) => (
   <>
      <rect
         x={x}
         y={y}
         width={width}
         height={height}
         fill={highestExpense === height ? `purple` : `black`}
      />
      <text x={x + width / 3} y={y - 5}>
         {/* {highestExpense === height ? `${expenseName}: ${height}` : `${height}`} */}
         {height}
      </text>
   </>
);

export default NewChart;
