import { create, type StateCreator } from "zustand";

type CounterState = {
  counter: number;
};

type CounterActions = {
  increase: () => void;
  decrease: () => void;
  changeByValue: (value: number) => void;
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
    changeByValue(value) {
      const { counter } = get();
      set({ counter: counter + value });
    },
  };
};

export const useCounterStore = create(counterSlice);

export const getCounter = () => useCounterStore.getState().counter;
export const changeByValue = (value: number) =>
  useCounterStore.getState().changeByValue(value);
