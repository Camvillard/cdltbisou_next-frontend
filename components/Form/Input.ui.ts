import styled from "styled-components";
import { themeFonts, themeColors } from "../Theme/theme";
import { Flexbox } from "../Containers/Containers.ui";

const { darkBlue, golden, lightGray } = themeColors;
const { accent } = themeFonts;

export const InputWrapper = styled.div`
  margin: 8px 0;
  padding-bottom: 4px;
  // border-bottom: 1px solid ${darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type InputProps = {
  isFilled: boolean;
};

const Input = styled.input`
  background: ${(props: InputProps) => (props.isFilled ? lightGray : "none")};
  ::placeholder {
    font-family: ${accent};
    text-align: right;
    padding: 4px 4px 4px 8px;
  }

  &:hover {
  }

  &:focus {
    background: ${darkBlue};
    color: white;
    outline: 1px solid ${golden};
    outline-offset: -1px;
    padding: 4px 4px 4px 8px;

    ::placeholder {
      color: ${darkBlue};
    }
  }
`;

export const TextInputElement = styled(Input)`
  border: none;
  flex-grow: 1;
  padding: 4px 4px 4px 8px;

  &:hover {
  }

  &:focus {
    background: ${darkBlue};
    color: white;
    outline: 1px solid ${golden};
    outline-offset: -1px;
    padding: 4px 4px 4px 8px;
    c ::placeholder {
      color: ${darkBlue};
    }
  }
`;

export const NumberInputElement = styled(Input)`
  -webkit-appearance: none;
  border: none;
  width: 48px;
  text-align: center;
  font-family: ${accent};
`;

export const NumberInputWrapper = styled(Flexbox)``;

export const NumberInputControl = styled.span`
  margin: 0;
  font-size: 2rem;
  position: relative;
  bottom: 2px;
  &:hover {
    cursor: pointer;
  }
`;
