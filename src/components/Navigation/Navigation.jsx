import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${s.activeLink} ${s.navigationLink}`
            : `${s.notActiveLink} ${s.navigationLink}`
        }
        to="/"
      >
        Trail
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `${s.activeLink} ${s.navigationLink}`
            : `${s.notActiveLink} ${s.navigationLink}`;
        }}
        to="/cards"
      >
        Cards
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `${s.activeLink} ${s.navigationLink}`
            : `${s.notActiveLink} ${s.navigationLink}`;
        }}
        to="/table"
      >
        Table
      </NavLink>
    </nav>
  );
}
