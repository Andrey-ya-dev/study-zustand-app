import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {
  CoffeType,
  GetCofeeListParams,
  OrderCoffeeRes,
  OrderItem,
} from "../types/coffeTypes";
import axios from "axios";

const BASE_URL = "https://purpleschool.ru/coffee-api/";

// 1. Тип для стейта
type CoffeeState = {
  coffeeList: CoffeType[];
  controller?: AbortController;
  cart?: OrderItem[];
  address?: string;
  params: GetCofeeListParams;
};

// 2. Тип для экшенов
type CoffeeActions = {
  getCoffeeList: (params?: GetCofeeListParams) => void;
  addCoffeeToCart: (coffee: CoffeType) => void;
  setAddress: (address: string) => void;
  clearCart: () => void;
  sendOrder: () => void;
  setParams: (params?: GetCofeeListParams) => void;
};

// 3. Создаем слайс
const coffeeSlice: StateCreator<
  CoffeeState & CoffeeActions,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set, get) => {
  return {
    coffeeList: [],
    controller: undefined,
    cart: [],
    address: "",
    params: {
      text: "",
    },
    setParams(newParams) {
      const { getCoffeeList, params } = get();

      set({ params: { ...params, ...newParams } });
      getCoffeeList(params);
    },
    clearCart() {
      set({ cart: [] });
    },
    setAddress(address) {
      set({ address });
    },
    addCoffeeToCart(coffee) {
      const { cart } = get();
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
      } else {
        coffeeItem.quantity = coffeeItem.quantity + 1;
        set({ cart });
      }
    },
    async getCoffeeList(params) {
      const { controller } = get();

      if (controller) {
        controller.abort();
      }

      const newController = new AbortController();
      set({ controller: newController });
      const { signal } = newController;

      try {
        const { data } = await axios.get(`${BASE_URL}`, { params, signal });

        set({ coffeeList: data });
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        console.log(err);
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

// 4. Хук
export const useCoffeeStore = create<CoffeeState & CoffeeActions>()(
  devtools(
    persist(coffeeSlice, {
      name: "coffeeStore",
      partialize(state) {
        return { cart: state.cart, address: state.address };
      },
    })
  )
);

export const getCoffeeList = (params?: GetCofeeListParams) =>
  useCoffeeStore.getState().getCoffeeList(params);
