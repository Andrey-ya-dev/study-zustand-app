import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type {
  CoffeType,
  GetCofeeListParams,
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
};

// 2. Тип для экшенов
type CoffeeActions = {
  getCoffeeList: (text?: GetCofeeListParams) => void;
  addCoffeeToCart: (coffee: CoffeType) => void;
  setAddress: (address: string) => void;
  clearCart: () => void;
};

// 3. Создаем слайс
const coffeeSlice: StateCreator<CoffeeState & CoffeeActions> = (set, get) => {
  return {
    coffeeList: [],
    controller: undefined,
    cart: [],
    address: "",
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

        set((state) => ({ ...state, coffeeList: [...data] }));
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        console.log(err);
      }
    },
  };
};

// 4. Хук
export const useCoffeeStore = create<CoffeeState & CoffeeActions>()(
  devtools(coffeeSlice)
);
