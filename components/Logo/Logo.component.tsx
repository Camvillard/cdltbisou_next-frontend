import styled from "styled-components";
import { themeBreakpoints, themeFonts } from "../Theme/theme";

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Cdlt = styled.h2`
  font-weight: 700;
  margin: 0;
  font-size: ${(props: ICdltProps) => props.size}rem;
  @media (min-width: ${themeBreakpoints.md}) {
    font-size: ${(props: ICdltProps) => props.size * 1.8}rem;
  }
`;

const Bisou = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: ${(props: ICdltProps) => props.size}rem;
  @media (min-width: ${themeBreakpoints.md}) {
    font-size: ${(props: ICdltProps) => props.size * 1.8}rem;
  }
`;
const Boutique = styled.p`
  font-family: ${themeFonts.accent};
  margin: 0;
  margin-left: 8px;
  font-size: 1.8rem;
  padding-bottom: 4px;
  &:before {
    content: "/";
    margin-right: 8px;
  }
`;

interface ICdltProps {
  size: number;
}

interface IlogoProps {
  size: number;
}

const Logo = (props: IlogoProps) => {
  const { size } = props;
  return (
    <LogoWrapper>
      <Cdlt size={size}>cdlt</Cdlt>
      <Bisou size={size}>bisou</Bisou>
      <Boutique>la boutique</Boutique>
    </LogoWrapper>
  );
};

export default Logo;
