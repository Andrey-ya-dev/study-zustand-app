import { Card, Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import cls from "./TodoItem.module.css";
import type { TodoType } from "../../model/todoStore";

export interface TodoItemProps {
  todo: TodoType;
  changeDoneState: (id: string) => void;
  removeTodo: (id: string) => void;
}

export function TodoItem({ todo, changeDoneState, removeTodo }: TodoItemProps) {
  return (
    <Card
      onClick={() => changeDoneState(todo.id)}
      key={todo.id}
      className={cls["card"]}
    >
      <span>
        <Checkbox checked={todo.isDone} />
      </span>
      <span
        style={{
          textDecoration: todo.isDone ? "line-through" : "",
        }}
      >
        {todo.title}
      </span>
      <Button
        onClick={() => removeTodo(todo.id)}
        style={{
          marginLeft: "auto",
        }}
      >
        <CloseOutlined />
      </Button>
    </Card>
  );
}
