export type CoffeType = {
  id: number;
  name: string;
  subTitle: string;
  type: string;
  price: number;
  image: string;
  description: string;
  rating: number;
};

export type GetCofeeListParams = {
  text?: string;
};

export type OrderItem = {
  id: number;
  name: string;
  size: "L";
  quantity: number;
};

export type OrderCoffeeReq = {
  address: string;
  orderItems: OrderItem[];
};

export type OrderCoffeeRes = {
  message: string;
  success: boolean;
};
