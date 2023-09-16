import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

// сделаем искусственную задержку
export const ChartPageAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./ChartPage')), 1500);
      })
);
