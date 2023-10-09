import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams()
    const [card, setCard] = useState({})
    const news = useLoaderData();

    useEffect(()=>{
        const findCards = news.find(card => card.id == id);
        setCard(findCards)
    },[news,id])


    return (
        <div className='px-4'>
            <img className='w-full h-[80vh] rounded-md' src={card.image} alt="" />
            <h2 className="text-3xl font-bold mt-4">{card.title}</h2>
            <p className='mt-3 text-[#706F6F]'>{card.detail_description}</p>
            
        </div>
    );
};

export default Details;