import { Link } from "react-router-dom";

const Service = ({ event }) => {

    const { id, title, description, price, image } = event;

    return (
        <div className="rounded-md bg-base-200">
            <figure><img className="w-full h-[250px] rounded-md" src={image} alt="event" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    description
                }
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/news/${id}`}><button className="px-4 py-2 rounded-md bg-red-400 text-white">Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Service;