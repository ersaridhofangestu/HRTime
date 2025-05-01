import React, { useState } from 'react';
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from 'antd';
import { GetDataBody } from '../../interfaceProps';
import axiosInstance from '../../libs/axios';

type SizeType = Parameters<typeof Form>[0]['size'];

const Created: React.FC = () => {
  const [data, setData] = useState<GetDataBody>();
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [loadings, setLoadings] = useState<boolean[]>([]);

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

  const handlePostData = async (values: GetDataBody) => {
    try {
      await axiosInstance.post("", values);
      console.log("Data submitted successfully", values);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
    
  
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10 md:mt-0 md:h-screen px-4 overflow-hidden">
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
          
        >
          <Form.Item label="Nama">
            <Input
              className="w-full"
              onChange={(e) => setData((prev) => ({ ...prev!, name: e.target.value }))}
            />
          </Form.Item>

          <Form.Item label="Status">
            <Select
              className="w-full"
              onChange={(value) => setData((prev) => ({ ...prev!, status: value }))}
            >
              <Select.Option value="karyawan">Kontrak</Select.Option>
              <Select.Option value="tetap">Tetap</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Tanggal">
            <DatePicker
              format="YYYY-MM-DD"
              className="w-full"
              onChange={(date, dateString) =>
                setData((prev) => ({ ...prev!, date: Array.isArray(dateString) ? dateString[0] : dateString }))
              }
            />
          </Form.Item>

          <div className="flex flex-col md:flex-row md:gap-4">
            <Form.Item label="Jam Masuk" className="w-full md:w-1/2">
              <TimePicker
                format="HH:mm"
                className="w-full"
                onChange={(time, timeString) =>
                  setData((prev) => ({ ...prev!, entry_time: Array.isArray(timeString) ? timeString[0] : timeString }))
                }
              />
            </Form.Item>

            <Form.Item label="Jam Keluar" className="w-full md:w-1/2">
              <TimePicker
                format="HH:mm"
                className="w-full"
                onChange={(time, timeString) =>
                  setData((prev) => ({ ...prev!, clock_out: Array.isArray(timeString) ? timeString[0] : timeString }))
                }
              />
            </Form.Item>
          </div>

          <Button
            type="primary"
            className="w-full"
            loading={loadings[2]}
            onClick={() => {enterLoading(2),handlePostData(data!)}}
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Created;
