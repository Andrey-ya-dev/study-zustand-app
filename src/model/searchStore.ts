import type { StateCreator } from "zustand";
import { create } from "../helpers/create";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { getCoffeeList } from "./coffeeStore";
import { hashStorage } from "../helpers/hashStorage";

type SearchState = {
  text?: string;
};

type SearchActions = {
  setText: (text: string) => void;
};

export const searchSlice: StateCreator<
  SearchState & SearchActions,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set) => {
  return {
    text: "",
    setText(text) {
      set({ text });
    },
  };
};

export const useSearchStore = create<SearchState & SearchActions>()(
  devtools(
    persist(searchSlice, {
      name: "searchStore",
      storage: createJSONStorage(() => hashStorage),
    })
  )
);

useSearchStore.subscribe((state, prevState) => {
  if (state.text !== prevState.text) {
    getCoffeeList({ text: state.text });
  }
});
