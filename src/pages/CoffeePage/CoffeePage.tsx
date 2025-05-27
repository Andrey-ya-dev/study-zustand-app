import { Input } from "antd";
import { useCoffeeStore } from "../../model/coffeeStore";
import { useEffect, useState } from "react";

import cls from "./CoffeePage.module.css";
import { TemplatePage } from "../TemplatePage/TemplatePage";
import { CoffeeCard } from "./CoffeeCard";

export type CoffeePageProps = {
  className?: string;
  test?: string;
};

export function CoffeePage({ className }: CoffeePageProps) {
  const { coffeeList, getCoffeeList, addCoffeeToCart } = useCoffeeStore();
  const [searchValue, setSeatchValue] = useState("");

  const handleSearch = (text: string) => {
    getCoffeeList({ text });
    setSeatchValue(text);
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  return (
    <TemplatePage titleSection="Coffee app">
      <div className={cls["search-input__box"]}>
        <Input
          style={{}}
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
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
