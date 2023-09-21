import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import Button from 'components/ui/Button/Button';
import './styles/index.scss';

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
      </>
   );
};

export default App;
