import styled from "styled-components";
import { MainContainer } from "../Containers/Containers.ui";
import {
  themeColors,
  themeFonts,
  themeBreakpoints,
  Breakpoints,
} from "../Theme/theme";
import { FormWrapper } from "../Form/Form.ui";

const { darkBlue, golden } = themeColors;
const { accent } = themeFonts;
const { xsm, sm, md, lg, xl } = themeBreakpoints;

export const ProductThumbnail = styled.img`
  display: block;
  width: 100vw;
  height: 52vh;
  @media (min-width: ${sm}) and (orientation: portrait) {
    height: 58vh;
  }
  @media (min-width: ${sm}) and (orientation: landscape) {
    height: 58vh;
  }
  @media (min-width: ${md}) and (orientation: portrait) {
    height: 62vh;
  }
  @media (min-width: ${md}) and (orientation: landscape) {
    height: 80vh;
  }
`;

export const ProductCartWrapper = styled(MainContainer)`
  width: 88vw;
  margin: auto;
  margin-bottom: 80px;
  position: relative;
  top: -4vh;
  border: 4px solid ${darkBlue};
  padding: 12px;
  background: white;
  @media (min-width: ${sm}) {
    width: 64vw;
    margin-left: 28vw;
    top: -6vh;
  }
  @media (min-width: ${md}) {
    width: 58vw;
    margin-left: 32vw;
  }
  @media (min-width: ${lg}) {
    width: 48vw;
    margin-left: 44vw;
    top: -10vh;
  }
`;

export const ProductNameStroked = styled.p`
  width: 88vw;
  z-index: -1;
  position: fixed;
  top: 28vh;
  left: 6vw;
  font-weight: 800;
  color: white;
  -webkit-text-stroke: 1px ${golden};
  font-size: 58px;
  margin: 0;

  @media (min-width: ${sm}) and (orientation: portrait) {
    width: 64vw;
    left: 28vw;
    top: 58vh;
    font-size: 84px;
  }
  @media (min-width: ${sm}) and (orientation: landscape) {
    width: 64vw;
    left: 28vw;
    top: 58vh;
    font-size: 84px;
  }
  @media (min-width: ${md}) and (orientation: portrait) {
    width: 58vw;
    left: 32vw;
    top: 62vh;
    font-size: 94px;
  }
  @media (min-width: ${md}) and (orientation: landscape) {
    width: 48vw;
    left: 44vw;
    top: 40vh;
    font-size: 100px;
  }
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  @media (min-width: ${sm}) {
    font-size: 3.8rem;
  }
  @media (min-width: ${md}) {
    font-size: 3.8rem;
  }
`;

export const ProductType = styled.span`
  position: relative;
  font-size: 0.6em;
  font-weight: 300;
  margin-left: 34px;
  bottom: 2px;
  &:before {
    content: "";
    width: 22px;
    height: 1px;
    background: ${darkBlue};
    position: absolute;
    top: 0.8em;
    left: -26px;
  }
`;

export const ProductDescription = styled.p`
  font-weight: 300;
`;

export const ProductFormWrapper = styled(FormWrapper)`
  margin: 8px 0 0;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPriceLabel = styled.p`
  font-family: ${accent};
`;

export const ProductPriceAmount = styled.p`
  font-family: ${accent};
`;

type ProductImageProps = {
  imageWidth: Breakpoints;
  left?: Breakpoints;
  top?: Breakpoints;
  right?: Breakpoints;
  bottom?: Breakpoints;
};

export const ProductImage = styled.img<ProductImageProps>`
  width: ${(props) => props.imageWidth.default};
  margin-left: ${(props) => props.left?.default};
  margin-right: ${(props) => props.right?.default};
  margin-top: ${(props) => props.top?.default};
  margin-bottom: ${(props) => props.bottom?.default};
  @media (min-width: ${xsm}) {
    width: ${(props) => props.imageWidth.xsm};
    margin-left: ${(props) => props.left?.xsm};
    margin-right: ${(props) => props.right?.xsm};
    margin-top: ${(props) => props.top?.xsm};
    margin-bottom: ${(props) => props.bottom?.xsm};
  }
  @media (min-width: ${sm}) {
    width: ${(props) => props.imageWidth.sm};
    margin-left: ${(props) => props.left?.sm};
    margin-right: ${(props) => props.right?.sm};
    margin-top: ${(props) => props.top?.sm};
    margin-bottom: ${(props) => props.bottom?.sm};
  }
  @media (min-width: ${md}) {
    width: ${(props) => props.imageWidth.md};
    margin-left: ${(props) => props.left?.md};
    margin-right: ${(props) => props.right?.md};
    margin-top: ${(props) => props.top?.md};
    margin-bottom: ${(props) => props.bottom?.md};
  }
  @media (min-width: ${lg}) {
    width: ${(props) => props.imageWidth.lg};
    margin-left: ${(props) => props.left?.lg};
    margin-right: ${(props) => props.right?.lg};
    margin-top: ${(props) => props.top?.lg};
    margin-bottom: ${(props) => props.bottom?.lg};
  }
  @media (min-width: ${xl}) {
    width: ${(props) => props.imageWidth.xl};
    margin-left: ${(props) => props.left?.xl};
    margin-right: ${(props) => props.right?.xl};
    margin-top: ${(props) => props.top?.xl};
    margin-bottom: ${(props) => props.bottom?.xl};
  }
`;
