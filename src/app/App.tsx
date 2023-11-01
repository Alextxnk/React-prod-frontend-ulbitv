import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import './styles/index.scss';

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={classNames('app', [theme])}>
         <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className='content-page'>
               <Sidebar />
               <AppRouter />
            </div>
         </Suspense>
      </div>
   );
};

export default App;
