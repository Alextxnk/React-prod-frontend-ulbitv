import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

// сделаем искусственную задержку
export const ChartJsPageAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./ChartJsPage')), 1500);
      })
);
