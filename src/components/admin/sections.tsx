"use client";
import axios from "@/lib/axios";
import { useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import GetSection from "./getSection";
const languagesData = ["Python", "Javascript", "Go", "C++", "C#", "C"];
import toast, { Toaster } from 'react-hot-toast';


export default function SectionsPage() {
  const [onButton, setOnButton] = useState(true)
  const [getData, setGetData] = useState<any>([]);
  const [data, setData] = useState({
    topic: "Python",
    order: 0,
    name: "",
  });
  const handleFieldsChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };




  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setOnButton(false)
    const response = await axios.post(`/api/v1/sections`, {
      topic: data.topic.toLowerCase(),
      name: `${data.topic} ${data.name}`,
      order: Number(data.order),
    });
    if (response.status == 201) {
      setGetData([...getData, (response as any).data?.data])
      toast.success('Successfully Post Data!')
      setOnButton(true)
    } else {
      toast.error("Something went wrong!")
      setOnButton(true)
    }

  };






  return (
    <div className="grid grid-cols-12 gap-3">
      <form
        onSubmit={handleSubmit}
        className="col-span-8 grid grid-cols-6 gap-2"
      >
        <fieldset className="col-span-5">
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
          <div className="grid grid-cols-2 gap-4">
            <select
              required
              onChange={handleFieldsChange}
              className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 text-md placeholder:text-emerald-800"
              name="topic"
              value={data.topic}
            >
              {languagesData.map((lang, index) => (
                <option value={lang} key={index}>
                  {lang}
                </option>
              ))}
            </select>
            <input
              value={data.order}
              required
              onChange={handleFieldsChange}
              className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 text-md placeholder:text-emerald-800"
              type="number"
              name="order"
              placeholder="select order number"
              min={0}
              max={50}
            />
          </div>
          <input
            value={data.name}
            required
            name="name"
            onChange={handleFieldsChange}
            className="bg-dark py-2 px-3 outline-none border-2 border-emerald-700 text-emerald-600 w-full text-md placeholder:text-emerald-800"
            type="text"
            placeholder="Write section name"
          />
        </fieldset>
        <div className="col-span-1">
          {onButton ?
            <button
              type="submit"
              className="py-4 px-4 bg-emerald-700 text-gray-200 rounded border-2 border-gray-200 hover:text-emerald-700 hover:border-emerald-700 hover:bg-emerald-400"
            >
              <AiOutlineAppstoreAdd />
            </button>

            :
            <button
              disabled={true}
              type="submit"
              className="py-4 px-4 bg-emerald-700 text-gray-200 rounded border-2 border-gray-200 hover:text-emerald-700 hover:border-emerald-700 hover:bg-emerald-400"
            >
              <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
              </svg>
            </button>}
        </div>
      </form>

      <div className="col-span-4">
        <GetSection data={getData} setData={setGetData} />
      </div>
    </div>
  );
}
