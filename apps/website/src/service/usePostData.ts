import { GetDataBody } from "../interfaceProps";
import axiosInstance from "../libs/axiosInstance";
import { useMessage } from "../service/useMessage";
import { useNavigate } from "react-router-dom";

export const usePostData = () => {
  const { success, error, contextHolder } = useMessage();
  const navigate = useNavigate();

  const handlePostData = async (values: GetDataBody) => {
    const formattedValues = {
      ...values,
      date: values.date?.format("YYYY-MM-DD"),
      entry_time: values.entry_time?.format("HH:mm"),
      clock_out: values.clock_out?.format("HH:mm"),
    };

    try {
      await axiosInstance.post("", formattedValues);
      success("Data berhasil dikirim");
    } catch (e) {
      error("server mati");
    }
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };

  return { handlePostData, contextHolder };
};
