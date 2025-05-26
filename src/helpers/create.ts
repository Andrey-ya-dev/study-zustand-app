import { create as _create, type StateCreator } from "zustand";

const resetStoreFns = new Set<() => void>();

export const resetAllStores = () => {
  resetStoreFns.forEach((resetFn) => {
    resetFn();
  });
};

export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator);
    const initialState = store.getInitialState();
    const resetStore = () => {
      store.setState(initialState, true);
    };
    resetStoreFns.add(resetStore);
    return store;
  };
}) as typeof _create;
