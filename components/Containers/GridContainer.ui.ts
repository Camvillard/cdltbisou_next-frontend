import styled from "styled-components";
import { Breakpoints, themeBreakpoints } from "../Theme/theme";

const { xsm, sm, md, lg, xl } = themeBreakpoints;

type GridContainerProps = {
  columns: Breakpoints;
  gap?: Breakpoints;
  bgColor?: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns.default};
  grid-gap: ${(props) => props.gap?.default || "8px"};
  background: ${(props) => props.bgColor};

  @media (min-width: ${sm}) {
    grid-template-columns: ${(props) => props.columns.sm};
    grid-gap: ${(props) => props.gap?.sm || "16px"};
  }

  @media (min-width: ${md}) {
    grid-template-columns: ${(props) => props.columns.md};
    grid-gap: ${(props) => props.gap?.md || "16px"};
  }

  @media (min-width: ${lg}) {
    grid-template-columns: ${(props) => props.columns.lg};
    grid-gap: ${(props) => props.gap?.lg || "24px"};
  }
`;
