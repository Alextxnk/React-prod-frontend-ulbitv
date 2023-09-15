import React from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import Chart from 'components/ui/Chart/Chart';
import './styles/index.scss';
import Button from 'components/ui/Button/Button';

const App = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <>
         <div className={classNames('app', [theme])}>
            <Navbar />
            <div>
               <Button onClick={toggleTheme}>Сменить тему</Button>
            </div>
            <AppRouter />
         </div>
         {/* <Chart /> */}
      </>
   );
};

export default App;
