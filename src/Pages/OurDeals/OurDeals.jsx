import { useLoaderData } from "react-router-dom";
import Deal from "./Deal";

const OurDeals = () => {

    const deals = useLoaderData();
    console.log(deals);

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {
                deals.map(deal=><Deal key={deal.id} deal={deal}></Deal>)
            }
            </div>

        </div>
    );
};

export default OurDeals;