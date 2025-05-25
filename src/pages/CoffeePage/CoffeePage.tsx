import { Button, Card, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCoffeeStore } from "../../model/coffeeStore";
import { useEffect } from "react";

import "./CoffeePage.css";

export type CoffeePageProps = {
  className?: string;
};

export function CoffeePage({ className }: CoffeePageProps) {
  const { coffeeList, getCoffeeList } = useCoffeeStore();

  useEffect(() => {
    getCoffeeList();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {coffeeList && (
        <div className={`cardsContainer ${className || ""}`}>
          {coffeeList.map((coffee) => (
            <Card
              hoverable
              key={coffee.id}
              cover={<img src={coffee.image} />}
              actions={[
                <Button icon={<ShoppingCartOutlined />} key={coffee.name}>
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
          ))}
        </div>
      )}
    </div>
  );
}
