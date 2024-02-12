"use client";
import { theme } from "@theme/index";
import Icon from "../Icon/Icon";
import { AddExerciseButtonContainer } from "./AddExerciseButton.styled";

interface IAddExerciseButton {
  label: string;
  onClick?: () => void;
}

const AddExerciseButton = ({ onClick, label }: IAddExerciseButton) => {
  return (
    <AddExerciseButtonContainer onClick={onClick}>
      <Icon name="Add" size={18} color={theme.colors.primary[100]} />
      <p style={{ marginLeft: 10, color: theme.colors.primary[100] }}>
        {label}
      </p>
    </AddExerciseButtonContainer>
  );
};

export default AddExerciseButton;
