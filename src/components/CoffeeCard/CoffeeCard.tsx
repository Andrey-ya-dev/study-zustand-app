import { Button, Card, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import type { CoffeType } from "../../types/coffeTypes";

export type CoffeeCardProps = {
  className?: string;
  coffee: CoffeType;
  addCoffeeToCart: (coffee: CoffeType) => void;
};

export function CoffeeCard({ coffee, addCoffeeToCart }: CoffeeCardProps) {
  return (
    <Card
      style={{ maxWidth: 440 }}
      hoverable
      key={coffee.id}
      cover={<img src={coffee.image} />}
      actions={[
        <Button
          icon={<ShoppingCartOutlined />}
          key={coffee.name}
          onClick={() => {
            console.log("add");
            addCoffeeToCart(coffee);
          }}
        >
          {coffee.price}
        </Button>,
      ]}
    >
      <Card.Meta title={coffee.name} description={coffee.subTitle} />
      <Tag style={{ marginTop: "24px" }} color="purple">
        {coffee.type}
      </Tag>
      <Rate
        defaultValue={coffee.rating}
        disabled
        allowHalf
        style={{ marginTop: "24px" }}
      />
    </Card>
  );
}
