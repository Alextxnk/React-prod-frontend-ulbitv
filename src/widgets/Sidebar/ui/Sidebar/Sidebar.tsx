import { classNames } from 'shared/lib';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import Button from 'shared/ui/Button/Button';

interface SidebarProps {
   className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState<boolean>(false);

   const onToggle = () => {
      setCollapsed((prev) => !prev);
   };

   return (
      <div
         className={classNames(styles.Sidebar, [className], {
            [styles.collapsed]: collapsed
         })}
      >
         <Button onClick={onToggle}>toggle</Button>
      </div>
   );
};

export default Sidebar;
