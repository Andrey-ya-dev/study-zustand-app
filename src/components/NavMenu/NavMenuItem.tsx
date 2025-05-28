import { NavLink } from "react-router";

import cls from "./NavMenu.module.css";

type NavMenuItemProps = {
  href: string;
  linkTitle: string;
};

export function NavMenuItem({ href, linkTitle }: NavMenuItemProps) {
  return (
    <li className={cls["main-nav__list-item"]}>
      <NavLink
        to={`${href}`}
        className={({ isActive }) =>
          `${cls["main-nav__list-link"]} ${isActive ? cls["active-link"] : ""}`
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
}
