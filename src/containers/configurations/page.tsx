"use client";
import { Tabs } from "antd";
import ConfigurationOtherTable from "@/features/configurations/table/other";
import ConfigurationStageTable from "@/features/configurations/table/stage";
import ConfigurationWorkflowTable from "@/features/configurations/table/workflow";

const tabContents = [
  {
    key: "stages",
    label: "Stages",
    children: <ConfigurationStageTable />,
  },
  {
    key: "workflows",
    label: "Workflows",
    children: <ConfigurationWorkflowTable />,
  },
  {
    key: "other",
    label: "Other",
    children: <ConfigurationOtherTable />,
  },
];

const ConfgurationPage = () => {
  return (
    <Tabs
      className="[&_.ant-tabs-nav]:!m-0 [&_.ant-tabs-content-holder]:!bg-white"
      defaultActiveKey="stages"
      items={tabContents}
      type="card"
    />
  );
};

export default ConfgurationPage;
