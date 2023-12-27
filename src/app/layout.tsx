import { Navbar } from "@components/molecules";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import AntDComponentsRegistry from "../lib/AntDRegistry";
import StyledComponentsRegistry from "../lib/Registry";

import { antdTheme } from "../styles";
import "./global.css";

export const schabo = localFont({
  src: "../assets/Fonts/SCHABO-Condensed.otf",
  preload: true,
  variable: "--font-schabo",
  style: "normal",
  display: "swap",
});
export const latoFont = Lato({
  style: "normal",
  weight: "400",
  preload: true,
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "SpotMe",
  description: "Tool to build shared training routine links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${latoFont.variable} ${schabo.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={{
              ...antdTheme,
              cssVar: true,
            }}
          >
            <AntDComponentsRegistry>
              <Navbar />
              {children}
            </AntDComponentsRegistry>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
