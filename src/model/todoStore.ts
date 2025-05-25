import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type TodoType = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoState = {
  items: TodoType[];
};

type TodoActions = {
  addTodo: (value: string) => void;
  removeTodo: (id: string) => void;
  changeDoneState: (id: string) => void;
};

const todoSlice: StateCreator<
  TodoState & TodoActions,
  [["zustand/devtools", never]]
> = (set, get) => {
  return {
    items: [],
    addTodo(value) {
      // Параметры для devtools
      set(
        (state) => ({
          ...state,
          items: [
            ...state.items,
            {
              id: Math.random() + value,
              isDone: false,
              title: value,
            },
          ],
        }),
        false,
        `addTodo ${value}`
      );
    },
    removeTodo(id) {
      set((state) => ({
        ...state,
        items: state.items.filter((todo) => todo.id !== id),
      }));
    },
    changeDoneState(id) {
      const { items } = get();
      const copyItems = structuredClone(items);
      const todo = copyItems.find((t) => t.id === id);

      if (todo) {
        todo.isDone = !todo.isDone;
      }

      set((state) => ({ ...state, items: copyItems }));
    },
  };
};

export const useTodoStore = create(devtools(todoSlice));
