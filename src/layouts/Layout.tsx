import { Outlet, useLocation } from "react-router";

import cls from "./Layouts.module.css";
import { Cart } from "../components/Cart/Cart";
import { NavMenu } from "../components/NavMenu/NavMenu";
import { SectionTemplate } from "../components/SectionTemplate/SectionTemplate";

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className={cls["container"]}>
      <div className={cls["aside-section"]}>
        <nav className={cls["main-nav"]}>
          <SectionTemplate sectionTitle="Navigation">
            <NavMenu />
          </SectionTemplate>
        </nav>

        {pathname === "/" && (
          <SectionTemplate sectionTitle="Cart">
            <Cart />
          </SectionTemplate>
        )}
      </div>

      <main className={cls["main"]}>
        <Outlet />
      </main>
    </div>
  );
}
