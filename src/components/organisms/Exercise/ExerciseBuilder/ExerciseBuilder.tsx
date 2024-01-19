import { ExerciseContainer } from "./ExerciseBuilder.styled";

interface IExerciseBuilder {
  text: string;
}

const ExerciseBuilder = ({ text }: IExerciseBuilder) => {
  return (
    <ExerciseContainer>
      <div style={{ padding: 30, marginBottom: 10 }}>{text}</div>
    </ExerciseContainer>
  );
};

export default ExerciseBuilder;
