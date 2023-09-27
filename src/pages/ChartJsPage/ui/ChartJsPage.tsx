import { ChartProvider } from 'app/providers/ChartProvider';
import ChartJs from 'shared/ui/Chart/ChartJs';

const ChartJsPage = () => {
   return (
      <ChartProvider>
         <ChartJs />
      </ChartProvider>
   );
};

export default ChartJsPage;
