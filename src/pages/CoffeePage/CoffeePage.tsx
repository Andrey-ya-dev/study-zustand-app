import cls from "./CoffeePage.module.css";
import { TemplatePage } from "../TemplatePage/TemplatePage";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { CardList } from "../../components/CardList/CardList";
import { CategoryPicker } from "../../components/CategoryPicker/CategoryPicker";

export function CoffeePage() {
  return (
    <TemplatePage titleSection="Coffee app">
      <div className={cls["search-input__box"]}>
        <SearchInput />
      </div>
      <CategoryPicker />
      <CardList />
    </TemplatePage>
  );
}
