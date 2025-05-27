import { Button, Input } from "antd";
import Title from "antd/es/typography/Title";
import { useCoffeeStore } from "../../model/coffeeStore";

import cls from "./CoffeePage.module.css";

export function Cart() {
  const { cart, clearCart, address, setAddress } = useCoffeeStore();

  return (
    <aside className={cls["cart"]}>
      <Title
        level={5}
        type="success"
        style={{
          paddingLeft: 20,
        }}
      >
        Get order
      </Title>
      <div className={cls["cart-list"]}>
        {cart?.map((item) => {
          return (
            <div className={cls["cart-item"]} key={item.id}>
              <span className={cls["cart-item__title"]}>{item.name}</span>
              <span className={cls["cart-item__count"]}>{item.quantity}</span>
            </div>
          );
        })}
      </div>
      <Input
        placeholder="address please"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div>
        <Button type="primary" disabled={!address?.length || !cart?.length}>
          buy coffee
        </Button>
        <Button onClick={clearCart} disabled={!cart?.length}>
          clear cart
        </Button>
      </div>
    </aside>
  );
}
