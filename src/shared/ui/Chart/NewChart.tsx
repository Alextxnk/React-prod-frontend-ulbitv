import { useState, useEffect, ReactNode, ChangeEvent } from 'react';
import { bubbleSort } from 'shared/lib/bubbleSort/bubbleSort';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import _ from 'lodash';
import styles from './NewChart.module.scss';

const NewChart = () => {
   const [length, setLength] = useState<number>(70);
   const [expensesData, setExpensesData] = useState<number[]>([]);

   const max: number = 1000;
   const chartHeight: number = max + 20;
   const barWidth: number = 20;
   const barMargin: number = 20;

   const createRandomData = (data: number[]): number[] => data.map((expense: number) => (expense = _.random(0, max)));

   const data: number[] = createRandomData([...Array(length)]);

   useEffect(() => {
      if (length <= 100) {
         setExpensesData(data);
      } else {
         alert('Максимальное количество элементов 100');
      }
   }, [length]);

   const width: number = length * (barWidth + barMargin);

   const calculateHighestExpense = (data: number[]): number => data.reduce((acc, cur) => {
      return cur > acc ? cur : acc;
   }, 0);

   const [highestExpense, setHighestExpense] = useState<number>(
      calculateHighestExpense(data)
   );

   const handleCreate = () => {
      const newData = createRandomData(expensesData);
      const newHighestExpense = calculateHighestExpense(newData);
      setExpensesData(newData);
      setHighestExpense(newHighestExpense);
   };

   const handleSort = () => {
      const sortedArr = bubbleSort(expensesData);
      const newHighestExpense = calculateHighestExpense(sortedArr);

      setExpensesData(sortedArr);
      setHighestExpense(newHighestExpense);
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setLength(value);
   };

   return (
      <>
         <div className={styles.body}>
            <div className={styles.legend}>
               <span className={styles.expense}>Элемент</span>
               <span className={styles.highestExpense}>Наибольший элемент</span>
            </div>

            <Chart height={chartHeight} width={width}>
               {expensesData.map((data, index) => {
                  const barHeight = data;
                  return (
                     <Bar
                        key={index}
                        x={index * (barWidth + barMargin)}
                        y={chartHeight - barHeight}
                        width={barWidth}
                        height={barHeight}
                        content={barHeight}
                        highestExpense={highestExpense}
                     />
                  );
               })}
            </Chart>
         </div>

         <div className={styles.chartConfig}>
            <h3 className={styles.head}>Количество элементов</h3>
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

interface ChartProps {
   children: ReactNode;
   width: number;
   height: number;
}

const Chart = ({ children, width, height }: ChartProps) => (
   <svg
      viewBox={`0 0 ${width} ${height}`}
      width='100%'
      height='100%'
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
   content: number;
}

const Bar = ({ x, y, width, height, highestExpense, content }: BarProps) => (
   <>
      <rect
         x={x}
         y={y}
         width={width}
         height={height}
         fill={
            highestExpense === content
               ? 'rgba(197, 3, 3, 0.65)'
               : 'rgba(75, 192, 192, 0.8)'
         }
      />
      <text x={x} y={y - 5}>
         {content}
      </text>
   </>
);

export default NewChart;
