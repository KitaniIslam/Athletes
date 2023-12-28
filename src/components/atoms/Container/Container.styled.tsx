import { theme } from "@theme/index";
import styled from "styled-components";

interface IMainContainer {
  isDark: boolean;
}

export const MainContainer = styled.div<IMainContainer>`
  background-color: ${({ isDark }) =>
    theme.colors[isDark ? "black" : "white"][100]};
  width: 100vw;
  min-height: 100vh;
`;
