import { useEffect, useState } from "react";
import { GetDataBody } from "../../../interfaceProps";
import axiosInstance from "../../../libs/axios";

const useGetData = () => {
  const [datas, setDatas] = useState<GetDataBody[]>([]);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("");
      const rawDatas = response.data.data;

      const updatedDatas = rawDatas.map((data: GetDataBody) => {
        const startTime = new Date(`1970-01-01T${data.entry_time}`);
        const endTime = new Date(`1970-01-01T${data.clock_out}`);
        const diffMs = endTime.getTime() - startTime.getTime();
        const diffHours = diffMs / (1000 * 60 * 60);

        if (data.entry_time.split(":")[0] >= "07") {
          if (
            data.entry_time.split(":")[0] > "00" &&
            data.entry_time.split(":")[0] <= "10"
          ) {
            data.fine += 20000;
          } else {
            data.fine += 40000;
          }
        } else {
          data.fine += 40000;
        }

        if (data.status.toLowerCase() === "kontrak") {
          data.salary = 3000000 - data.fine;
        } else {
          data.salary = 4000000 - data.fine;
        }

        return {
          ...data,
          fine: data.fine,
          salary: data.salary,
          working_hours: diffHours,
        };
      });

      setDatas(updatedDatas);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    datas,
  };
};

export default useGetData;
