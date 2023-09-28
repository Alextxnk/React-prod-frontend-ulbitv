import { FC, useMemo, useState } from 'react';
import { ChartContext } from './ChartContext';

const ChartProvider: FC = ({ children }) => {
   const [length, setLength] = useState<number>(70);
   const [isSorted, setIsSorted] = useState<boolean>(false);
   const [isDone, setIsDone] = useState<boolean>(false);

   const defaultProps = useMemo(
      () => ({
         length: length,
         setLength: setLength,
         isSorted: isSorted,
         setIsSorted: setIsSorted,
         isDone: isDone,
         setIsDone: setIsDone
      }),
      [length, isSorted, isDone]
   );

   return (
      <ChartContext.Provider value={defaultProps}>
         {children}
      </ChartContext.Provider>
   );
};

export default ChartProvider;
