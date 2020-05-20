import React, { useState } from "react";
import { NumberInput } from "../Form/NumberInput.component";
import { formatMoney } from "../../helpers/formatMoney";
import {
  ProductPrice,
  ProductPriceLabel,
  ProductPriceAmount,
  ProductFormWrapper,
} from "./Product.ui";

type ProductFormProps = {
  price: number;
};
export const ProductForm = ({ price }: ProductFormProps) => {
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const updatePrice = (value: number) => {
    setUpdatedPrice(value * price);
  };
  const initialPrice = formatMoney(price);
  const formattedPrice = formatMoney(updatedPrice);

  return (
    <ProductFormWrapper>
      <ProductPrice>
        <ProductPriceLabel>prix unitaire /</ProductPriceLabel>
        <ProductPriceAmount>{initialPrice}</ProductPriceAmount>
      </ProductPrice>
      <NumberInput initialValue={1} updatePrice={updatePrice} />
      <ProductPrice>
        <ProductPriceLabel>prix total /</ProductPriceLabel>
        <ProductPriceAmount>{formattedPrice}</ProductPriceAmount>
      </ProductPrice>
    </ProductFormWrapper>
  );
};
