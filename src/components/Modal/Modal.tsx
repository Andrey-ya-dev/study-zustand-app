import type { PropsWithChildren } from "react";
import { CloseMenuButton } from "../IconButton";
import { Portal } from "../Portal/Portal";

import cls from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  classNameSection?: string;
} & PropsWithChildren;

export function Modal({ isOpen, closeModal, children }: ModalProps) {
  return (
    <Portal>
      {isOpen && (
        <div className={`${cls["modal"]} modal`}>
          <div className={cls["modal__content"]}>
            <CloseMenuButton
              className={`${cls["modal__close-button"]}`}
              onClick={() => closeModal(false)}
            />
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
}
