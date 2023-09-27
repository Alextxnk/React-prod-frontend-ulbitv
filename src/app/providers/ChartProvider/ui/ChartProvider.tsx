import { FC, useMemo, useState } from 'react';
import { ChartContext } from './ChartContext';

const ChartProvider: FC = ({ children }) => {
   const [length, setLength] = useState<number>(70);
   const defaultProps = useMemo(
      () => ({
         length: length,
         setLength: setLength
      }),
      [length]
   );

   return (
      <ChartContext.Provider value={defaultProps}>
         {children}
      </ChartContext.Provider>
   );
};

export default ChartProvider;
