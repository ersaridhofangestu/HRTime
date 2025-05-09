import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
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
          value: "Kontrak",
        },
        {
          text: "Tetap",
          value: "Tetap",
        },
      ],
      onFilter: (value, record) => record.status === value,
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
      filters: [
        {
          text: "> 8 jam",
          value: "more",
        },
        {
          text: "≤ 8 jam",
          value: "less",
        },
      ],
      onFilter: (value, record) => {
        if (record.working_hours){
          if (value === "more") {
            return record.working_hours > 8;
          }
          if (value === "less") {
            return record.working_hours <= 8;
          }
        }
        return false;
      },
      render: (value: number) => {
        const jam = Math.ceil(value);
        const color = jam <= 8 ? "red" : "green";
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
        scroll={{ x: "max-content" }}
      />
    </>
  );
};

export default TableDatas;
