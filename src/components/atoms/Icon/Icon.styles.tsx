import styled from "styled-components";

interface IconContainerProps {
  pressable?: boolean;
  padding?: number;
  isAbsolutePosition?: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
  padding: ${({ pressable, padding }) =>
    typeof padding === "number" ? `${padding}px` : pressable ? "8px" : "0px"};
  ${({ isAbsolutePosition }) =>
    isAbsolutePosition &&
    `
    position: absolute;
    right: 0;
    padding: 0;
    `};
`;
