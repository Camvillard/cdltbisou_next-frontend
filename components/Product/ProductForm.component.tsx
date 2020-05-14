import React, { useState } from "react";
import { FormWrapper } from "../Form/Form.ui";
import { TextInput } from "../Form/TextInput.component";
import { NumberInput } from "../Form/NumberInput.component";
import { formatMoney } from "../../helpers/formatMoney";
import {
  ProductPrice,
  ProductPriceLabel,
  ProductPriceAmount,
} from "./Product.ui";

type ProductFormProps = {
  price: number;
};
export const ProductForm = ({ price }: ProductFormProps) => {
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const updatePrice = (value: number) => {
    setUpdatedPrice(value * price);
  };
  const formattedPrice = formatMoney(updatedPrice);
  return (
    <FormWrapper>
      <ProductPrice>
        <ProductPriceLabel>prix unitaire /</ProductPriceLabel>
        <ProductPriceAmount>{formattedPrice}</ProductPriceAmount>
      </ProductPrice>
      <NumberInput initialValue={1} updatePrice={updatePrice} />
      <ProductPrice>
        <ProductPriceLabel>prix total /</ProductPriceLabel>
        <ProductPriceAmount>{formattedPrice}</ProductPriceAmount>
      </ProductPrice>
    </FormWrapper>
  );
};
