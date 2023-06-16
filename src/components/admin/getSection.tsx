import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiLoaderAlt } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';

const GetSection = ({ data, setData }: any) => {
  const [onButton, setOnButton] = useState(true)
  const [onId, setOnId] = useState("")
  const [findWithCat,setFindWithCat]=useState<any>([])
  
 

   

  const getData = async () => {
    const response = await axiosInstance(`/api/v1/sections`)
    setData((response as any).data?.data)
    setFindWithCat((response as any).data?.data)
  }

  useEffect(() => {
    getData()
  }, []);

 
   

    
   
  // find by select tag
  const findWithName= (e:any)=>{
    if(e.target.value==="all"){
      setFindWithCat(data)
    }else{

      const datatypebyname = data.filter((singleData:any)=>singleData.topic===e.target.value)
      setFindWithCat(datatypebyname)
    }
     
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
        <select className="m-0 bg-black w-full" onChange={findWithName}>
        <option value="default" disabled selected hidden>
          Find by name
        </option>
            
          <option value="all">All</option>
          <option value="javascript">Javascript</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="c++">C++</option>
          <option value="swift">Swift</option>
          <option value="php">PHP</option>
        </select>
      </div>
      {( findWithCat as any)?.map((sdata: any, index: any) => (
        <div key={sdata._id} className="max-w-[400px] mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
          <div onClick={() => handleDelete((sdata as any)._id)} className="float-right text-red-700 cursor-pointer">{!onButton && onId === sdata._id ? <button className="py-4   text-gray-200 rounded border-2 border-gray-200  " disabled={true}>
            <BiLoaderAlt /></button> : <RiDeleteBin5Line />}</div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {sdata.name}
          </h5>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {sdata.topic}
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
    </>
  );
};

export default GetSection;
