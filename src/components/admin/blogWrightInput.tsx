import React from 'react'
import { Toaster } from 'react-hot-toast'
import TextareaAutosize from "react-textarea-autosize";

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
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <h4 className="my-2 font-bold text-3xl">Share you pure <span className=" text-sky-700 font-extrabold   uppercase">creativity</span></h4>
            <div className="flex">

                {/* markdown writer */}
                {!preview && (
                    <TextareaAutosize
                        className="textbox py-3 px-2 min-h-[300px] w-full bg-[#333] border-2   hover:border-[#666] text-lg focus:outline-none"
                        value={markdownContent}

                        placeholder="Start typing your Markdown here..."
                    />
                )}


            </div>




        </div>
    )
}

export default BlogWrightInput