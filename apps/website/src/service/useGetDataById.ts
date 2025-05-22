import { useEffect, useState } from "react";
import axiosInstance from "../libs/axiosInstance";
import { GetDataBody } from "../interfaceProps";
import { useMessage } from "../service/useMessage";
import { useNavigate } from "react-router-dom";

const useGetDataById = (id: string | null) => {
  const [data, setData] = useState<GetDataBody | null>(null);
  const { contextHolder, success, error } = useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`api/employee?id=${id}`);
        if (isMounted) {
          setData(response.data.data);
          success("Data berhasil ditemukan.");
        }
      } catch (_) {
        if (isMounted) {
          error("Data tidak ditemukan.");
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { data, contextHolder };
};

export default useGetDataById;
