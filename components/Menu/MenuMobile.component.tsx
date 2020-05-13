import React, { useState } from "react";
import styled from "styled-components";
import { themeColors } from "../Theme/theme";
import { IconCart } from "../Icons/IconCart.component";
import { IconUser } from "../Icons/IconUser.component";
import { IconSearch } from "../Icons/IconSearch.component";
import { Nav } from "./Nav.component";

const { darkBlue } = themeColors;

export const MenuMobileWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3000;
  background: white;
  border-top: 2px solid ${darkBlue};
  height: 54px;
  padding: 0 2vw;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  align-items: center;
`;

export const Toggle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
`;

export const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Nav />}
      <MenuMobileWrapper>
        <Toggle onClick={toggle}>menu</Toggle>
        <IconCart />
        <IconUser />
        <IconSearch />
      </MenuMobileWrapper>
    </>
  );
};
