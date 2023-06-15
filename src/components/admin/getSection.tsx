import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';

const GetSection = ({ data, setData }: any) => {
  const [onButton, setOnButton] = useState(true)
  const [onId, setOnId] = useState("")

  const getData = async () => {
    const response = await axiosInstance(`/api/v1/sections`)
    setData((response as any).data?.data)
  }

  useEffect(() => {
    getData()
  }, []);

  const handleDelete = async (id: any) => {
    setOnButton(false)
    setOnId(id)
    const deleteData = await axiosInstance.delete(`/api/v1/sections/${id}`)
    if (deleteData.status == 201) {
      const newData = data.filter((e: any) => e._id !== id)
      setData(newData);
      toast.success('Successfully Delete Data!')
      setOnButton(true)
    } else {
      toast.error('Something wrong!')
      setOnButton(true)
    }

  }

  return (
    <>
      {(data as any)?.map((sdata: any, index: any) => (
        <div key={sdata._id} className="max-w-sm mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
          <div onClick={() => handleDelete((sdata as any)._id)} className="float-right text-red-700 cursor-pointer">{!onButton && onId === sdata._id ? <button className="float-right bg-blue-400 text-red-700 p-2 " disabled={true}>  <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg></button> : <RiDeleteBin5Line />}</div>
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
