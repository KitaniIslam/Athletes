import type { ThemeConfig } from "antd";

export const theme = {
  colors: {
    black: {
      100: "#111111",
      90: "#1E1E1E",
      80: "#2C2C2C",
    },
    white: {
      100: "#F2F2F2",
    },
    success: {
      900: "#054F31",
      800: "#0a5c12",
      700: "#14b825",
      600: "#37e849",
      500: "#d1fad5",
      400: "#32D583",
      300: "#6CE9A6",
      200: "#A6F4C5",
      100: "#D1FADF",
      50: "#ECFDF3",
      25: "#F6FEF9",
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
      50: "rgba(254, 130, 52, 0.1)",
      25: "#f7d794",
    },
    error: {
      900: "#7A271A",
      800: "#5f0707",
      700: "#bf0d0d",
      600: "#f24040",
      500: "#fccfcf",
      400: "#F97066",
      300: "#FDA29B",
      200: "#FECDCA",
      100: "#FEE4E2",
      50: "#FEF3F2",
      25: "#FFFBFA",
    },
    warning: {
      900: "#7A2E0E",
      800: "#5e4401",
      700: "#cc9200",
      600: "#f7bc26",
      500: "#ffe299",
      400: "#FDB022",
      300: "#FEC84B",
      200: "#FEDF89",
      100: "#FEF0C7",
      50: "#FFFAEB",
      25: "#FFFCF5",
    },
    info: {
      900: "#194185",
      800: "#1849A9",
      700: "#175CD3",
      650: "#1570EF",
      600: "#4285F4",
      500: "#2E90FA",
      400: "#53B1FD",
      300: "#84CAFF",
      200: "#B2DDFF",
      100: "#D1E9FF",
      50: "#EFF8FF",
      25: "#F5FAFF",
    },
  },
  spacing: {
    maxWidth: "80dvw",
  },
  radius: {
    s: 12,
    m: 35,
    l: 50,
    xl: 100,
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: "var(--font-lato)",
    colorPrimary: theme.colors.primary[100],
  },
  components: {
    Segmented: {
      itemSelectedBg: theme.colors.primary[100],
      itemSelectedColor: theme.colors.white[100],
    },
  },
};
