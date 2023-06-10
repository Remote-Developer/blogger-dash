import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import {RiDeleteBin5Line} from "react-icons/ri";

const GetSection = ({data, setData}: any) => {
  

  const getData = async () => {
    const response = await axiosInstance(`/api/v1/sections`)

    setData((response as any).data?.data)
  }

  useEffect(() => {
    getData()
  }, []);

const handleDelete = async (id: any) => {
  const deleteData = await axiosInstance.delete(`/api/v1/sections/${id}`)
  if (deleteData.status == 201) {
    const newData = data.filter((e: any) => e._id !== id)
    setData(newData);
  }
  
}

  return (
    <>
      {(data as any)?.map((sdata: any, index: any) => (
          <div key={sdata._id} className="max-w-sm mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div onClick={() => handleDelete((sdata as any)._id)} className="float-right text-red-700 cursor-pointer"><RiDeleteBin5Line /></div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {sdata.name}
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {sdata.topic}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {sdata.documents}
            </p>
          </div>
      ))}
    </>
  );
};

export default GetSection;
