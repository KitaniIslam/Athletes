"use client";
import React from "react";
import { StyledRoundedButton } from "./RoundedButton.styled";

interface IRoundedButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType?: "normal" | "link" | "outline";
  theme?: "primary" | "negative" | "disabled";
}

const RoundedButton = ({
  text,
  buttonType = "normal",
  theme = "primary",
  ...props
}: IRoundedButton) => {
  return (
    <div>
      <StyledRoundedButton {...props} buttonType={buttonType} theme={theme}>
        <h3 style={{ textWrap: "nowrap", margin: "0 50px" }}>{text}</h3>
      </StyledRoundedButton>
    </div>
  );
};

export default RoundedButton;
