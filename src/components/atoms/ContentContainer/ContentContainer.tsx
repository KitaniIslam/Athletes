"use client";
import React from "react";
import { StyledContentContainer } from "./ContentContainer.styled";

interface IContentContainer {
  children: React.ReactNode;
  bg?: string;
}

const ContentContainer = ({ children, bg }: IContentContainer) => {
  return <StyledContentContainer bg={bg}>{children}</StyledContentContainer>;
};

export default ContentContainer;
