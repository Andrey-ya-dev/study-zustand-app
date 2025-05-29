import { useShallow } from "zustand/shallow";
import { Tag } from "antd";

import { useCoffeeStore } from "../../model/coffeeStore";
import type { CofeeCategory } from "../../model/storeTypes";

const coffeeTypes: CofeeCategory[] = [
  "all coffee",
  "cappuccino",
  "latte",
  "macchiato",
  "americano",
];

export function CategoryPicker() {
  const [params, setParams] = useCoffeeStore(
    useShallow((state) => [state.params, state.setParams])
  );

  return (
    <div
      style={{
        display: "flex",
        paddingTop: 20,
        paddingLeft: 40,
      }}
    >
      {coffeeTypes.map((item) => {
        return (
          <Tag
            key={item}
            color={
              item === params.type || (!params.type && item === "all coffee")
                ? "purple"
                : ""
            }
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              if (item === "all coffee") {
                setParams({ type: undefined });
              } else {
                setParams({ type: item });
              }
            }}
          >
            {item}
          </Tag>
        );
      })}
    </div>
  );
}
