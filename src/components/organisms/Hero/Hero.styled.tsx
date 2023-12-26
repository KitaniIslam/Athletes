import { theme } from "@theme/index";
import styled from "styled-components";
import HeroImage from "../../../../public/HomeImage.png";

export const HeroContainer = styled.div`
  background-color: ${theme.colors.black[100]};
  width: calc(max(75vw, 370px));
  border-radius: 50px 50px 120px 120px;
  color: ${theme.colors.white[100]};
  margin: 20px auto 0 auto;
  height: fit-content;
  padding-bottom: 15px;
`;

export const HeroContentContainer = styled.div`
  padding: 50px 50px 50px 50px;
`;

export const HeroImageContainer = styled.div`
  background-image: url(${HeroImage.src});
  background-size: cover;
  background-position: center;
  height: 230px;
  background-color: ${theme.colors.white[100]};
  border-radius: 110px;
  margin: 0 15px 0 15px;
`;
