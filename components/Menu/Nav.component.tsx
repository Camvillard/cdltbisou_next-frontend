import React from "react";
import styled from "styled-components";
import { themeColors, themeBreakpoints } from "../Theme/theme";
import Link from "next/link";

const { darkBlue, golden } = themeColors;
const { md, lg } = themeBreakpoints;

const NavWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${darkBlue};
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2999;
  display: flex;
  align-items: flex-end;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 2vw;
  margin-bottom: 92px;
`;

const NavItem = styled.li`
  margin: 8px 0;
  a {
    color: white;
    font-size: 3.6rem;
    text-decoration: none;
    font-weight: 700;
    transition: 0.4s;
  }

  @media (min-width: ${md}) {
    a {
      font-size: 6.4rem;
    }

    a:hover {
      color: ${darkBlue};
      -webkit-text-stroke: 2px ${golden};
    }
  }
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link href={"/"}>
            <a>accueil</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/"}>
            <a>tous les produits</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/"}>
            <a>contact</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/"}>
            <a>à propos</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/"}>
            <a>revendeurs</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href={"/"}>
            <a>mentions légales</a>
          </Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};
