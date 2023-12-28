import { useAppSelector } from "@store/index";
import { theme } from "@theme/index";
import {
  HeroContainer,
  HeroContentContainer,
  HeroImageContainer,
} from "./Hero.styled";

const Hero = () => {
  const { currentTheme } = useAppSelector((state) => state.themeReducer);
  return (
    <div>
      <HeroContainer isDark={currentTheme === "dark"}>
        <HeroContentContainer>
          <h1
            style={{
              fontSize: "calc(max(6vw, 60px))",
              maxWidth: "20ch",
              margin: 0,
              letterSpacing: "3px",
              color:
                theme.colors[currentTheme === "dark" ? "black" : "white"][100],
            }}
          >
            WE CONNECT{" "}
            <b style={{ color: theme.colors.primary[100] }}>ATHLETES</b> AROUND
            THE WORLD
          </h1>
          <p
            style={{
              fontSize: "1em",
              maxWidth: "60ch",
              lineHeight: "normal",
              margin: 0,
              color:
                theme.colors[currentTheme === "dark" ? "black" : "white"][100],
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s
          </p>
        </HeroContentContainer>
        <HeroImageContainer />
      </HeroContainer>
    </div>
  );
};

export default Hero;
