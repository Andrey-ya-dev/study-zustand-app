import type { StateCreator } from "zustand";
import { create } from "../helpers/create";
import { devtools } from "zustand/middleware";
import { getCoffeeList } from "./coffeeStore";

type SearchState = {
  text?: string;
};

type SearchActions = {
  setText: (text: string) => void;
};

export const searchSlice: StateCreator<SearchState & SearchActions> = (set) => {
  return {
    text: "",
    setText(text) {
      set({ text });
    },
  };
};

export const useSearchStore = create<SearchState & SearchActions>()(
  devtools(searchSlice)
);

useSearchStore.subscribe((state, prevState) => {
  if (state.text !== prevState.text) {
    getCoffeeList({ text: state.text });
  }
});
