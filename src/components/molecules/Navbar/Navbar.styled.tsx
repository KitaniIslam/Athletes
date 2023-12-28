import { theme } from "@theme/index";
import styled from "styled-components";

interface INavbarContainer {
  isDark: boolean;
}

export const NavbarContainer = styled.div<INavbarContainer>`
  background-color: ${({ isDark }) =>
    theme.colors[isDark ? "white" : "black"][100]};
  width: calc(max(75vw, 370px));
  height: 90px;
  border-radius: 50px;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  position: absolute;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

interface IMenuButton {
  CustomBg?: string;
  pressable?: boolean;
}

export const MenuButton = styled.button<IMenuButton>`
  margin: 0 15px 0 15px;
  background-color: ${({ CustomBg }) =>
    CustomBg ? CustomBg : theme.colors.black[90]};
  padding: 15px;
  width: 220px;
  height: 60px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.white[100]};
  border: 0;
  ${({ pressable }) => (pressable ? `cursor: pointer;` : ``)}
`;
