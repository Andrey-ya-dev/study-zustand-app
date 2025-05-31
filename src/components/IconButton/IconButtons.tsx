import { Button, type GetProps } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

type ButtonProps = GetProps<typeof Button>;

export const BurgerMenuButton = (props: ButtonProps) => (
  <Button {...props}>
    <MenuOutlined />
  </Button>
);

export const CloseMenuButton = (props: ButtonProps) => (
  <Button {...props}>
    <CloseOutlined />
  </Button>
);
