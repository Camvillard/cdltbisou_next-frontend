import React, { ReactNode } from "react";
import { Menu } from "../Menu/Menu.component";

type DefaultLayoutProps = {
  children: ReactNode;
};
export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};
