import { Button } from "antd";
import { useCounterStore } from "../../model/counterStore";
import { addTen } from "../../helpers/addTen";
import { resetAllStores } from "../../helpers/create";

import cls from "./Counter.module.css";
import { TemplatePage } from "../TemplatePage/TemplatePage";

export function CounterPage() {
  const { counter, increase, decrease, persistedCounter, resetStore } =
    useCounterStore();
  return (
    <>
      <TemplatePage
        titleSection="Counter example"
        classNameSection={cls["counter-section"]}
      >
        <Button onClick={increase}>+</Button>
        <span>{counter}</span>|<span>{persistedCounter}</span>
        <Button onClick={decrease}>-</Button>
        <Button onClick={addTen}>by value</Button>
        <Button onClick={resetStore}>resetStore</Button>
        <Button onClick={resetAllStores}>resetAllStores</Button>
      </TemplatePage>
    </>
  );
}
