import { Icon } from "@components/atoms";
import { theme } from "@theme/index";
import { TPlanObj, TreeWorkoutPlanGenerator } from "@utils/functions";
import { Button, Drawer, Space } from "antd";
import { useMemo } from "react";

interface IRenderItems {
  data: TPlanObj[];
  months: number;
  onSelect: (item: TPlanObj) => void;
}

// TODO: Refactoring => no inline style.

const RenderItems = ({ data, months, onSelect }: IRenderItems) => {
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
          {item.children
            ? RenderItems({ data: item.children, months: months, onSelect })
            : null}
        </div>
      ))}
    </div>
  );
};

interface IWorkoutPlanTree {
  schedule: {
    months: number;
    weeks: number;
    days: number;
  };
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: TPlanObj) => void;
}

const WorkoutPlanTree = ({
  schedule,
  onClose,
  isOpen,
  onSelect,
}: IWorkoutPlanTree) => {
  const { months, weeks, days } = schedule;

  const treeData = useMemo(
    () => TreeWorkoutPlanGenerator({ months, weeks, days }),
    [days, months, weeks]
  );

  return (
    <div>
      <Drawer
        title="Preview"
        placement="right"
        onClose={onClose}
        open={isOpen}
        extra={
          <Space>
            <Button onClick={onClose}>Reset</Button>
            <Button type="primary" onClick={onClose}>
              Share
            </Button>
          </Space>
        }
      >
        {RenderItems({ data: treeData, months, onSelect })}
      </Drawer>
    </div>
  );
};

export default WorkoutPlanTree;
