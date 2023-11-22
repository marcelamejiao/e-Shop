import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClasses = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClasses} to='/e-Shop/plants'>
        Plants
      </NavLink>
      <NavLink className={navLinkClasses} to='/e-Shop/shoppingCart'>
        My Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;
