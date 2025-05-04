import React, { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd";
import { usePostData } from "../../service/usePostData";
import { useNavigate } from "react-router-dom";

type SizeType = Parameters<typeof Form>[0]["size"];

const Created: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const navigate = useNavigate();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const { handlePostData, contextHolder } = usePostData();

  const enterLoading = (index: number) => {
    setLoadings((prev) => {
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prev) => {
        const newLoadings = [...prev];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center flex-col mt-10 md:mt-0 md:h-screen px-4 overflow-hidden">
        {contextHolder}
        <Button
          className="float-right max-w-[700px] w-full"
          onClick={() => navigate("/dashboard")}
          type="dashed"
        >
          Kembali
        </Button>
        <Card
          title="Created Data User"
          className="w-full max-w-[700px] shadow-lg"
        >
          <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            onFinish={handlePostData}
          >
            <Form.Item
              label="Nama"
              name="name"
              rules={[{ required: true, message: "Nama wajib diisi" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Status wajib diisi" }]}
            >
              <Select>
                <Select.Option value="karyawan">Kontrak</Select.Option>
                <Select.Option value="tetap">Tetap</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Tanggal"
              name="date"
              rules={[{ required: true, message: "Tanggal wajib diisi" }]}
            >
              <DatePicker format="YYYY-MM-DD" className="w-full" />
            </Form.Item>

            <Form.Item
              label="Jam Masuk"
              name="entry_time"
              rules={[{ required: true, message: "Jam masuk wajib diisi" }]}
            >
              <TimePicker format="HH:mm" className="w-full" />
            </Form.Item>

            <Form.Item
              label="Jam Keluar"
              name="clock_out"
              rules={[{ required: true, message: "Jam keluar wajib diisi" }]}
            >
              <TimePicker format="HH:mm" className="w-full" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={loadings[2]}
                onClick={() => enterLoading(2)}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Created;
