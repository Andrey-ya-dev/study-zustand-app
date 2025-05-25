import { Button, Card, Checkbox, Input, type InputRef } from "antd";
import "./App.css";
import { useCounterStore } from "./model/counterStore";
import { addTen } from "./helpers/addTen";
import Title from "antd/es/typography/Title";
import { useTodoStore } from "./model/todoStore";
import { useRef, useState, type KeyboardEvent } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { CoffeePage } from "./pages/CoffeePage/CoffeePage";

function App() {
  const { counter, increase, decrease } = useCounterStore();
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
    <div className="wrapper">
      <Title type="warning" level={2}>
        Counter example
      </Title>
      <hr />
      <div className="section">
        <Button onClick={increase}>+</Button>
        <span>{counter}</span>
        <Button onClick={decrease}>-</Button>
        <Button onClick={addTen}>by value</Button>
      </div>
      <hr />
      <Title type="warning" level={2}>
        Easy todo
      </Title>
      <div className={`section section-min-w`}>
        <Input
          placeholder="todo write here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={addTodoByKeyboard}
          ref={inputRef}
        />
        <Button onClick={addOneTodo}>add</Button>
      </div>
      <div className="todo-section">
        {items &&
          items.map((todo) => {
            return (
              <Card
                onClick={() => changeDoneState(todo.id)}
                key={todo.id}
                className="card"
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
          })}
      </div>
      <hr />
      <Title type="warning" level={2}>
        Coffee app
      </Title>
      <CoffeePage />
    </div>
  );
}

export default App;
