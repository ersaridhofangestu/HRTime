import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { GetDataBody } from "../../../interfaceProps";
import { Link } from "react-router-dom";
import ButtonActive from "../../../components/ButtonActive";
import { EditOutlined } from "@ant-design/icons";
import useDeletedData from "../../../service/useDeletedData";

const TableDatas: React.FC<{ array: GetDataBody[] }> = ({ array }) => {
  const { contextHolder, renderDeletePopconfirm } = useDeletedData();

  const columns: TableColumnsType<GetDataBody> = [
    {
      title: "Nama",
      dataIndex: "name",
      width: "30%",
      align: "center",
    },
    {
      title: "Statis",
      dataIndex: "status",
      align: "center",
      filters: [
        {
          text: "Kontrak",
          value: "kontrak",
        },
        {
          text: "Tetap",
          value: "Tetap",
        },
      ],
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      width: "10%",
      align: "center",
    },
    {
      title: "Jam Masuk",
      dataIndex: "entry_time",
      width: "15%",
      align: "center",
      render: (time: string) => time?.slice(0, 5),
    },
    {
      title: "Jam Keluar",
      dataIndex: "clock_out",
      align: "center",
      width: "15%",
      render: (time: string) => time?.slice(0, 5),
    },
    {
      title: "Jam Kerja",
      align: "center",
      dataIndex: "working_hours",
      width: "15%",
      render: (value: number) => {
        const jam = Math.ceil(value);
        const color = jam >= 9 ? "green" : "red";
        return <span style={{ color }}>{jam} jam</span>;
      },
    },
    {
      title: "Denda",
      dataIndex: "fine",
      align: "center",
      width: "60%",
      render: (value: string | number) => {
        const formatted = value.toString().replace(/^0+/, "");
        if (formatted.length > 3) {
          const parts = formatted.split(".");
          const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          return `Rp ${integerPart}`;
        }
        return formatted || "0";
      },
    },
    {
      title: "Salary",
      dataIndex: "salary",
      align: "center",
      width: "40%",
      render: (value: number) => {
        return value.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        });
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      align: "center",
      width: "40%",
      render: (_, record) => (
        <div className="flex gap-2">
          <Link to={`/dashboard/edit-data?id=${record.id}`}>
            <ButtonActive Icon={<EditOutlined />} />
          </Link>
          {renderDeletePopconfirm(String(record.id))}
        </div>
      ),
    },
  ];

  const onChange: TableProps<GetDataBody>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const dataSourceWithKey = array.map((data, index) => ({
    ...data,
    key: data.id || index,
  }));

  return (
    <>
      {contextHolder}
      <Table<GetDataBody>
        className="md:p-5"
        columns={columns}
        dataSource={dataSourceWithKey}
        onChange={onChange}
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default TableDatas;
