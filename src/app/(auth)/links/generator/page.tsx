"use client";

import { ContentContainer, Icon } from "@components/atoms";
import { theme } from "@theme/index";
import { TPlanObj, TreeWorkoutPlanGenerator } from "@utils/functions";
import { Breadcrumb, Button, Col, Drawer, FloatButton, Row, Space } from "antd";
import { useState } from "react";

const months = 2;
const weeks = 3;
const days = 3;

const onSelect = (item: any) => {
  console.log("selected", item);
};

const renderItems = (data: TPlanObj[]) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.key}
          style={{ margin: 10 }}
          onClick={() => {
            onSelect(item);
          }}
        >
          {item.type === "month" ? (
            <div
              style={{
                padding: "10px 20px 10px 10px",
                borderRadius: 30,
                backgroundColor: theme.colors.primary[100],
                color: theme.colors.white[100],
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="Add"
                size={20}
                color={theme.colors.white[100]}
                onPress={() => {}}
              />
              <p>{item.title}</p>
            </div>
          ) : item.type === "week" ? (
            <div
              style={{
                padding: "10px 20px",
                borderRadius: 30,
                backgroundColor: !months
                  ? theme.colors.primary[100]
                  : "transparent",
                color: !months
                  ? theme.colors.white[100]
                  : theme.colors.primary[100],
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="Add"
                size={20}
                color={theme.colors.gray[500]}
                onPress={() => {}}
              />
              <h3>{item.title}</h3>
            </div>
          ) : (
            <div
              style={{
                paddingLeft: 20,
                paddingBottom: 10,
                borderRadius: 30,
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ marginRight: 6 }}>
                  <Icon
                    name="Ellipse"
                    size={18}
                    color={theme.colors.gray[500]}
                  />
                </div>
                <p style={{ color: theme.colors.gray[500] }}>{item.title}</p>
              </div>
              <Icon
                name="ArrowForward"
                size={18}
                color={theme.colors.gray[400]}
              />
            </div>
          )}
          {item.children ? renderItems(item.children) : null}
        </div>
      ))}
    </div>
  );
};

const treeData = TreeWorkoutPlanGenerator({ months, weeks, days });
console.log("🚀 ~ file: page.tsx:120 ~ treeData:", treeData);
interface IGenerator {}
const Generator = ({}: IGenerator) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <ContentContainer>
      <div>
        <div
          style={{
            padding: "20px 70px",
            borderRadius: 30,
          }}
        >
          <Row gutter={16}>
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
          </Row>
        </div>
        <FloatButton.Group shape="square" style={{ right: 70 }} type="primary">
          <FloatButton icon={<Icon name="ChevronForward" />} />
          <FloatButton icon={<Icon name="ChevronBack" />} />
          <FloatButton icon={<Icon name="Tree" />} onClick={showDrawer} />
          <FloatButton icon={<Icon name="Share" />} />
        </FloatButton.Group>
        <Drawer
          title="Preview"
          placement="right"
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Reset</Button>
              <Button type="primary" onClick={onClose}>
                Share
              </Button>
            </Space>
          }
        >
          {renderItems(treeData)}
        </Drawer>
      </div>
    </ContentContainer>
  );
};

export default Generator;
