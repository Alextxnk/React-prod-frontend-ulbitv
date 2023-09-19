import { AboutPage } from 'pages/AboutPage';
import { ChartJsPage } from 'pages/ChartJsPage';
import { ChartPage } from 'pages/ChartPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
   main = 'main',
   about = 'about',
   chart = 'chart',
   chartJs = 'chartjs'
}

export const RoutePath: Record<AppRoutes, string> = {
   [AppRoutes.main]: '/',
   [AppRoutes.about]: '/about',
   [AppRoutes.chart]: '/chart',
   [AppRoutes.chartJs]: '/chartjs'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.main]: {
      path: RoutePath.main,
      element: <MainPage />
   },
   [AppRoutes.about]: {
      path: RoutePath.about,
      element: <AboutPage />
   },
   [AppRoutes.chart]: {
      path: RoutePath.chart,
      element: <ChartPage />
   },
   [AppRoutes.chartJs]: {
      path: RoutePath.chartjs,
      element: <ChartJsPage />
   }
};
