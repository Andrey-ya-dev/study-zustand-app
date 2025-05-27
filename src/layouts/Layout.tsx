import { NavLink, Outlet } from "react-router";

import "./Layouts.css";

type NavListItemProps = {
  href: string;
  linkTitle: string;
};

export function NavListItem({ href, linkTitle }: NavListItemProps) {
  return (
    <li className="main-nav__list-item">
      <NavLink
        to={`${href}`}
        className={({ isActive }) =>
          `main-nav__list-link ${isActive ? "active-link" : ""}`
        }
      >
        {linkTitle}
      </NavLink>
    </li>
  );
}

export function Layout() {
  return (
    <div className="container">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <NavListItem href="/dev/counter" linkTitle="Counter example" />
          <NavListItem href="/dev/easy-todo" linkTitle="Todo example" />
          <NavListItem href="/dev/coffee-app" linkTitle="Coffee app example" />
        </ul>
      </nav>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
