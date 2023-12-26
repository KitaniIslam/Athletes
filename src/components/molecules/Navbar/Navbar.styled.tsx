import { theme } from "@theme/index";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  background-color: ${theme.colors.black[100]};
  width: calc(max(75vw, 370px));
  height: 90px;
  border-radius: 50px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
