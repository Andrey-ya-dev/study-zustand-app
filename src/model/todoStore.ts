import { type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { create } from "../helpers/create";

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

// создается слайс для стора
const todoSlice: StateCreator<
  TodoState & TodoActions,
  [["zustand/devtools", never]]
> = (set, get) => {
  return {
    items: [],
    addTodo(value) {
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
        // Параметры для devtools
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
      // получение всего стора get
      const { items } = get();
      const copyItems = structuredClone(items);
      const todo = copyItems.find((t) => t.id === id);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
      // записть данных для стора set
      set((state) => ({ ...state, items: copyItems }));
    },
  };
};

// создается хук из слайса или create<T>()(devtools(todoSlice)), для мидлвар с указанием типов
export const useTodoStore = create<TodoState & TodoActions>()(
  devtools(todoSlice)
);
