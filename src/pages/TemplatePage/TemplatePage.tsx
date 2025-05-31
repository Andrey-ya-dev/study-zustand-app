import { useState, type PropsWithChildren } from "react";

import cls from "./TemplatePage.module.css";
import Title from "antd/es/typography/Title";
import { NavMenu } from "../../components/NavMenu/NavMenu";
import { useLocation } from "react-router";
import { Cart } from "../../components/Cart/Cart";
import { BurgerMenuButton } from "../../components/IconButton";
import { SectionTemplate } from "../../components/SectionTemplate/SectionTemplate";
import { Modal } from "../../components/Modal/Modal";
import { CartTag } from "./CartTag";

type TemplatePageProps = {
  titleSection: string;
  classNameSection?: string;
} & PropsWithChildren;

export function TemplatePage({
  titleSection,
  children,
  classNameSection = "",
}: TemplatePageProps) {
  const [modalState, setModalState] = useState(false);
  const { pathname } = useLocation();

  const openModal = () => setModalState(true);

  const closeModal = () => setModalState(false);

  return (
    <div className={cls["wrapper"]}>
      <div className={cls["page-header"]}>
        <BurgerMenuButton
          className={`${cls["menu__button"]} burger-menu`}
          onClick={openModal}
        />

        {pathname === "/" && <CartTag />}

        <Modal isOpen={modalState} closeModal={closeModal}>
          <SectionTemplate sectionTitle="Navigation">
            <NavMenu />
          </SectionTemplate>

          {pathname === "/" && (
            <SectionTemplate sectionTitle="Cart">
              <Cart />
            </SectionTemplate>
          )}
        </Modal>

        <Title type="warning" level={2} className={cls["page-title"]}>
          {titleSection}
        </Title>
      </div>

      <div className={`${cls[`page-section`]} ${classNameSection}`}>
        {children}
      </div>
    </div>
  );
}
