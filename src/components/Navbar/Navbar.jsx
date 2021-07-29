import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const login = (e) => {
    e.preventDefault();
    setIsLogged(true);
  };
  const logout = (e) => {
    e.preventDefault();
    setIsLogged(false);
  };

  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.logo}>
          <NavLink className={styles.link} to="/">
            BOOKMARK
          </NavLink>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {isLogged ? (
              <>
                <li>
                  <NavLink className={styles.link} to="/add-book">
                    ADD A BOOK
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.link} to="/my-books">
                    MY BOOKS
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.link} to="/profile">
                    PROFILE
                  </NavLink>
                </li>
                <li onClick={logout}>
                  <NavLink className={styles.link} to="/logout">
                    LOGOUT
                  </NavLink>
                </li>
              </>
            ) : (
              <li onClick={login}>
                <NavLink className={styles.link} to="/login">
                  LOGIN
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
