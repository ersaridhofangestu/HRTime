import { message } from "antd";

const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (content: string) => {
    messageApi.open({
      type: "success",
      content,
    });
  };

  const error = (content: string) => {
    messageApi.open({
      type: "error",
      content,
    });
  };

  const warning = (content: string) => {
    messageApi.open({
      type: "warning",
      content,
    });
  };

  return {
    contextHolder,
    success,
    error,
    warning,
  };
};

export { useMessage };
