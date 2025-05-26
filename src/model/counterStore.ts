import { type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { create } from "../helpers/create";

type CounterState = {
  counter: number;
  persistedCounter: number;
};

type CounterActions = {
  increase: () => void;
  decrease: () => void;
  changeByValue: (value: number) => void;
  resetStore: () => void;
};

const initialStore = {
  counter: 0,
  persistedCounter: 0,
};

const counterSlice: StateCreator<CounterState & CounterActions> = (
  set,
  get
) => {
  return {
    counter: 0,
    persistedCounter: 0,
    resetStore() {
      set(initialStore);
    },
    increase() {
      const { counter, persistedCounter } = get();
      set({
        counter: counter + 1,
        persistedCounter: persistedCounter + 1,
      });
    },
    decrease() {
      const { counter, persistedCounter } = get();
      set({
        counter: counter - 1,
        persistedCounter: persistedCounter - 1,
      });
    },
    changeByValue(value) {
      const { counter } = get();
      set({ counter: counter + value });
    },
  };
};

export const useCounterStore = create<CounterState & CounterActions>()(
  devtools(
    persist(counterSlice, {
      name: "counterStore",
      partialize(state) {
        return { persistedCounter: state.persistedCounter };
      },
    })
  )
);

export const getCounter = () => useCounterStore.getState().counter;
export const changeByValue = (value: number) =>
  useCounterStore.getState().changeByValue(value);
