import { Button, Card, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import type { CoffeType } from "../../types/coffeTypes";
import { addCoffeeToCart } from "../../model/coffeeStore";

export type CoffeeCardProps = {
  className?: string;
  coffee: CoffeType;
};

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
