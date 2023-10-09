import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {

    const blogs = useLoaderData();

    return (
        <div className="grid md:grid-cols-2 gap-6 ">
            {
                blogs.map(blog =><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;