"use client";
import type { TableProps } from "antd";
import { Card, Checkbox, Input, Table, Typography } from "antd";
import ButtonGradient from "@/shared/ui/buttons/gradient";

const UOM = {
  HOURS: "hours",
} as const;

type DataType = {
  key: string;
  name: string;
  sla: number;
  uom: string;
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
    title: "SLA",
    dataIndex: "sla",
    key: "sla",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "UOM",
    dataIndex: "uom",
    key: "uom",
    render: (text) => <p>{text}</p>,
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
    name: "Draft",
    sla: 24,
    uom: UOM.HOURS,
    active: true,
  },
  {
    key: "02",
    name: "In Review",
    sla: 24,
    uom: UOM.HOURS,
    active: true,
  },
  {
    key: "03",
    name: "In Assessment",
    sla: 24,
    uom: UOM.HOURS,
    active: false,
  },
  {
    key: "04",
    name: "Active",
    sla: 24,
    uom: UOM.HOURS,
    active: false,
  },
];

const ConfigurationStageTableDetail = () => {
  return (
    <Card
      className="!h-full"
      classNames={{
        body: "!flex !flex-col !gap-4",
      }}
    >
      <div className="flex">
        <Typography.Title className="flex-1" level={3}>
          Stage's Detail
        </Typography.Title>
        <ButtonGradient size="middle">Edit / Save</ButtonGradient>
      </div>
      <div className="grid grid-cols-3 items-center gap-6">
        <label htmlFor="stage_name">Stage Name:</label>
        <Input
          className="col-span-2"
          id="stage_name"
          placeholder="01. Supplier Creation"
        />
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default ConfigurationStageTableDetail;
