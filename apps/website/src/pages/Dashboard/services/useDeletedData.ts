import usePopCinfirm from "./usePopconfirm";
import { useMessage } from "../../../service/useMessage";
import axiosInstance from "../../../libs/axios";
import { useNavigate, useLocation } from "react-router-dom";

const useDeletedData = () => {
const navigate = useNavigate();
const location = useLocation();
  const { createPopconfirm } = usePopCinfirm();
  const { contextHolder, success, error } = useMessage();


  const handleDeleted = async (id: string | undefined) => {
    if (!id || id.trim() === "") {
      error("ID tidak valid.");
      return;
    }

    try {
      await axiosInstance.delete(`?id=${id}`);
      success("Data berhasil dihapus.");
      navigate(location.pathname, { replace: true });
    } catch (e) {
      error("Gagal menghapus data.");
      console.error(e);
    }
  };

  const renderDeletePopconfirm = (id: string) => {
    return createPopconfirm(() => handleDeleted(id));
  };

  return {
    renderDeletePopconfirm,
    contextHolder,
  };
};

export default useDeletedData;
