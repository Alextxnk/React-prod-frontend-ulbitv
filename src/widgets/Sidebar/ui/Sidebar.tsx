import { classNames } from 'shared/lib';
import styles from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
   return <div className={classNames(styles.Sidebar, [className])}></div>;
};

export default Sidebar;
