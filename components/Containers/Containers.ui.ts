import styled from "styled-components";

export const MainContainer = styled.div`
  width: 96vw;
  margin: auto;
`;

type GridContainerProps = {
  lgColumns: number;
  smColumns: number;
  bgColor?: string;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  background: ${(props) => props.bgColor};

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${(props) => props.smColumns}, 1fr);
    grid-gap: 16px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(${(props) => props.lgColumns}, 1fr);
    grid-gap: 24px;
  }
`;

type FlexboxProps = {
  align?: string;
  justify?: string;
  direction?: string;
  wrap?: string;
};

export const Flexbox = styled.div`
  display: flex;
  align-items: ${(props: FlexboxProps) => props.align || "flex-start"};
  justify-content: ${(props: FlexboxProps) => props.justify || "flex-start"};
  flex-direction: ${(props: FlexboxProps) => props.direction || "row"};
  flex-wrap: ${(props: FlexboxProps) => props.wrap || "wrap"};
`;
