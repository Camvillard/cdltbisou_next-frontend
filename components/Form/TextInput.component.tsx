import { InputWrapper, TextInputElement } from "./Input.ui";
import { LabelElement } from "./Label.ui";

export const TextInput = () => {
  return (
    <InputWrapper>
      <LabelElement htmlFor="input-test">adresse courriel /</LabelElement>
      <TextInputElement id="input-test" placeholder={"placeholder"} />
    </InputWrapper>
  );
};
