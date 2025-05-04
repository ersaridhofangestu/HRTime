// Updated.tsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import useGetDataById from "../../service/useGetDataById";
import useUpdateDataById from "../../service/useUpdateDataById";

const Updated: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const { data: dataNew, contextHolder:get } = useGetDataById(id);
  const [form] = Form.useForm();
  const {contextHolder:update, fetchData} = useUpdateDataById()

  useEffect(() => {
    if (dataNew) {
      form.setFieldsValue({
        name: dataNew.name,
        status: dataNew.status,
        date: dayjs(dataNew.date),
        entry_time: dayjs(dataNew.entry_time, "HH:mm"),
        clock_out: dayjs(dataNew.clock_out, "HH:mm"),
      });
    }
  }, [dataNew]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        {get}
        {update}
        <Button className="float-right max-w-[700px] w-full" onClick={() => navigate("/dashboard")} type="dashed">Kembali</Button>
      <Card title="Update Data" className="w-full max-w-[700px]">
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const payload = {
              ...values,
              date: values.date.format("YYYY-MM-DD"),
              entry_time: values.entry_time.format("HH:mm"),
              clock_out: values.clock_out.format("HH:mm"),
            };
            fetchData(id, payload);
          }}
        >
          <Form.Item name="name" label="Nama" rules={[{ required: true }]}>
            <Input placeholder="Nama lengkap" />
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select placeholder="Pilih status">
              <Select.Option value="karyawan">Karyawan</Select.Option>
              <Select.Option value="tetap">Tetap</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="date" label="Tanggal" rules={[{ required: true }]}>
            <DatePicker format="YYYY-MM-DD" className="w-full" />
          </Form.Item>

          <Form.Item
            name="entry_time"
            label="Jam Masuk"
            rules={[{ required: true }]}
          >
            <TimePicker format="HH:mm" className="w-full" />
          </Form.Item>

          <Form.Item
            name="clock_out"
            label="Jam Keluar"
            rules={[{ required: true }]}
          >
            <TimePicker format="HH:mm" className="w-full" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Updated;
