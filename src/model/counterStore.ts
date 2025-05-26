import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CounterState = {
  counter: number;
  persistedCounter: number;
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
    persistedCounter: 0,
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
