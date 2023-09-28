import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClasses} to='/'>
        Home
      </NavLink>
      <NavLink className={navLinkClasses} to='/plants'>
        Plants
      </NavLink>
    </nav>
  );
};

export default NavBar;
