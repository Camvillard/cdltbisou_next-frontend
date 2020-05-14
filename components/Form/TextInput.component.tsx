import { InputWrapper, TextInputElement } from "./Input.ui";
import { LabelElement } from "./Label.ui";
import { useState } from "react";
import { inputIsFilled } from "../../helpers/inputs.helpers";

type TextInputProps = {
  label?: string;
};
export const TextInput = (props: TextInputProps) => {
  const { label } = props;
  const [isFilled, setIsFilled] = useState(false);

  return (
    <InputWrapper>
      <LabelElement htmlFor="input-test">{label} /</LabelElement>
      <TextInputElement
        id="input-test"
        placeholder={"placeholder"}
        isFilled={isFilled}
        onBlur={(e) => inputIsFilled(e, setIsFilled)}
      />
    </InputWrapper>
  );
};
