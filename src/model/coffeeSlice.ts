import type { StateCreator } from "zustand";
import type {
  CartActions,
  CartState,
  CoffeeActions,
  CoffeeState,
} from "./storeTypes";
import axios from "axios";
import { BASE_URL } from "../api/api";

export const coffeeSlice: StateCreator<
  CartState & CartActions & CoffeeState & CoffeeActions,
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  [["zustand/devtools", never], ["zustand/persist", unknown]],
  CoffeeState & CoffeeActions
> = (set, get) => {
  return {
    coffeeList: [],
    controller: undefined,
    params: {
      text: "",
    },
    setParams(newParams) {
      const { getCoffeeList, params } = get();

      set({ params: { ...params, ...newParams } }, false, "setParams");
      getCoffeeList(params);
    },
    async getCoffeeList(params) {
      const { controller } = get();

      if (controller) {
        controller.abort();
      }

      const newController = new AbortController();
      set({ controller: newController }, false, "setController");
      const { signal } = newController;

      try {
        const { data } = await axios.get(`${BASE_URL}`, { params, signal });

        set({ coffeeList: data }, false, "getCoffeeList");
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        console.log(err);
      }
    },
  };
};
