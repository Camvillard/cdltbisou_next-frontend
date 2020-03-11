import React, { useState } from "react"
import { formatMoney } from "../../helpers/formatMoney";
import { ProductCardContainer, ProductOverlay, OverlayInfosContainer, ProductName, ProductPrice, OverlayCTAContainer, OverlayCTA, ProductImage } from "./ProductCard.ui";


interface IProductCardProps {
  product: any;
}


const ProductCard = (props: IProductCardProps) => {
  const { product } = props
  const [hoverState, toggleHoverState] = useState(false)

  return (
    <ProductCardContainer
      onMouseEnter={() => toggleHoverState(true)}
      onTouchStart={() => toggleHoverState(!hoverState)}
      onMouseLeave={() => toggleHoverState(false)}
    >

      {hoverState && (
        <ProductOverlay>
          <OverlayInfosContainer>
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{formatMoney(product.price)}</ProductPrice>
          </OverlayInfosContainer>
          <OverlayCTAContainer>
            <OverlayCTA>achat rapide</OverlayCTA>
            <OverlayCTA>voir les détails</OverlayCTA>
          </OverlayCTAContainer>
        </ProductOverlay>
      )}

      <ProductImage src={product.image} />
      <ProductName>{product.title}</ProductName>
      <ProductPrice><span>{formatMoney(product.price)}</span></ProductPrice>
    </ProductCardContainer>
  )
}

export default ProductCard