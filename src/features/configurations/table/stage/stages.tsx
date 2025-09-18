"use client";
import type { TableProps } from "antd";
import { Card, Checkbox, Table, Typography } from "antd";
import ButtonGradient from "@/shared/ui/buttons/gradient";

type DataType = {
  key: string;
  name: string;
  stages: string[];
  active: boolean;
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "key",
    key: "key",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Stages",
    dataIndex: "stages",
    key: "stages",
    render: (_, { stages }) => <p>{stages.join(", ")}</p>,
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (_, { active }) => <Checkbox defaultChecked={active} />,
  },
];

const data: DataType[] = [
  {
    key: "01",
    name: "Supplier Creation",
    stages: ["01", "02", "03"],
    active: true,
  },
  {
    key: "02",
    name: "Supplier Assesment",
    stages: ["01", "02", "03"],
    active: true,
  },
  {
    key: "03",
    name: "Block / Unblock Supplier",
    stages: ["01", "02", "03"],
    active: false,
  },
];

const ConfigurationStageTableStages = () => {
  return (
    <Card
      className="!h-full"
      classNames={{
        body: "!flex !flex-col !gap-4",
      }}
    >
      <div className="flex">
        <Typography.Title className="flex-1" level={3}>
          Stage's
        </Typography.Title>
        <ButtonGradient size="middle">Edit / Save</ButtonGradient>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default ConfigurationStageTableStages;
