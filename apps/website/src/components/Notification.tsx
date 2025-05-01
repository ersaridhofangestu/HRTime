import React from 'react';
import { Button, notification, Space } from 'antd';

interface Notification {
    title: string;
    description: string;
    text_button: string;
}

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const Notification: React.FC<Notification> = ({ title, description, text_button}) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Cancle
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: title,
      description: description,
      btn,
      key,
      onClose: close,
    });
  };
    return (
        <div>
        {contextHolder}
            <Button type="primary" onClick={openNotification}>
                {text_button}
            </Button>
        </div>
    );
};

export default Notification;