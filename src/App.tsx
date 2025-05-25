import { Button } from "antd";
import "./App.css";
import { useCounterStore } from "./model/counterStore";

function App() {
  const { counter, increase, decrease } = useCounterStore();

  return (
    <div className="wrapper">
      <h1>Counter example</h1>
      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Button onClick={increase}>+</Button>
        <span>{counter}</span>
        <Button onClick={decrease}>-</Button>
      </div>
    </div>
  );
}

export default App;
