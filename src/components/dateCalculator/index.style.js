import styled from "styled-components";

import ClearButtonBase from "../../shared/ClearButton.styles";

import {
  ModuleContainer,
  ModuleTextInput,
  ModuleTitle,
} from "../../shared/Module/index.style";

export const DateCalculatorWrapper = styled(ModuleContainer)`
  width: min-content;
  margin: 1rem auto;
`;

export const TextInput = styled(ModuleTextInput)`
  margin: 2rem auto;
`;

export const ClearButton = styled(ClearButtonBase)`
  margin: 2em auto 0.5em;
`;

export const Title = ModuleTitle;
