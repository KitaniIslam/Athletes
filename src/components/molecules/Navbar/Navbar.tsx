"use client";
import Logo from "@assets/SVG/Logo.svg";
import { Button, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NavbarContainer } from "./Navbar.styled";
import { theme } from "@theme/index";

const { Text } = Typography;

const Navbar = () => {
  const router = useRouter();
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
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="Picture of the author"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div style={{ marginRight: "70px" }}>
          <Button
            type="link"
            onClick={() => router.push("/about")}
            style={{ color: theme.colors.white[100] }}
          >
            ABOUT
          </Button>
          <Button
            type="link"
            onClick={() => router.push("/")}
            style={{ color: theme.colors.white[100] }}
          >
            CONTACT
          </Button>
          <Button
            type="link"
            onClick={() => router.push("/")}
            style={{ color: theme.colors.white[100] }}
          >
            REGISTER
          </Button>
        </div>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
