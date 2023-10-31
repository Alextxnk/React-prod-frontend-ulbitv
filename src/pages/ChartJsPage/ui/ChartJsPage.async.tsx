import { lazy } from 'react';

// export const ChartJsPageAsync = lazy(() => import('./ChartJsPage'));

// сделаем искусственную задержку
export const ChartJsPageAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./ChartJsPage')), 1500);
      })
);
