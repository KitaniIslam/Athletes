import { theme } from "@theme/index";
import styled from "styled-components";

export const AddExerciseButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${theme.colors.white[100]};
  border: solid ${theme.colors.primary[100]} 1px;
  border-radius: ${theme.radius.m}px;
  padding-inline: 20px;
  min-width: 200px;
  min-height: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray[50]};
    transition: 0.3s ease-out;
  }
`;
