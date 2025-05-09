import React, { useEffect, useState } from "react";
import { ButtonCreated, InputSearch, TableDatas } from "../../components";
import LogoWallet from "/src/assets/wallet.png";
import useGetData from "../../service/useGetData";
import useDeletedData from "../../service/useDeletedData";
import DropdownOpstion from "./components/DropdownOpstion";
import { useNavigate } from "react-router-dom";
import { GetDataBody } from "../../interfaceProps";

const Dashboard = () => {
  const [searchName, setSearchName] = useState<string>("");
  const [dataFilter, setDataFilter] = useState<GetDataBody[]>([]);
  const [outputSearchSelect, setOutputSelect] = useState<string>("");

  
  const { contextHolder } = useDeletedData();
  const { datas } = useGetData();

  let allSalery = 0;
  let formatRupiah;
  datas.map((data) => (allSalery += data.salary));
  const formatted = allSalery.toString().replace(/^0+/, "");
  if (formatted.length > 3) {
    const parts = formatted.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formatRupiah = integerPart;
  }

  const navigate = useNavigate();
  const user_email = localStorage.getItem("user_email");
  useEffect(() => {
    if (!user_email) {
      navigate("/");
    }
  }, [user_email, navigate]);

  useEffect(() => {
    if (outputSearchSelect) {
      const filtered = datas?.filter(
        (data) =>
          data?.name?.toLowerCase() === outputSearchSelect.toLowerCase(),
      );
      setDataFilter(filtered || []);
    } else if (searchName.trim()) {
      const filtered = datas?.filter((data) =>
        data?.name?.toLowerCase().includes(searchName.toLowerCase()),
      );
      setDataFilter(filtered || []);
    } else {
      setDataFilter(datas || []);
    }
  }, [searchName, outputSearchSelect, datas]);

  return (
    <React.Fragment>
      {contextHolder}

      <div className="flex justify-between items-center p-[1rem]">
        <div className="flex items-end gap-2">
          <img
            src={LogoWallet}
            alt="Logo"
            className="w-10 h-10 md:w-16 md:h-16"
          />
          <h1 className="md:text-3xl md:font-bold">HRTime</h1>
        </div>
        <DropdownOpstion />
      </div>

      <div className="flex items-center justify-around mt-10 gap-4 mx-[1rem] md:mr-[2rem] xl:mr-[3rem]">
        <InputSearch
          array={datas?.map((item) => item.name) || []}
          handleOnChange={setSearchName}
          output={setOutputSelect}
        />
      </div>

      <div className="m-[1rem]">
        <div className="flex justify-between items-center md:mr-[1.3rem] xl:mr-[3rem]">
          Total Gajih Karyawan Rp.{formatRupiah}
          <ButtonCreated />
        </div>
        <TableDatas array={dataFilter} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
