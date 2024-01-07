import styled from "styled-components";

interface IStyledContentContainer {
  bg?: string;
}

export const StyledContentContainer = styled.div<IStyledContentContainer>`
  width: calc(max(75vw, 370px));
  margin: 20px auto 0 auto;
  ${({ bg }) => (bg ? `background-color:${bg};` : "")}
`;
