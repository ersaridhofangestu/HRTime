import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";

import securityGuard from "./assets/security-guard.gif";

import { handleLogin } from "./service";
import { useMessage } from "../service/useMessage";

type SizeType = Parameters<typeof Form>[0]["size"];

const Login: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">("default");
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { success, error, contextHolder } = useMessage();

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

  useEffect(() => {
    localStorage.removeItem
  }, []);

  return (
    <React.Fragment>
      {contextHolder}
      <div className="flex justify-center items-center flex-col md:flex-row lg:gap-5 h-screen px-4 overflow-hidden">
        <div>
          <p className="font-bold text-xl text-center">
            Halo Admin, selamat datang kembali!
          </p>
          <img
            src={securityGuard}
            className="w-[15rem] md:w-[10rem] lg:w-[30rem] mx-auto"
            alt="police"
          />
        </div>
        <Card title="Login" className="w-full max-w-[700px] md:shadow-lg">
          <small className="text-xs">
            Pantau data, kelola konten, dan kontrol semua aktivitas dari satu
            tempat.
          </small>
          <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            onFinish={(values) => handleLogin(values, success, error)}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email wajib diisi" },
                { type: "email", message: "Format email tidak valid" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Password wajib diisi" },
                { message: "Password tidak valid" },
              ]}
            >
              <Input.Password />
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

export default Login;
