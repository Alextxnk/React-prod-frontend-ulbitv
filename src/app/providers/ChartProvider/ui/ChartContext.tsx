import { createContext } from 'react';

export interface ChartContextProps {
   length?: number;
   setLength?: (length: number) => void;
}

export const ChartContext = createContext<ChartContextProps>({});
