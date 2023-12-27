"use client";
import Logo from "@assets/SVG/Logo.svg";
import { Icon } from "@components/atoms";
import { theme } from "@theme/index";
import { Button, Dropdown, Space, theme as antdTheme } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NavbarContainer } from "./Navbar.styled";

const { useToken } = antdTheme;
const Navbar = () => {
  const router = useRouter();
  const { token } = useToken();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event: any) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

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
      <NavbarContainer>
        <Button
          type="link"
          onClick={() => router.push("/")}
          style={{ marginLeft: "70px", color: theme.colors.white[100] }}
        >
          SpotMe
        </Button>
        <div
          style={{
            width: "fit-content",
            position: "absolute",
            right: 0,
            left: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <Logo
            width={40}
            alt="Picture of the author"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
            color={theme.colors.primary[100]}
          />
        </div>
        <div
          style={{
            marginRight: "70px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Dropdown
            placement="bottomRight"
            autoAdjustOverflow
            dropdownRender={() => (
              <div style={contentStyle}>
                <Space>
                  <button
                    style={{
                      margin: "0 15px 0 15px",
                      backgroundColor: theme.colors.black[90],
                      padding: 15,
                      width: 220,
                      height: 60,
                      borderRadius: 100,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      color: theme.colors.white[100],
                      border: 0,
                      cursor: "pointer",
                    }}
                  >
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
                  </button>
                </Space>
                <Space>
                  <button
                    style={{
                      margin: "0 15px 0 15px",
                      backgroundColor: theme.colors.black[90],
                      padding: 15,
                      width: 220,
                      height: 60,
                      borderRadius: 100,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      color: theme.colors.white[100],
                      border: 0,
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Icon name="Mail" color={theme.colors.white[100]} />
                    </div>
                    <Link href="/" style={{ color: theme.colors.white[100] }}>
                      CONTACT
                    </Link>
                  </button>
                </Space>
                <Space>
                  <button
                    style={{
                      margin: "0 15px 0 15px",
                      backgroundColor: theme.colors.black[90],
                      padding: 15,
                      width: 220,
                      height: 60,
                      borderRadius: 100,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      color: theme.colors.white[100],
                      border: 0,
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Icon name="LogIn" color={theme.colors.white[100]} />
                    </div>
                    <Link href="/" style={{ color: theme.colors.white[100] }}>
                      REGISTER
                    </Link>
                  </button>
                </Space>
                <Space>
                  <button
                    style={{
                      margin: "0 15px 15px 15px",
                      backgroundColor: theme.colors.black[80],
                      padding: 15,
                      width: 220,
                      height: 60,
                      borderRadius: 100,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      color: theme.colors.white[100],
                      border: 0,
                      cursor: "pointer",
                    }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Icon
                        name={isDarkMode ? "Sunny" : "Moon"}
                        color={theme.colors.white[100]}
                      />
                    </div>
                    <p>{isDarkMode ? "Light" : "Dark"}</p>
                  </button>
                </Space>
              </div>
            )}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Icon name="Menu" color={theme.colors.white[100]} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;

// TODO: Refactoring this component
