import React, { Fragment } from "react"
import styled from 'styled-components';
import { themeFonts, themeColors, themeBreakpoints } from "../Theme/theme";


interface IProductCardProps {
  product: any;
}

const ProductCardContainer = styled.div`
  border: 3px solid red;
`
const ProductImage = styled.img``

const ProductName = styled.h3`
  font-size: 1.6rem;
  @media(min-width: ${themeBreakpoints.md}) {
    font-size: 1.rem;
  }
`

const ProductPrice = styled.p`
  font-family: ${themeFonts.accent};
  margin: 0;
  span {
    background: ${themeColors.golden};
    padding: 2px 6px;
  }
`

const ProductCard = (props: IProductCardProps) => {
  const { product } = props

  return (
    <ProductCardContainer>
      <ProductImage src={product.image} />
      <ProductName>{product.title}</ProductName>
      <ProductPrice><span>{parseFloat(product.price)}</span></ProductPrice>
    </ProductCardContainer>
  )
}

export default ProductCard