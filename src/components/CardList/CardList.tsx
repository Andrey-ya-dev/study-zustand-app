import { useShallow } from "zustand/shallow";
import { useCoffeeStore } from "../../model/coffeeStore";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";

import cls from "./CardList.module.css";

export const CardList = () => {
  const [coffeeList] = useCoffeeStore(
    useShallow((state) => [state.coffeeList])
  );
  return (
    <>
      {coffeeList && (
        <div className={`${cls["cards-container"]}`}>
          {coffeeList.map((coffee) => (
            <CoffeeCard coffee={coffee} key={coffee.id} />
          ))}
        </div>
      )}
    </>
  );
};
