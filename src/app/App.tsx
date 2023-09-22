import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import './styles/index.scss';

/* const Component = () => {
   const { t, i18n } = useTranslation();

   return (
      <div style={{ margin: '10px' }}>
         <h1>{t('Тестовый пример')}</h1>
      </div>
   );
}; */

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={classNames('app', [theme])}>
         <Suspense fallback='loading'>
            <Navbar />
            <div className='content-page'>
               <Sidebar />
               <AppRouter />
               {/* <Component /> */}
            </div>
         </Suspense>
      </div>
   );
};

export default App;
