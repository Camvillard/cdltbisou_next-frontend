import React, { Fragment } from "react";
import { Header1, TitleCounter } from "./Titles.ui";

type TitleProps = {
  title: string;
  counter: number;
  color: string;
};

export const TitleWithCounter = (props: TitleProps) => {
  const { title, counter, color } = props;
  return (
    <Fragment>
      <Header1 color={color}>
        {title}
        <TitleCounter>({counter})</TitleCounter>
      </Header1>
    </Fragment>
  );
};
