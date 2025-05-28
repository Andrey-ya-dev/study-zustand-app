import { Outlet, useLocation } from "react-router";

import cls from "./Layouts.module.css";
import Title from "antd/es/typography/Title";
import { Cart } from "../components/Cart/Cart";
import { NavMenu } from "../components/NavMenu/NavMenu";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={cls["container"]}>
      <div className={cls["aside-section"]}>
        <nav className={cls["main-nav"]}>
          <Title level={3} type="warning" className={cls["title"]}>
            Navigation
          </Title>
          <NavMenu />
        </nav>

        {pathname === "/" && (
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
