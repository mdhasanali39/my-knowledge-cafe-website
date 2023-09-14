import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch('../../../public/blogs.json');
            const data = await res.json()
            setBlogs(data)
        }
        fetchData();
    },[])


    return (
        <div className="w-3/4">
            <h2 className="text-xl font-semibold">Blogs</h2>
            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;