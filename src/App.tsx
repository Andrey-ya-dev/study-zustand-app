import { Button } from "antd";
import "./App.css";
import { useCounterStore } from "./model/counterStore";
import { addTen } from "./helpers/addTen";

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
        <Button onClick={addTen}>by value</Button>
      </div>
    </div>
  );
}

export default App;
// added example for use action outside a component
