import { useState } from "react";


const Blog = ({ blog }) => {

    const { title, writer_name, description, image, writer_image } = blog;

    const [isOpen, setIsopen] = useState(false);

    // const [isExpanded, setExpanded] = useState(false)
    // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[50vh] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="flex items-center">
                    <img src={writer_image} alt="" />
                    <p className="font-semibold">{writer_name}</p>
                </div>
                

                {
                     !isOpen? <p>{description.slice(0, 50)} <span onClick={() => setIsopen(!isOpen)} className="text-red-700 cursor-pointer">{isOpen ? "Read less.." : "Read more.."}</span></p> : <p>{description}</p>
                }
            </div>
        </div>
    );
};

export default Blog;