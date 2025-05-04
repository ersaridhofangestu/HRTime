import { DeleteOutlined } from "@ant-design/icons";
import type { PopconfirmProps } from "antd";
import { Popconfirm } from "antd";

const usePopCinfirm = () => {
  const createPopconfirm = (
    onConfirm: PopconfirmProps["onConfirm"],
    onCancel?: PopconfirmProps["onCancel"],
  ) => {
    return (
      <Popconfirm
        title="Hapus Data"
        description="Apakah kamu yakin ingin menghapus data ini?"
        onConfirm={onConfirm}
        onCancel={onCancel}
        okText="Ya"
        cancelText="Tidak"
      >
        <button className="text-red-500 hover:underline">
          <DeleteOutlined />
        </button>
      </Popconfirm>
    );
  };

  return {
    createPopconfirm,
  };
};

export default usePopCinfirm;
