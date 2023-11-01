import { classNames } from 'shared/lib';
import './Loader.scss';

interface LoaderProps {
   className?: string;
}

const Loader = ({ className }: LoaderProps) => {
   return (
      <div className={classNames('lds-spinner', [className])}>
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
      </div>
   );
};

export default Loader;
