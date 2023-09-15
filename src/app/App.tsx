import React, { Suspense } from 'react';
import Counter from 'components/ui/Counter/Counter';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import Chart from 'components/ui/Chart/Chart';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/' element={<MainPage />} />
               </Routes>
            </Suspense>
         </div>
         {/* <Chart /> */}
      </>
   );
};

export default App;
