
const Deal = ({ deal }) => {

    const {type,title,company_name, deals, price, image } = deal;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[350px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-l font-semibold">Deal with: {company_name}</p>
                <p className="text-[#706F6F]">{deals}</p>
                <p className="font-semibold">Cost: {price} $</p>
                
            </div>
        </div>
    );
};

export default Deal;