"use client";
import { useAppSelector } from "@store/index";
import React from "react";
import { MainContainer } from "./Container.styled";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { currentTheme } = useAppSelector((state) => state.themeReducer);
  return (
    <MainContainer isDark={currentTheme === "dark"}>{children}</MainContainer>
  );
};

export default Container;
