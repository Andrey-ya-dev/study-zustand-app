import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { clearCart, setAddress, useCoffeeStore } from "../../model/coffeeStore";
import { ShoppingCartOutlined } from "@ant-design/icons";

import cls from "./Cart.module.css";
import { CartItem } from "./CartItem";
import { useShallow } from "zustand/shallow";

export function Cart() {
  const [address, sendOrder] = useCoffeeStore(
    useShallow((state) => [state.address, state.sendOrder])
  );
  const { cart } = useCoffeeStore();

  return (
    <aside className={cls["cart"]}>
      <Title
        level={5}
        type="success"
        style={{
          paddingLeft: 20,
        }}
      >
        <span>
          <ShoppingCartOutlined />
        </span>
        Get order
      </Title>
      <div className={cls["cart-list"]}>
        {cart?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <Input
        placeholder="address please"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div>
        <Button
          type="primary"
          disabled={!address?.length || !cart?.length}
          onClick={sendOrder}
        >
          buy coffee
        </Button>
        <Button onClick={clearCart} disabled={!cart?.length}>
          clear cart
        </Button>
      </div>
    </aside>
  );
}
