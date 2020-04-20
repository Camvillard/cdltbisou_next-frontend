import { LabelElement } from "./Label.ui";
import {
  InputWrapper,
  NumberInputElement,
  NumberInputWrapper,
  NumberInputControl,
} from "./Input.ui";
import { useState } from "react";
import { inputIsFilled } from "../../helpers/inputs.helpers";

export const NumberInput = () => {
  const [inputValue, setInputValue] = useState(0);
  const [isFilled, setIsFilled] = useState(false);
  const decrease = () => {
    if (inputValue === 0) {
      return;
    }
    setInputValue(inputValue - 1);
  };
  return (
    <InputWrapper>
      <LabelElement htmlFor="#number-input">quantité</LabelElement>
      <NumberInputWrapper justify={"flex-end"} align={"center"}>
        <NumberInputControl onClick={() => decrease()}>-</NumberInputControl>
        <NumberInputElement
          id="number-input"
          type="text"
          value={inputValue}
          isFilled={isFilled}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
          onBlur={(e) => inputIsFilled(e, setIsFilled)}
        />
        <NumberInputControl onClick={() => setInputValue(inputValue + 1)}>
          +
        </NumberInputControl>
      </NumberInputWrapper>
    </InputWrapper>
  );
};
