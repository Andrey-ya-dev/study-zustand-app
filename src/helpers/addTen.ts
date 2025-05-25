import { changeByValue, getCounter } from "../model/counterStore";

export function addTen() {
  const counter = getCounter();

  if (counter < 0) {
    changeByValue(-10);
  } else {
    changeByValue(10);
  }
}
