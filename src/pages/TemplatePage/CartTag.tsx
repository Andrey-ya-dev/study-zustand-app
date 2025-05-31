import { Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import cls from "./TemplatePage.module.css";

interface CartTagProps {
  cartCount?: number;
}

export function CartTag({ cartCount = 0 }: CartTagProps) {
  return (
    <Tag color="green" className={cls["cart__info"]}>
      <ShoppingCartOutlined />
      <span className={cls["cart__info-count"]}>{cartCount}</span>
    </Tag>
  );
}
