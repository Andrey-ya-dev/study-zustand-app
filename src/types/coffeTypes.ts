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
