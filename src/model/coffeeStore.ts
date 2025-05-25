import { create, type StateCreator } from "zustand";
import type { CoffeType } from "../types/coffeTypes";
import axios from "axios";

const BASE_URL = "https://purpleschool.ru/coffee-api/";

// 1. Тип для стейта
type CoffeeState = {
  coffeeList: CoffeType[];
};

// 2. Тип для экшенов
type CoffeeActions = {
  getCoffeeList: () => void;
};

// 3. Создаем слайс
const coffeeSlice: StateCreator<CoffeeState & CoffeeActions> = (set) => {
  return {
    coffeeList: [],
    async getCoffeeList() {
      try {
        const { data } = await axios.get(`${BASE_URL}`);

        set((state) => ({ ...state, coffeeList: [...data] }));
      } catch (err) {
        console.log(err);
      }
    },
  };
};

// 4. Хук
export const useCoffeeStore = create(coffeeSlice);
