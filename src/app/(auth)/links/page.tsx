"use client";
import { ContentContainer, Icon, RoundedButton } from "@components/atoms";
import { CreatePlanConfigModal } from "@components/organisms";
import { theme } from "@theme/index";
import { Empty, Input } from "antd";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Data = null;

const Links = () => {
  const [showCreateLinkModal, setShowCreateLinkModal] =
    useState<boolean>(false);
  const onSearch = () => {};
  const router = useRouter();

  return (
    <ContentContainer>
      <div>
        <Input
          placeholder="Search by user"
          suffix={<Icon name="Search" size={20} />}
          size="large"
          style={{
            borderRadius: 100,
            height: 60,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        />
        {!Data && (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            imageStyle={{ height: 60 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            description={
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 style={{ color: theme.colors.black[80] }}>
                  Hmm, nothing here !
                </h2>
                <p style={{ width: "55ch", textAlign: "center" }}>
                  Craft your path to fitness success with a personalized workout
                  plan. It&apos;s the key to staying focused and achieving your
                  goals. Start today!
                </p>
              </span>
            }
          >
            <RoundedButton
              text="Create Your First Shared Link"
              onClick={() => {
                console.log("button Clicked");
                setShowCreateLinkModal(true);
              }}
            />
          </Empty>
        )}
      </div>
      <CreatePlanConfigModal
        isVisible={showCreateLinkModal}
        handleCancel={() => {
          setShowCreateLinkModal(false);
          console.log("canceled");
        }}
        handleOk={() => {
          router.push("/links/generator");
        }}
      />
    </ContentContainer>
  );
};

export default Links;
