import { Input } from "antd";
import { useCoffeeStore } from "../../model/coffeeStore";

import cls from "./CoffeePage.module.css";
import { TemplatePage } from "../TemplatePage/TemplatePage";
import { CoffeeCard } from "./CoffeeCard";
import { useUrlStorage } from "../../helpers/useUrlStorage";

export type CoffeePageProps = {
  className?: string;
  test?: string;
};

export function CoffeePage({ className }: CoffeePageProps) {
  const { coffeeList, addCoffeeToCart, params, setParams } = useCoffeeStore();

  useUrlStorage(params, setParams);

  return (
    <TemplatePage titleSection="Coffee app">
      <div className={cls["search-input__box"]}>
        <Input
          style={{}}
          placeholder="Search"
          value={params.text}
          onChange={(e) => setParams({ text: e.target.value })}
          className={cls["search-input"]}
        />
      </div>
      {coffeeList && (
        <div className={`${cls["cards-container"]} ${className || ""}`}>
          {coffeeList.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              key={coffee.id}
              addCoffeeToCart={addCoffeeToCart}
            />
          ))}
        </div>
      )}
    </TemplatePage>
  );
}
