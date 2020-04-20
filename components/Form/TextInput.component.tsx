import { InputWrapper, TextInputElement } from "./Input.ui";
import { LabelElement } from "./Label.ui";
import { useState } from "react";
import { inputIsFilled } from "../../helpers/inputs.helpers";

export const TextInput = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <InputWrapper>
      <LabelElement htmlFor="input-test">adresse courriel /</LabelElement>
      <TextInputElement
        id="input-test"
        placeholder={"placeholder"}
        isFilled={isFilled}
        onBlur={(e) => inputIsFilled(e, setIsFilled)}
      />
    </InputWrapper>
  );
};
