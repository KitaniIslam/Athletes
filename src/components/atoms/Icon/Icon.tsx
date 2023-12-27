"use client";
import * as Icons from "@assets/icons";
import { TIcons } from "@assets/icons";
import { theme } from "@theme/index";
import { IconContainer } from "./Icon.styles";

interface IconProps {
  name: TIcons;
  size?: number;
  color?: string;
  padding?: number;
  onPress?: () => void;
  customHeight?: number;
  isAbsolutePosition?: boolean;
}

const Icon = ({
  name,
  customHeight,
  padding,
  onPress,
  size = 24,
  color = theme.colors.gray[900],
  isAbsolutePosition = false,
}: IconProps) => {
  const CurrentIcon = Icons[name];

  return (
    <IconContainer
      onClick={onPress}
      disabled={!onPress}
      pressable={!!onPress}
      padding={padding}
      isAbsolutePosition={isAbsolutePosition}
    >
      <CurrentIcon
        width={size}
        height={customHeight ? customHeight : size}
        color={color}
      />
    </IconContainer>
  );
};

export default Icon;
