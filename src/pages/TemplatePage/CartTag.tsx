import { Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import cls from "./TemplatePage.module.css";
import { useCoffeeStore } from "../../model/coffeeStore";
import { useShallow } from "zustand/shallow";

export function CartTag() {
  const [cartCount] = useCoffeeStore(useShallow((state) => [state.cartCount]));

  return (
    <Tag color="green" className={cls["cart__info"]}>
      <ShoppingCartOutlined />
      <span className={cls["cart__info-count"]}>{cartCount}</span>
    </Tag>
  );
}
