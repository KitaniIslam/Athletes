import styled from "styled-components";

interface IconContainerProps {
  pressable?: boolean;
  disabled?: boolean;
  padding?: number;
  isAbsolutePosition?: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ pressable, padding }) =>
    typeof padding === "number" ? `${padding}px` : pressable ? "8px" : "0px"};
  ${({ isAbsolutePosition }) =>
    isAbsolutePosition
      ? `
    position: absolute;
    right: 0;
    padding: 0;
    `
      : ``};
`;
