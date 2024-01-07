import { RoundedButton } from "@components/atoms";
import { TPlanDuration } from "@customTypes/Types";
import { InputNumber, Modal, Segmented } from "antd";
import { useState } from "react";

interface ICreatePlanConfigModal {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const CreatePlanConfigModal = ({
  isVisible,
  handleCancel,
  handleOk,
}: ICreatePlanConfigModal) => {
  const [planDuration, setPlanDuration] = useState<TPlanDuration>("monthly");

  return (
    <div>
      <Modal
        open={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={() => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <RoundedButton
              buttonType="link"
              theme="negative"
              key="back"
              text="Cancel"
              onClick={handleCancel}
            />
            <RoundedButton key="next" text="Start" onClick={handleOk} />
          </div>
        )}
      >
        <h2 style={{ textAlign: "center" }}>Shape your plan</h2>
        <div style={{ maxWidth: 500, margin: "20px auto 0 auto" }}>
          <Segmented
            size="large"
            options={["Daily", "Weekly", "Monthly"]}
            block
            value={`${
              planDuration.charAt(0).toUpperCase() + planDuration.slice(1)
            }`}
            onChange={(e) => {
              setPlanDuration(
                e.toString().toLocaleLowerCase() as TPlanDuration
              );
            }}
          />
        </div>
        <p style={{ margin: "40px auto 0 auto", maxWidth: "60ch" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          optio tempore quis unde, minima vero natus
        </p>
        <div
          style={{
            maxWidth: 450,
            marginTop: 30,
            marginBottom: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {planDuration === "monthly" && (
            <div>
              <h3>Months</h3>
              <InputNumber
                size="large"
                min={0}
                max={3}
                defaultValue={1}
                onChange={() => {}}
              />
            </div>
          )}
          {planDuration === "monthly" && (
            <div>
              <h3>Weeks</h3>
              <InputNumber
                size="large"
                min={2}
                max={4}
                defaultValue={4}
                onChange={() => {}}
              />
            </div>
          )}
          {planDuration !== "daily" && (
            <div>
              <h3>Days</h3>
              <InputNumber
                size="large"
                min={1}
                max={7}
                defaultValue={4}
                onChange={() => {}}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CreatePlanConfigModal;
