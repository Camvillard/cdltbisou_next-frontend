import { LabelElement } from "./Label.ui";
import {
  InputWrapper,
  NumberInputElement,
  NumberInputWrapper,
  NumberInputControl,
} from "./Input.ui";
import { useState } from "react";
import { inputIsFilled } from "../../helpers/inputs.helpers";

type NumberInputProps = {
  initialValue?: number;
  updatePrice?: (value: number) => any;
};
export const NumberInput = ({
  initialValue,
  updatePrice,
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState(initialValue || 0);
  const [isFilled, setIsFilled] = useState(false);
  const increase = () => {
    updatePrice(inputValue + 1);
    setInputValue(inputValue + 1);
  };
  const decrease = () => {
    if (inputValue === 0) {
      return;
    }
    updatePrice(inputValue - 1);
    setInputValue(inputValue - 1);
  };
  return (
    <InputWrapper>
      <LabelElement htmlFor="#number-input">quantité</LabelElement>
      <NumberInputWrapper justify={"flex-end"} align={"center"}>
        <NumberInputControl onClick={decrease}>-</NumberInputControl>
        <NumberInputElement
          id="number-input"
          type="text"
          value={inputValue}
          isFilled={isFilled}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
          onBlur={(e) => inputIsFilled(e, setIsFilled)}
        />
        <NumberInputControl onClick={increase}>+</NumberInputControl>
      </NumberInputWrapper>
    </InputWrapper>
  );
};
