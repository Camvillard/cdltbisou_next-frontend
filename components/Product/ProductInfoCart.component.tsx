import React from "react";
import { Product } from "./Product.type";
import {
  ProductCartWrapper,
  ProductTitle,
  ProductType,
  ProductDescription,
} from "./Product.ui";
import { ProductForm } from "./ProductForm.component";

type ProductInfoCartProps = {
  product: Product;
};

export const ProductInfoCart = ({ product }: ProductInfoCartProps) => {
  const { title, description, price, type } = product;
  return (
    <ProductCartWrapper>
      <ProductTitle>
        {title}
        <ProductType>{type}</ProductType>
      </ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductForm price={price} />
    </ProductCartWrapper>
  );
};
