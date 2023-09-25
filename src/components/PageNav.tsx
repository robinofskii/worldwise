import { NavLink } from 'react-router-dom';

import styles from './PageNav.module.scss';

const PageNav = () => {
  const checkActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.active : '';
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" className={checkActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={checkActive}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={checkActive}>
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
