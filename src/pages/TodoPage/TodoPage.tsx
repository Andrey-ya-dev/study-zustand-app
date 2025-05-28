import { Button, Input, type InputRef } from "antd";
import { useTodoStore } from "../../model/todoStore";
import { useRef, useState, type KeyboardEvent } from "react";
import { TemplatePage } from "../TemplatePage/TemplatePage";

import cls from "./TodoPage.module.css";
import { TodoItem } from "../../components/TodoItem/TodoItem";

export function TodoPage() {
  const { items, addTodo, removeTodo, changeDoneState } = useTodoStore();
  const inputRef = useRef<InputRef | null>(null);

  const [value, setValue] = useState("");

  const addOneTodo = () => {
    if (value.length) {
      addTodo(value);
      setValue("");
      inputRef.current?.focus();
    }
  };

  const addTodoByKeyboard = (e: KeyboardEvent) => {
    if (e.key === "Enter" && value) {
      addOneTodo();
    }
  };
  return (
    <>
      <TemplatePage titleSection="Easy todo">
        <div className={cls["todo__input-section"]}>
          <Input
            placeholder="todo write here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={addTodoByKeyboard}
            ref={inputRef}
          />
          <Button onClick={addOneTodo}>add</Button>
        </div>

        <div className={cls["todo-section"]}>
          {items &&
            items.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  removeTodo={removeTodo}
                  changeDoneState={changeDoneState}
                  todo={todo}
                />
              );
            })}
        </div>
      </TemplatePage>
    </>
  );
}
