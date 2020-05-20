import React, { ReactNode } from "react";
import styled from "styled-components";

import { Menu } from "../Menu/Menu.component";
import { themeBreakpoints } from "../Theme/theme";

const { xsm, sm, md, lg, xl } = themeBreakpoints;

const DefaultLayoutWrapper = styled.div`
  margin-bottom: 122px;
  @media (min-width: ${md}) {
    margin-bottom: 0;
  }
`;

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutWrapper>
      <Menu />
      <main>{children}</main>
    </DefaultLayoutWrapper>
  );
};
