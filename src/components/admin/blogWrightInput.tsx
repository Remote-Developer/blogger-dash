import React from 'react'
import { Toaster } from 'react-hot-toast'
import TextareaAutosize from "react-textarea-autosize";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PropsTypes {
    setMarkdownContent: (arg0: string) => void;
    markdownContent: string;
    setPreview: any;
    preview: boolean;
}


const BlogWrightInput = ({ markdownContent,
    preview,
    setMarkdownContent,
    setPreview }: PropsTypes) => {

    const handleChange = (e: any) => {
        setMarkdownContent(e.target.value);
    }


    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <h4 className="my-2 font-bold text-3xl">Share a new Blog <span className=" text-sky-700 font-extrabold   uppercase">creativity</span></h4>
            <div className='flex gap-x-3 my-3'>
                <button className="font-medium shadow-md  shadow-blue-700 rounded-md bg-transparent text-white hover:text-gray-200 hover:bg-sky-700">Edit</button>
                <button onClick={() => setPreview(!preview)} className="font-medium shadow-md  shadow-blue-700 rounded-md bg-transparent text-white hover:text-gray-200 hover:bg-sky-700">{!preview?"Preview":"Rewrite"}</button>
                <button className="font-medium shadow-md  shadow-blue-700 rounded-md bg-transparent text-white hover:text-gray-200 hover:bg-sky-700">Submit</button>
            </div>
            <div className="flex">

                {/* markdown writer */}
                {!preview && (
                    // <TextareaAutosize
                    //     onChange={handleChange}
                    //     value={markdownContent}
                    //     className="textbox py-3 px-2 min-h-[300px] w-full bg-[#333] border-2  hover:border-[#666] text-lg focus:outline-none"
                    //     placeholder="Start typing your Markdown here..."
                    // />
                    <ReactQuill className='w-full min-h-[300px]' theme="snow" value={markdownContent} onChange={handleChange} />
                )}
            </div>
        </div>
    )
}

export default BlogWrightInput