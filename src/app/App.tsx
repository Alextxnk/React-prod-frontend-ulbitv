import React from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss';
import Button from 'components/ui/Button/Button';
import Chart from 'components/ui/Chart/Chart';
import NewChart from 'components/ui/Chart/NewChart';

const App = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <>
         {/* <div className={classNames('app', [theme])}>
            <Navbar />
            <div>
               <Button onClick={toggleTheme}>Сменить тему</Button>
            </div>
            <AppRouter />
         </div> */}
         {/* <Chart /> */}
         <NewChart />
      </>
   );
};

export default App;
