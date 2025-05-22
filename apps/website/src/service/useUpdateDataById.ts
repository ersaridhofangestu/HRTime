import axiosInstance from "../libs/axiosInstance";
import { GetDataBody } from "../interfaceProps";
import { useMessage } from "../service/useMessage";
import { useNavigate } from "react-router-dom";

const useUpdateDataById = () => {
  const { contextHolder, success, error } = useMessage();
  const navigate = useNavigate();

  const fetchData = async (id: string | null, data: GetDataBody | null) => {
    if (!id || !data) return;

    try {
      await axiosInstance.put(`api/employee?id=${id}`, data);
      success("Data berhasil diubah.");
    } catch (_) {
      error("Data tidak ditemukan.");
    }
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return {
    fetchData,
    contextHolder,
  };
};

export default useUpdateDataById;
