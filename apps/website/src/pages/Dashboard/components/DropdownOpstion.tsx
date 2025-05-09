import React from "react";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const DropdownOpstion: React.FC = () => {
  const navigate = useNavigate();
  const user_email = localStorage.getItem("user_email");

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      children: [
        {
          key: "email",
          label: `Email: ${user_email}`,
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: <span style={{ color: "red" }}>Logout</span>,
      icon: <LogoutOutlined style={{ color: "red" }} />,
      onClick: () => {
        localStorage.clear();
        navigate("/");
      },
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <SettingOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownOpstion;
