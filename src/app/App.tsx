import React, { Suspense } from 'react';
import Counter from 'components/ui/Counter/Counter';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/MainPage.async';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import Chart from 'components/ui/Chart/Chart';

const App = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <>
         <div className={classNames('app', {}, [theme])}>
            <Counter />
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <div>
               <button onClick={toggleTheme}>Сменить тему</button>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                  <Route path='/about' element={<AboutPageAsync />} />
                  <Route path='/' element={<MainPageAsync />} />
               </Routes>
            </Suspense>
         </div>
         <Chart />
      </>
   );
};

export default App;
