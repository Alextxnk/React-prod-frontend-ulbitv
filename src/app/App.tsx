import React from 'react';
import Counter from 'components/ui/Counter/Counter';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import Chart from 'components/ui/Chart/Chart';
import { AppRouter } from './providers/router';

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
            <AppRouter />
         </div>
         {/* <Chart /> */}
      </>
   );
};

export default App;
