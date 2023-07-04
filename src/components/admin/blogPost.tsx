"use client"
import { useState } from 'react'
import BlogWrightInput from './blogWrightInput';
import BlogPreview from './blogPreview';

const BlogPost = () => {

    const [markdownContent, setMarkdownContent] = useState("");
    const [preview, setPreview] = useState(false);
    return (
        <div className="w-full"
        >
            <BlogWrightInput
                markdownContent={markdownContent}
                setMarkdownContent={setMarkdownContent} setPreview={setPreview} preview={preview} />
            {preview && <BlogPreview markdownContent={markdownContent} />}
        </div>
    )
}

export default BlogPost