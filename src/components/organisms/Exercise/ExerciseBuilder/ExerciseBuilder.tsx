import { Icon } from "@components/atoms";
import { ExerciseLevels, ImageSize } from "@lib/Consts";
import { theme } from "@theme/index";
import {
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Select,
  Typography,
} from "antd";
import Image from "next/image";
import { useState } from "react";
import {
  AddCombinedExerciseButton,
  ExerciseContainer,
  ImageContainer,
  RowEntriesContainer,
  RowFlex,
} from "./ExerciseBuilder.styled";
interface IExerciseBuilder {
  text: string;
  isCombain: boolean;
  isDragging: boolean;
}

const ExerciseEntry = ({
  exerciseImageSrc,
  openSelectExerciseImage,
}: {
  exerciseImageSrc: any;
  openSelectExerciseImage: any;
}) => {
  return (
    <RowFlex>
      {exerciseImageSrc ? (
        <Image
          alt="Exercise image"
          src={exerciseImageSrc}
          sizes="fill"
          width={ImageSize}
          height={ImageSize}
        />
      ) : (
        <ImageContainer onClick={openSelectExerciseImage}>
          <Icon
            name="AddCircle"
            color={theme.colors.gray[400]}
            onPress={openSelectExerciseImage}
          />
        </ImageContainer>
      )}
      <div style={{ padding: "10px 0 0 20px" }}>
        <Input
          placeholder="Exercise name"
          bordered={false}
          style={{
            fontSize: "1.5rem",
            padding: 0,
            color: theme.colors.primary[100],
          }}
        />
        <RowEntriesContainer>
          <p style={{ marginRight: 10 }}>Rep</p>
          <InputNumber
            min={1}
            max={100}
            defaultValue={12}
            onChange={() => {}}
            bordered={false}
          />
        </RowEntriesContainer>
        <RowEntriesContainer>
          <p style={{ marginRight: 10 }}>Sets</p>
          <InputNumber
            min={1}
            max={100}
            defaultValue={4}
            onChange={() => {}}
            bordered={false}
          />
        </RowEntriesContainer>
        <RowEntriesContainer>
          <p style={{ marginRight: 10 }}>Difficulty</p>
          <Select
            defaultValue="easy"
            style={{ width: 100 }}
            onChange={() => {}}
            options={ExerciseLevels}
            title="Difficulty"
            bordered={false}
          />
        </RowEntriesContainer>
      </div>
    </RowFlex>
  );
};
const { Title } = Typography;
const ExerciseBuilder = ({ text, isCombain, isDragging }: IExerciseBuilder) => {
  const [exerciseImageSrc, setExerciseImageSrc] = useState<string>();
  const openSelectExerciseImage = () => {};

  const deleteExercise = () => {};
  // const confirm = (e: React.MouseEvent<HTMLElement>) => {
  const confirm = (e: any) => {
    console.log(e);
  };

  const cancel = (e: any) => {
    console.log(e);
  };

  return (
    <ExerciseContainer wrap="wrap" gap="middle" isDragging={isDragging}>
      <Popconfirm
        title="DELETE"
        description={() => {
          return (
            <div style={{ paddingRight: 10 }}>
              <p style={{ maxWidth: "40ch", margin: "20px 0 20px 0" }}>
                {isCombain
                  ? "Make sure to select the relevent exercise to delete before pressing delete."
                  : "Are You sure you want to delete this exercise"}
              </p>
              {isCombain && (
                <Radio.Group
                  onChange={() => {}}
                  value={isCombain ? 2 : 3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 0 20px 0",
                  }}
                >
                  <Radio value={1}>Base Exercise</Radio>
                  <Radio value={2}>Combined Exercise</Radio>
                  <Radio value={3}>The whole Exercise</Radio>
                </Radio.Group>
              )}
            </div>
          );
        }}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Delete"
        cancelText="Cancel"
        okType="danger"
        placement="bottomRight"
      >
        <div
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            borderRadius: 40,
            backgroundColor: theme.colors.gray[200],
            border: `solid 1px ${theme.colors.gray[400]}`,
            cursor: "pointer",
          }}
          onClick={() => deleteExercise()}
        >
          <Icon
            name="Close"
            size={18}
            color={theme.colors.error[600]}
            onPress={() => deleteExercise()}
            padding={5}
          />
        </div>
      </Popconfirm>
      <ExerciseEntry
        exerciseImageSrc={exerciseImageSrc}
        openSelectExerciseImage={openSelectExerciseImage}
      />
      {isCombain ? (
        <ExerciseEntry
          exerciseImageSrc={exerciseImageSrc}
          openSelectExerciseImage={openSelectExerciseImage}
        />
      ) : (
        <AddCombinedExerciseButton
          onClick={() => {
            console.log("clicked");
          }}
        >
          <Icon name="Add" size={18} color={theme.colors.primary[100]} />
          <p style={{ marginLeft: 10, color: theme.colors.primary[100] }}>
            Combin Exercises
          </p>
        </AddCombinedExerciseButton>
      )}
    </ExerciseContainer>
  );
};

export default ExerciseBuilder;
