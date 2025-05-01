import React, { useEffect, useState } from 'react';
import axiosInstance from '../../libs/axios';
import { GetDataBody } from "../../interfaceProps"
import { ButtonCreated, InputSearch,TableDatas } from "../../components"
import LogoWallet from "/src/assets/wallet.png"

const Dashboard = () => {
  const user_email = localStorage.getItem("user_email");
  const [datas, setDatas] = useState<GetDataBody[]>([]);


  useEffect(() => {
    fetchData();
   },[]);

   const fetchData = async () => {
    try {
      const response = await axiosInstance.get("");
      const rawDatas = response.data.data;
  
        const updatedDatas = rawDatas.map((data:GetDataBody) => {
        const startTime = new Date(`1970-01-01T${data.entry_time}`);
        const endTime = new Date(`1970-01-01T${data.clock_out}`);
        const diffMs = endTime.getTime() - startTime.getTime();
        const diffHours = diffMs / (1000 * 60 * 60);
  
        if (data.entry_time.split(":")[0] >= "07" ) {
          if (data.entry_time.split(":")[0] > "00" && data.entry_time.split(":")[0] <= "10") {
            data.fine += 20_000;
          }else {
            data.fine += 40_000;
          }
        }else{
          data.fine += 40_000;
        }

        if (data.status.toLowerCase() === "kontrak") {
          data.salary = 3_000_000 - data.fine;

        } else {
          data.salary = 4_000_000 - data.fine;
        }

          return {
            ...data,
            fine : data.fine,
            salary : data.salary,
            working_hours: diffHours,
          };
      })
  
      setDatas(updatedDatas);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  console.log(datas);

  const filterData = () => { 
    const array = [] as string[]
    
    datas?.map((data) => {
      array.push(data.name)
    })

    return array
  }

  return (
    <React.Fragment>
      <div className='flex justify-between items-center p-[1rem]'>
        <div className='flex items-end gap-2'>
          <img src={LogoWallet} alt="Logo" className='w-10 h-10 md:w-16 md:h-16' />
          <h1 className='md:text-3xl md:font-bold'>HRTime</h1>
        </div>
        {user_email && <p className="text-sm md:text-xl pt-4">{JSON.parse(user_email)}</p>}
      </div>
      <div className='mx-auto flex items-center justify-around mt-10 gap-4'>
        <InputSearch array={filterData()}/>
      </div>

      <div className='mx-[1rem]'>
        <div className='flex justify-end items-center mr-[3rem]'>
          <ButtonCreated/>
        </div>
        <TableDatas array={datas} />
       </div>
    </React.Fragment>
  );
};

export default Dashboard;
