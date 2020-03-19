import styled from "styled-components";
import { themeFonts, themeColors } from "../Theme/theme";

export const InputWrapper = styled.div`
  margin: 24px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${themeColors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  ::placeholder {
    font-family: ${themeFonts.accent};
    text-align: right;
  }
  &:hover {
  }

  &:focus {
    background: ${themeColors.darkBlue};
    color: white;
    outline: 1px solid ${themeColors.golden};
    outline-offset: -1px;
    padding-bottom: 1px;

    ::placeholder {
      color: ${themeColors.darkBlue};
    }
  }
`;

export const TextInputElement = styled(Input)`
  border: none;
  flex-grow: 1;
  padding-left: 8px;

  &:hover {
  }

  &:focus {
    background: ${themeColors.darkBlue};
    color: white;
    outline: 1px solid ${themeColors.golden};
    outline-offset: -1px;
    padding-bottom: 1px;

    ::placeholder {
      color: ${themeColors.darkBlue};
    }
  }
`;

export const NumberInputElement = styled(Input)`
  -webkit-appearance: none;
`;
