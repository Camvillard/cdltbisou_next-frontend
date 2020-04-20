import styled from "styled-components";
import { themeColors } from "../Theme/theme";

const { golden } = themeColors;

type Header1Props = {
  color: string;
};

export const Header1 = styled.h1`
  color: ${(props: Header1Props) => props.color || golden};
`;

export const TitleCounter = styled.span`
  font-size: 0.5em;
  margin-left: 4px;
  position: relative;
  top: -0.8em;
  font-weight: 400;
`;
