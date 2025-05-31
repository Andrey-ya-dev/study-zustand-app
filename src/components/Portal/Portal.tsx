import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
  container?: HTMLElement;
}

const body = document.body;

export const Portal = ({ children, container = body }: PortalProps) => {
  return createPortal(children, container);
};
