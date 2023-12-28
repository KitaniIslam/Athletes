"use client";
import Logo from "@assets/SVG/Logo.svg";
import { Icon } from "@components/atoms";
import { TTheme } from "@customTypes/Types";
import { NavbarPadding } from "@lib/Consts";
import { useAppDispatch, useAppSelector } from "@store/index";
import { setThemeAction } from "@store/slices/theme";
import { theme } from "@theme/index";
import { Dropdown, Space, theme as antdTheme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LogoContainer, MenuButton, NavbarContainer } from "./Navbar.styled";

const { useToken } = antdTheme;
const Navbar = () => {
  const router = useRouter();
  const { token } = useToken();
  const [stystemTheme, setSystemTheme] = useState<TTheme>("dark");
  const { currentTheme } = useAppSelector((state) => state.themeReducer);
  const dispatch = useAppDispatch();

  const ChangeCurrentTheme = async () => {
    const newThemeToApply: TTheme = stystemTheme === "dark" ? "light" : "dark";
    await localStorage.setItem("theme", newThemeToApply);
    setSystemTheme(newThemeToApply);
    dispatch(
      setThemeAction({
        currentTheme: newThemeToApply,
      })
    );
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const localTheme = localStorage.getItem("theme") as TTheme;

    if (localTheme !== null) {
      setSystemTheme(localTheme);
      dispatch(setThemeAction({ currentTheme: localTheme }));
    } else {
      localStorage.setItem(
        "theme",
        darkModeMediaQuery.matches ? "dark" : "light"
      );
      setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light");
      dispatch(
        setThemeAction({
          currentTheme: darkModeMediaQuery.matches ? "dark" : "light",
        })
      );
    }

    const handleDarkModeChange = () => {
      localStorage.setItem(
        "theme",
        darkModeMediaQuery.matches ? "dark" : "light"
      );
      setSystemTheme(darkModeMediaQuery.matches ? "dark" : "light");
      dispatch(
        setThemeAction({
          currentTheme: darkModeMediaQuery.matches ? "dark" : "light",
        })
      );
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  const contentStyle: React.CSSProperties = {
    backgroundColor: theme.colors.black[90],
    borderRadius: "20px 20px 45px 45px",
    boxShadow: token.boxShadowSecondary,
    width: "250px",
    paddingTop: 10,
  };

  return (
    <div>
      <NavbarContainer isDark={currentTheme === "dark"}>
        <div
          onClick={() => router.push("/")}
          style={{
            marginLeft: `${NavbarPadding}px`,
            color: theme.colors.white[100],
            cursor: "pointer",
          }}
        >
          <h1 style={{ fontSize: 26, letterSpacing: 1 }}>SpotMe</h1>
        </div>
        <LogoContainer>
          <Logo
            width={40}
            alt="Picture of the author"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
            color={theme.colors.primary[100]}
          />
        </LogoContainer>
        <div
          style={{
            marginRight: `${NavbarPadding}px`,
          }}
        >
          <Dropdown
            placement="bottomRight"
            autoAdjustOverflow
            dropdownRender={() => (
              <div style={contentStyle}>
                <Space>
                  <MenuButton>
                    <div style={{ marginRight: 10 }}>
                      <Icon
                        name="LogoOutline"
                        color={theme.colors.white[100]}
                      />
                    </div>
                    <Link
                      href="/about"
                      style={{ color: theme.colors.white[100] }}
                    >
                      ABOUT
                    </Link>
                  </MenuButton>
                </Space>
                <Space>
                  <MenuButton>
                    <div style={{ marginRight: 10 }}>
                      <Icon name="Mail" color={theme.colors.white[100]} />
                    </div>
                    <Link href="/" style={{ color: theme.colors.white[100] }}>
                      CONTACT
                    </Link>
                  </MenuButton>
                </Space>
                <Space>
                  <MenuButton>
                    <div style={{ marginRight: 10 }}>
                      <Icon name="LogIn" color={theme.colors.white[100]} />
                    </div>
                    <Link href="/" style={{ color: theme.colors.white[100] }}>
                      REGISTER
                    </Link>
                  </MenuButton>
                </Space>
                <Space>
                  <MenuButton
                    CustomBg={theme.colors.black[80]}
                    onClick={ChangeCurrentTheme}
                    pressable
                    style={{ marginBottom: 15 }}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Icon
                        name={stystemTheme === "dark" ? "Sunny" : "Moon"}
                        color={theme.colors.white[100]}
                      />
                    </div>
                    <p>{stystemTheme === "dark" ? "Light" : "Dark"}</p>
                  </MenuButton>
                </Space>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Icon
                  name="Menu"
                  color={
                    theme.colors[
                      currentTheme === "dark" ? "black" : "white"
                    ][100]
                  }
                />
              </Space>
            </a>
          </Dropdown>
        </div>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
