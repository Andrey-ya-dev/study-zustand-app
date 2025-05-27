import type { PropsWithChildren } from "react";

import cls from "./TemplatePage.module.css";
import Title from "antd/es/typography/Title";

type TemplatePageProps = {
  titleSection: string;
  classNameSection?: string;
} & PropsWithChildren;

export function TemplatePage({
  titleSection,
  children,
  classNameSection,
}: TemplatePageProps) {
  return (
    <div className={cls["wrapper"]}>
      <Title type="warning" level={2} className={cls["title-section"]}>
        {titleSection}
      </Title>
      <div className={`${cls[`section`]} ${classNameSection}`}>{children}</div>
    </div>
  );
}
