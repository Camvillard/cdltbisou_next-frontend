import { LabelElement } from "./Label.ui";
import { InputWrapper, NumberInputElement } from "./Input.ui";
import { useState } from "react";

export const NumberInput = () => {
  const [inputValue, setInputValue] = useState(0);
  return (
    <InputWrapper>
      <LabelElement htmlFor="#number-input">quantité</LabelElement>
      <p onClick={() => setInputValue(inputValue - 1)}>--</p>
      <NumberInputElement id="number-input" type="number" value={inputValue} />
      <p onClick={() => setInputValue(inputValue + 1)}>++</p>
    </InputWrapper>
  );
};
