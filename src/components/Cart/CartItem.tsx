import type { OrderItem } from "../../types/coffeTypes";

import cls from "./Cart.module.css";

export function CartItem({ item }: { item: OrderItem }) {
  return (
    <div className={cls["cart-item"]}>
      <span className={cls["cart-item__title"]}>{item.name}</span>
      <span className={cls["cart-item__count"]}>{item.quantity}</span>
    </div>
  );
}
