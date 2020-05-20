import styled from "styled-components";

export const MainContainer = styled.div`
  width: 96vw;
  margin: auto;
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
