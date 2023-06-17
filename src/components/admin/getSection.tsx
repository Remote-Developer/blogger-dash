import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ImSpinner10 } from "react-icons/im";
import toast, { Toaster } from 'react-hot-toast';

const GetSection = ({ data, setData }: any) => {
  const [onButton, setOnButton] = useState<boolean>(true)
  const [onId, setOnId] = useState<string>("")
  const [loadingByTopic, setLoadingByTopic] = useState<any>(false)


  // const getData = async () => {
  //   const response = await axiosInstance(`/api/v1/sections`)
  //   setData((response as any).data?.data)
  //   setFindWithCat((response as any).data?.data)
  // }

  // useEffect(() => {
  //   getData()
  // }, []);






  // find by select tag
  const findWithTopic = async (e: any) => {
    setLoadingByTopic(true)
    const value = e.target.value;
    const getDataByTopic = await axiosInstance(`/api/v1/sections?lang=${value}`)
    setData(getDataByTopic?.data.data)
    setLoadingByTopic(false)
    console.log(getDataByTopic?.data.data)

  }




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

      <div className=" bg-slate-400 py-2 px-3 rounded-md">
        <select className="m-0 bg-black w-full" onChange={findWithTopic}>
          <option value="default" disabled selected hidden>
            Find by name
          </option>


          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="c++">C++</option>
          <option value="swift">Swift</option>
          <option value="php">PHP</option>
        </select>
      </div>
      {loadingByTopic ?
        <div className="flex justify-center my-5">
          <div className="border-4  border-white shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : !data.length ? <p className="bg-slate-900 px-4 py-2 text-center mx-auto opacity-50 text-sm text-white font-medium rounded-md my-12 
        w-6/12">No data found</p> : <div>

          {(data as any)?.map((sdata: any, index: any) => (
            <div key={sdata._id} className="max-w-[400px] mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Toaster
                position="top-right"
                reverseOrder={true}
              />
              <div onClick={() => handleDelete((sdata as any)._id)} className="float-right text-red-700 cursor-pointer">{!onButton && onId === sdata._id ? <button className="bg-dark py-2 px-2 outline-none border-2 border-emerald-700 text-emerald-600 w-full text-md placeholder:text-emerald-800 " disabled={true}>
                <ImSpinner10 /></button> : <RiDeleteBin5Line />}</div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {sdata.name}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className={`w-[10px] mx-2 h-[10px] ${sdata.isActive?"bg-green-600":'bg-red-600'} rounded-full border-2 z-0 inline-block border-black`}> </span>{sdata.topic}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {sdata?.documents?.map((st: any, index: any) => (
                  <li key={index}>
                    {st}
                  </li>
                ))}
              </p>
            </div>
          ))}
        </div>}
    </>
  );
};

export default GetSection;
