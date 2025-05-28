import type {
  CoffeType,
  GetCofeeListParams,
  OrderItem,
} from "../types/coffeTypes";

// 1. Тип для стейта
export type CoffeeState = {
  coffeeList: CoffeType[];
  controller?: AbortController;

  params: GetCofeeListParams;
};

// 2. Тип для экшенов
export type CoffeeActions = {
  getCoffeeList: (params?: GetCofeeListParams) => void;

  setParams: (params?: GetCofeeListParams) => void;
};

export type CartState = {
  cart?: OrderItem[];
  address?: string;
};

export type CartActions = {
  addCoffeeToCart: (coffee: CoffeType) => void;
  setAddress: (address: string) => void;
  clearCart: () => void;
  sendOrder: () => void;
};
