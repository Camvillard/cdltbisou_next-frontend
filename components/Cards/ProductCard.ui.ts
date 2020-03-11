import styled from 'styled-components';
import { themeBreakpoints, themeFonts, themeColors } from '../Theme/theme';


export const ProductCardContainer = styled.div`
  position: relative;
`
export const ProductImage = styled.img`
  width: 100%;
  @media(min-width: ${themeBreakpoints.md}) {
    max-height: 23vw;
  }

`

export const ProductName = styled.h3`
  font-size: 1.6rem;
  @media(min-width: ${themeBreakpoints.md}) {
    font-size: 1.rem;
  }
`

export const ProductPrice = styled.p`
  font-family: ${themeFonts.accent};
  margin: 3px 0;
  span {
    background: ${themeColors.golden};
    padding: 2px 6px;
  }
`
export const ProductOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${themeColors.darkBlue};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  transition: 0.6s;
`

export const OverlayInfosContainer = styled.div`
  text-align: center;
`

export const OverlayCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const OverlayCTA = styled.p`
  font-family: ${themeFonts.accent};
  font-size: 2rem;
  margin: 8px 0;
  padding: 4px;
  &:hover {
    background: white;
    color: ${themeColors.darkBlue};
    cursor: pointer;
  }
`
