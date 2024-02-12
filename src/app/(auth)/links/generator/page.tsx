"use client";

import { AddExerciseButton, ContentContainer, Icon } from "@components/atoms";
import { ExerciseBuilder, WorkoutPlanTree } from "@components/organisms";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";
import { Breadcrumb, Col, FloatButton, Input, Row } from "antd";
import { useState } from "react";

// TODO: Make time schedule Store
const months = 2;
const weeks = 3;
const days = 3;

const data = [
  { id: "item-0", title: "Item 0", isCombain: false },
  { id: "item-1", title: "Item 1", isCombain: true },
];

interface IGenerator {}

const Generator = ({}: IGenerator) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDragEnd = (event: DropResult) => {
    const { destination, source, draggableId } = event;
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    // TODO: Switch order
  };

  return (
    <ContentContainer>
      <div>
        <div
          style={{
            padding: "20px 20px",
            borderRadius: 30,
          }}
        >
          <Row gutter={16}>
            <Input
              placeholder="Exercises Day name"
              bordered={false}
              style={{ fontSize: "2rem", padding: 0 }}
            />
            <Col span={12}>
              <Breadcrumb
                separator=">"
                items={[
                  {
                    title: "Month 1",
                  },
                  {
                    title: "Week 1",
                  },
                  {
                    title: "Day 1",
                  },
                ]}
              />
            </Col>
            <Col span={24} style={{ padding: 0 }}>
              <div style={{ marginTop: 30 }}>
                <div />
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="droppable-0" key="droppable-0">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {data?.map((item, index) => (
                          <Draggable
                            key={item.id}
                            draggableId={item.id.toString()}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                key={index}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                style={{
                                  ...provided.draggableProps.style,
                                  marginBottom: 15,
                                }}
                              >
                                <ExerciseBuilder
                                  text={item.title}
                                  isCombain={item.isCombain}
                                  isDragging={snapshot.isDragging}
                                />
                              </div>
                            )}
                          </Draggable>
                        ))}

                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
                <AddExerciseButton label="Add Exercise" />
              </div>
            </Col>
          </Row>
        </div>
        <FloatButton.Group shape="square" style={{ right: 70 }} type="primary">
          <FloatButton icon={<Icon name="ChevronForward" />} />
          <FloatButton icon={<Icon name="ChevronBack" />} />
          <FloatButton icon={<Icon name="Tree" />} onClick={showDrawer} />
          <FloatButton icon={<Icon name="Share" />} />
        </FloatButton.Group>
        <WorkoutPlanTree
          schedule={{ days, months, weeks }}
          isOpen={open}
          onClose={onClose}
          onSelect={() => {}}
        />
      </div>
    </ContentContainer>
  );
};

export default Generator;
