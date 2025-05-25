import { create, type StateCreator } from "zustand";

type CounterState = {
  counter: number;
};

type CounterActions = {
  increase: () => void;
  decrease: () => void;
};

const counterSlice: StateCreator<CounterState & CounterActions> = (
  set,
  get
) => {
  return {
    counter: 0,
    increase() {
      const { counter } = get();
      set({ counter: counter + 1 });
    },
    decrease() {
      const { counter } = get();
      set({ counter: counter - 1 });
    },
  };
};

export const useCounterStore = create(counterSlice);
