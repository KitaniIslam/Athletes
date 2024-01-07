"use client";
import { theme as themeSchema } from "@theme/index";
import React from "react";
import styled from "styled-components";

interface IStyledRoundedButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "normal" | "link" | "outline";
  theme: "primary" | "negative" | "disabled";
}

export const StyledRoundedButton = styled.button<IStyledRoundedButton>`
  display: flex;
  width: max-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  height: 60px;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: ${themeSchema.colors.white[100]};
  border-width: 0;
  background-color: ${themeSchema.colors.primary[100]};
  border-style: solid;

  ${({ buttonType, theme }) =>
    buttonType === "link"
      ? `color: ${
          themeSchema.colors[theme === "primary" ? "primary" : "black"][100]
        };background-color: transparent;`
      : ""}
  ${({ buttonType, theme }) =>
    buttonType === "outline"
      ? `color: ${
          themeSchema.colors[theme === "primary" ? "primary" : "black"][100]
        };background-color: transparent;border-width: 3px; border-color: ${
          themeSchema.colors[theme === "primary" ? "primary" : "black"][100]
        };`
      : ""}

      ${({ buttonType, theme }) =>
    buttonType === "normal" && theme === "negative"
      ? `color: ${themeSchema.colors.white[100]};background-color: ${themeSchema.colors.black[80]};`
      : ""}
`;
