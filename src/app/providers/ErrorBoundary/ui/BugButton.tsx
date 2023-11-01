import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';

interface BugButtonProps {
   className?: string;
}

// компонент для тестирования ErrorBoundary
const BugButton = ({ className }: BugButtonProps) => {
   const [error, setError] = useState<boolean>(false);

   const throwError = () => {
      setError(true);
   };

   useEffect(() => {
      if (error) {
         throw new Error();
      }
   }, [error]);

   return (
      // eslint-disable-next-line i18next/no-literal-string
      <Button onClick={throwError} className={classNames('', [className])}>
         Throw Error
      </Button>
   );
};

export default BugButton;
