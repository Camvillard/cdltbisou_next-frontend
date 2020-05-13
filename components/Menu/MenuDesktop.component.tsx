import React, { useState } from "react";
import styled from "styled-components";
import { Nav } from "./Nav.component";
import { themeColors } from "../Theme/theme";

const { darkBlue } = themeColors;

interface IToggleProps {
  isOpen: boolean;
}

const Toggle = styled.p<IToggleProps>`
  position: fixed;
  top: 8px;
  right: 16px;
  margin: 0;
  font-weight: 700;
  font-size: 3.2rem;
  z-index: 3000;
  color: ${(props) => (props.isOpen ? "white" : darkBlue)};
  &:hover {
    cursor: pointer;
  }
`;

export const MenuDesktop = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Nav />}
      <Toggle onClick={toggle} isOpen={isOpen}>
        menu
      </Toggle>
    </>
  );
};
