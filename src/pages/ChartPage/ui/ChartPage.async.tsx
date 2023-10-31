import { lazy } from 'react';

// export const ChartPageAsync = lazy(() => import('./ChartPage'));

// сделаем искусственную задержку
export const ChartPageAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./ChartPage')), 1500);
      })
);
