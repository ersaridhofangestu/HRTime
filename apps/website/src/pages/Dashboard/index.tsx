import React, { useEffect } from "react";
import { ButtonCreated, InputSearch, TableDatas } from "../../components";
import LogoWallet from "/src/assets/wallet.png";
import useGetData from "./services/useGetData";
import useDeletedData from "./services/useDeletedData";
import DropdownOpstion from "./components/DropdownOpstion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user_email = localStorage.getItem("user_email");
  useEffect(() => {
      if (!user_email) {
        navigate('/')
      }
    }, [user_email])
  const { contextHolder } = useDeletedData();
  const { datas } = useGetData();

  const filterData = () => {
    const array = [] as string[];

    datas?.map((data) => {
      array.push(data.name);
    });

    return array;
  };

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
        <DropdownOpstion/>
      </div>
      <div className="flex items-center justify-around mt-10 gap-4 mx-[1rem] md:mr-[2rem] xl:mr-[3rem]">
        <InputSearch array={filterData()} />
      </div>

      <div className="m-[1rem]">
        <div className="flex justify-end items-center md:mr-[1.3rem] xl:mr-[3rem]">
          <ButtonCreated />
        </div>
        <TableDatas array={datas} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
