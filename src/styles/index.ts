import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: "var(--font-lato)",
  },
};

export const theme = {
  colors: {
    black: {
      100: "#000000",
      90: "#1E1E1E",
      80: "#2C2C2C",
    },
    white: {
      100: "#ffffff",
    },
    gray: {
      900: "#101828",
      800: "#1D2939",
      700: "#344054",
      600: "#475467",
      500: "#667085",
      400: "#98A2B3",
      300: "#D0D5DD",
      200: "#E4E7EC",
      100: "#F2F4F7",
      50: "#F9FAFB",
      25: "#FCFCFD",
    },
    primary: {
      100: "#FE8234",
    },
  },
  spacing: {
    maxWidth: "80dvw",
  },
};
