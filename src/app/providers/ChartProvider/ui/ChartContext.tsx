import { createContext } from 'react';

export interface ChartContextProps {
   length?: number;
   setLength?: (length: number) => void;
   isSorted?: boolean;
   setIsSorted?: (isSorted: boolean) => void;
   isDone?: boolean;
   setIsDone?: (isDone: boolean) => void;
   speed?: number;
   setSpeed?: (speed: number) => void;
}

export const ChartContext = createContext<ChartContextProps>({});
