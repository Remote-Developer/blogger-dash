"use client";
import axios from "@/lib/axios";
import { FormEvent, useState } from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { ImSpinner10 } from "react-icons/im";
const languagesData = ["Python", "Javascript", "Go", "C++", "C#", "C"];
import toast, { Toaster } from 'react-hot-toast';
import GetSection from "./getSection";
import { AxiosResponse } from "axios";


export default function SectionsPage() {
  const [onButton, setOnButton] = useState(true)
  const [getData, setGetData] = useState<any>([]);
  const [data, setData] = useState({
    topic: "Python",
    order: 0,
    name: "",
  });


  const handleFieldsChange = (e: FormEvent<HTMLInputElement>): void => {
    setData({
      ...data,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };




  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setOnButton(false)


    toast.promise(axios.post(`/api/v1/sections`, {
      topic: data.topic.toLowerCase(),
      name: `${data.topic} ${data.name}`,
      order: Number(data.order)
    }), {
      loading: 'Sending post request...',
      success: (response: AxiosResponse) => {
        // Do something with the response if needed
        setOnButton(true)
        setGetData([...getData, (response as any).data?.data])
        return 'Post request successful!';

      },
      error: (error) => {
        console.error(error);
        setOnButton(true)
        setGetData([...getData, (error as any).data?.data]);
        return 'Error occurred during post request!';
      },
    })

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
              onChange={handleFieldsChange as any}
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

          <button
            disabled={onButton ? false : true}
            type="submit"
            className="py-4 cursor-pointer px-4 bg-emerald-700 text-gray-200 rounded border-2 border-gray-200 hover:text-emerald-700 hover:border-emerald-700 hover:bg-emerald-400"
          >
            <AiOutlineAppstoreAdd />
          </button>

        </div>
      </form>

      <div className="col-span-4">
        <GetSection data={getData} setData={setGetData} />
      </div>
    </div>
  );
}
