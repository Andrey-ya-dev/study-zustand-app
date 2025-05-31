import type {
  CoffeType,
  GetCofeeListParams,
  OrderItem,
} from "../types/coffeTypes";

export type CofeeCategory =
  | "all coffee"
  | "cappuccino"
  | "latte"
  | "macchiato"
  | "americano";

export type CoffeeState = {
  coffeeList: CoffeType[];
  controller?: AbortController;

  params: GetCofeeListParams;
};

export type CoffeeActions = {
  getCoffeeList: (params?: GetCofeeListParams) => void;

  setParams: (params?: GetCofeeListParams) => void;
};

export type CartState = {
  cart?: OrderItem[];
  address?: string;
  cartCount?: number;
};

export type CartActions = {
  addCoffeeToCart: (coffee: CoffeType) => void;
  setAddress: (address: string) => void;
  clearCart: () => void;
  sendOrder: () => void;
  calculateCount: () => void;
};
