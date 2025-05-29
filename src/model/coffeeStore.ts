import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { CoffeType, GetCofeeListParams } from "../types/coffeTypes";
import { coffeeSlice } from "./coffeeSlice";
import { cartSlice } from "./cartSlice";
import type {
  CartActions,
  CartState,
  CoffeeActions,
  CoffeeState,
} from "./storeTypes";

export const useCoffeeStore = create<
  CartState & CartActions & CoffeeState & CoffeeActions
>()(
  devtools(
    persist((...args) => ({ ...coffeeSlice(...args), ...cartSlice(...args) }), {
      name: "coffeeStore",
      partialize(state) {
        return { cart: state.cart, address: state.address };
      },
    })
  )
);

export const getCoffeeList = (params?: GetCofeeListParams) =>
  useCoffeeStore.getState().getCoffeeList(params);

export const setParams = (params?: GetCofeeListParams) =>
  useCoffeeStore.getState().setParams(params);

export const setAddress = (address: string) =>
  useCoffeeStore.getState().setAddress(address);

export const clearCart = () => useCoffeeStore.getState().clearCart();

export const sendOrder = () => useCoffeeStore.getState().sendOrder();

export const addCoffeeToCart = (coffee: CoffeType) =>
  useCoffeeStore.getState().addCoffeeToCart(coffee);
