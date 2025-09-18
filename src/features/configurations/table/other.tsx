import type { TableProps } from "antd";
import { Card, Space, Table, Tag, Typography } from "antd";
import ButtonGradient from "@/shared/ui/buttons/gradient";

type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          // biome-ignore lint/style/noMagicNumbers: no explanation
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <p>Invite {record.name}</p>
        <p>Delete</p>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const ConfigurationOtherTable = () => {
  return (
    <div className="p-4">
      <Card
        className="!h-full"
        classNames={{
          body: "!flex !flex-col !gap-4",
        }}
      >
        <div className="flex">
          <Typography.Title className="flex-1" level={3}>
            Other
          </Typography.Title>
          <ButtonGradient size="middle">Edit / Save</ButtonGradient>
        </div>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default ConfigurationOtherTable;
