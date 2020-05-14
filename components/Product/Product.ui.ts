import styled from "styled-components";
import { MainContainer } from "../Containers/Containers.ui";
import { themeColors, themeFonts } from "../Theme/theme";

const { darkBlue } = themeColors;
const { accent } = themeFonts;

export const ProductThumbnail = styled.img`
  display: block;
`;

export const ProductCartWrapper = styled(MainContainer)`
  width: 88%;
  margin: auto;
  position: relative;
  top: -16px;
  border: 4px solid ${darkBlue};
  padding: 12px;
  background: white;
`;

export const ProductTitle = styled.h1`
  margin: 0;
  font-size: 3.2rem;
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
