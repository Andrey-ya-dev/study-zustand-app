import { NavMenuItem } from "./NavMenuItem";

import cls from "./NavMenu.module.css";

export function NavMenu() {
  return (
    <ul className={cls["main-nav__list"]}>
      <NavMenuItem href="/" linkTitle="Coffee app example" />
      <NavMenuItem href="/easy-todo" linkTitle="Todo example" />
      <NavMenuItem href="/counter" linkTitle="Counter example" />
    </ul>
  );
}
