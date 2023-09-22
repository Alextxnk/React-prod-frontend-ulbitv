import { classNames } from 'shared/lib';
import { useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import styles from './Sidebar.module.scss';

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
         <div className={styles.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher />
         </div>
      </div>
   );
};

export default Sidebar;
