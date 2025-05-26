import { Button, Card, Input, Rate, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCoffeeStore } from "../../model/coffeeStore";
import { useEffect, useState } from "react";

import "./CoffeePage.css";

export type CoffeePageProps = {
  className?: string;
  test?: string;
};

export function CoffeePage({ className }: CoffeePageProps) {
  const { coffeeList, getCoffeeList } = useCoffeeStore();
  const [searchValue, setSeatchValue] = useState("");

  const handleSearch = (text: string) => {
    getCoffeeList({ text });
    setSeatchValue(text);
  };

  useEffect(() => {
    getCoffeeList();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Input
        style={{
          maxWidth: 300,
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
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
