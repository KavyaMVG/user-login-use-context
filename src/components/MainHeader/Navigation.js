import React from "react";
import { useContext } from "react";
import AuthContext from "../../store/AuthContext";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const context = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
