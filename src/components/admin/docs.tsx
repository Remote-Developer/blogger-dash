import axiosInstance from "@/lib/axios";
import { Key, useEffect, useState } from "react";
import DocCard from "./docCard";
const languages: any = {
  javascript: true,
  python: true,
  "C++": true,
  C: true,
  "C#": true,
  Golang: true,
};

const Docs = () => {
  const [lang, setLang] = useState<string>("javascript");
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function getDocs(lang: string | any) {
      const res = await axiosInstance.get(
        `/api/v1/doc?${languages[lang] ? "lang=" + lang : ""}`
      );
      if (res.status !== 200) {
        throw new Error("Failed to fetch documents");
      }

      // setDocs()
      console.log(res.data);
    }
    getDocs(lang);
  }, [lang]);
  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value as string);
  };

  const handleDelete = async (_id: string) => {
    const res = await axiosInstance.delete(`/api/v1/doc/${_id}`);
    console.log(res.data);
  };

  return (
    <div>
      {/* Header */}
      <div className="h-16 flex items-center justify-between border-b border-gray-500 bg-slate-800">
        <div></div>
        <div className="flex items-center h-full">
          <select
            name="lang"
            value={lang}
            className="bg-dark px-4"
            onChange={handleChangeLang}
          >
            <option className="py-2" value="any">
              Any
            </option>
            <option className="py-2" value="python">
              Python
            </option>
            <option className="py-2" value="javascript">
              Javascript
            </option>
            <option className="py-2" value="C++">
              C++
            </option>
            <option className="py-2" value="C">
              C
            </option>
            <option className="py-2" value="C#">
              C#
            </option>
            <option className="py-2" value="Golang">
              Golang
            </option>
            <option className="py-2" value="PHP">
              PHP
            </option>
          </select>
        </div>
      </div>
      <div>
        {docs.map((item: any, index: Key | null | undefined) => (
          <DocCard key={index} {...item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Docs;
