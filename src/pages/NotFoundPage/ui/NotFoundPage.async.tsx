import { lazy } from 'react';

// export const NotFoundPageAsync = lazy(() => import('./NotFoundPage'));

// сделаем искусственную задержку
export const NotFoundPageAsync = lazy(
   () =>
      new Promise((resolve) => {
         // @ts-ignore
         setTimeout(() => resolve(import('./NotFoundPage')), 1500);
      })
);
