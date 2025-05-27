import { NavLink, Outlet, useLocation } from "react-router";

import cls from "./Layouts.module.css";
import Title from "antd/es/typography/Title";
import { Cart } from "../pages/CoffeePage/Cart";

type NavListItemProps = {
  href: string;
  linkTitle: string;
};

export function NavListItem({ href, linkTitle }: NavListItemProps) {
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

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={cls["container"]}>
      <div className={cls["aside-section"]}>
        <nav className={cls["main-nav"]}>
          <Title level={3} type="warning" className={cls["title"]}>
            Navigation
          </Title>
          <ul className={cls["main-nav__list"]}>
            <NavListItem href="/" linkTitle="Counter example" />
            <NavListItem href="/easy-todo" linkTitle="Todo example" />
            <NavListItem href="/coffee-app" linkTitle="Coffee app example" />
          </ul>
        </nav>

        {pathname === "/coffee-app" && (
          <div className={cls["cart-section"]}>
            <Title level={3} type="warning" className={cls["title"]}>
              Cart
            </Title>
            <Cart />
          </div>
        )}
      </div>

      <main className={cls["main"]}>
        <Outlet />
      </main>
    </div>
  );
}
