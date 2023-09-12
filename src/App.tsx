import React, { Suspense, useState } from 'react';
import Counter from './components/ui/Counter/Counter';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export enum Theme {
   light = 'light',
   dark = 'dark'
}

const App = () => {
   const [theme, setTheme] = useState<Theme>(Theme.light);

   const toggleTheme = () => {
      setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
   };

   return (
      <div className={`app ${theme}`}>
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
   );
};

export default App;
