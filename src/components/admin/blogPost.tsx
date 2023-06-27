"use client"
import { useState } from 'react'
import BlogWrightInput from './blogWrightInput';

const BlogPost = () => {

    const [markdownContent, setMarkdownContent] = useState("");
    const [preview, setPreview] = useState(false);
    return (
        <div className="w-full"
        >
            <BlogWrightInput
                markdownContent={markdownContent}
                setMarkdownContent={setMarkdownContent} setPreview={undefined} preview={false} />

        </div>
    )
}

export default BlogPost