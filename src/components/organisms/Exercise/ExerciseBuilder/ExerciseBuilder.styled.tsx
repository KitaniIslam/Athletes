import { ImageSize } from "@lib/Consts";
import { theme } from "@theme/index";
import { Flex } from "antd";
import styled from "styled-components";

interface IExerciseContainer {
  isDragging?: boolean;
  bgColor?: string;
}
export const ExerciseContainer = styled(Flex)<IExerciseContainer>`
  padding: 15px;
  border: solid 1px ${theme.colors.gray[400]};
  border-radius: 40px;
  background-color: ${({ isDragging, bgColor }) =>
    bgColor
      ? bgColor
      : isDragging
      ? theme.colors.gray[300]
      : theme.colors.gray[200]};
  position: relative;
`;

export const ImageContainer = styled.div`
  width: ${ImageSize}px;
  height: ${ImageSize}px;
  min-width: ${ImageSize}px;
  min-height: ${ImageSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid ${theme.colors.gray[300]} 1px;
  border-radius: ${theme.radius.m}px;
  background-color: ${theme.colors.white[100]};
  cursor: pointer;
`;

export const RowFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

export const RowEntriesContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddCombinedExerciseButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${theme.colors.white[100]};
  border-radius: ${theme.radius.m}px;
  padding-inline: 20px;
  min-width: 200px;
  min-height: 50px;
  cursor: pointer;
`;
