import axios from "axios";
import type { StateCreator } from "zustand";

import type { OrderCoffeeRes, OrderItem } from "../types/coffeTypes";
import type {
  CartActions,
  CartState,
  CoffeeActions,
  CoffeeState,
} from "./storeTypes";
import { BASE_URL } from "../api/api";

export const cartSlice: StateCreator<
  CartState & CartActions & CoffeeState & CoffeeActions,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  CartState & CartActions
> = (set, get) => {
  return {
    cart: [],
    address: "",
    cartCount: 0,
    clearCart() {
      set({ cart: [], cartCount: 0 });
    },
    calculateCount() {
      const { cart } = get();

      const count = cart?.reduce((acc, cartItem) => {
        return acc + cartItem.quantity;
      }, 0);

      set({ cartCount: count });
    },
    setAddress(address) {
      set({ address });
    },
    addCoffeeToCart(coffee) {
      const { cart, calculateCount } = get();
      const { id, name, subTitle } = coffee;
      const prepearedItem: OrderItem = {
        id,
        name: `${name} ${subTitle}`,
        size: "L",
        quantity: 1,
      };

      const coffeeItem = cart?.find((i) => i.id === id);
      if (!coffeeItem) {
        set({ cart: cart ? [...cart, prepearedItem] : [prepearedItem] });
        calculateCount();
      } else {
        coffeeItem.quantity = coffeeItem.quantity + 1;
        set({ cart });
        calculateCount();
      }
    },
    async sendOrder() {
      const { cart, address, clearCart } = get();

      try {
        const { data } = await axios.post<OrderCoffeeRes>(`${BASE_URL}order`, {
          orderItems: cart,
          address,
        });

        if (data.success) {
          alert(data.message);
          clearCart();
        }
      } catch (err) {
        console.log(err);
      }
    },
  };
};
