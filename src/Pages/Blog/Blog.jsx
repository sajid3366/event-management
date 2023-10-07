
const Blog = ({ blog }) => {

    const { title, writer_name,description, image,writer_image } = blog;

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
                    description.length >50 ? <p>{description.slice(0,50)} <span className="text-red-700 cursor-pointer">Read More...</span></p>:<p>{description}</p>
                }
            </div>
        </div>
    );
};

export default Blog;