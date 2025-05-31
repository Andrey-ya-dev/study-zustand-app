import { type PropsWithChildren } from "react";

import cls from "./SectionTemplate.module.css";
import Title from "antd/es/typography/Title";

type SectionTemplateProps = {
  sectionTitle: string;
  classNameSection?: string;
} & PropsWithChildren;

export function SectionTemplate({
  sectionTitle,
  children,
}: SectionTemplateProps) {
  return (
    <section className={cls["section"]}>
      <Title level={3} type="warning" className={cls["section__title"]}>
        {sectionTitle}
      </Title>
      <div className={cls["section__content"]}>{children}</div>
    </section>
  );
}
