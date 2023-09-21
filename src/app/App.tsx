import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import './styles/index.scss';

const App = () => {
   const { theme } = useTheme();

   return (
      <div className={classNames('app', [theme])}>
         <Navbar />
         <ThemeSwitcher />
         <AppRouter />
      </div>
   );
};

export default App;
