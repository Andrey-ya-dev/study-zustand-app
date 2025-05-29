import { Input } from "antd";
import { setParams, useCoffeeStore } from "../../model/coffeeStore";

import cls from "./Search.module.css";
import { useShallow } from "zustand/shallow";
import { useUrlStorage } from "../../helpers/useUrlStorage";

export const SearchInput = () => {
  const [params] = useCoffeeStore(useShallow((state) => [state.params]));

  useUrlStorage(params, setParams);

  return (
    <Input
      placeholder="Search"
      value={params.text}
      onChange={(e) => setParams({ text: e.target.value })}
      className={cls["search-input"]}
    />
  );
};
