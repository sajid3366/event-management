import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import Review from "../Review/Review";

const Home = () => {

    const events = useLoaderData();
    console.log(events);
    
 

    return (
        <div>
            <div className="mt-[250px] ml-[310px] text-black text-center absolute">
                <h2 className="text-4xl font-bold mb-4 text-center">Welcome to NetGo</h2>
                <p className="max-w-2xl mx-auto">
                    NetGo: Your expert corporate event partner. We craft seamless, memorable experiences, ensuring your vision comes to life with precision.</p>
            </div>
            <img style={{
                backgroundImage: `url('https://i.ibb.co/kX4QCmK/bannermedium.jpg')`,
                opacity: 0.3,

            }} className="h-[80vh] w-[500px] lg:w-full rounded-lg" alt="" />

            <div className="mb-8">
                <h2 className="text-4xl font-bold mt-[100px] text-center">Check the Events</h2>
                <p className="text-center max-w-2xl mx-auto mt-5">Event management: Crafting seamless, creative, and impactful experiences, from corporate conferences to personal celebrations, using strategy and technology.</p>
                <div className="grid grid-cols-3 mt-14 gap-5">

                    {
                        events.map(event => <Service key={event.id} event={event}></Service>)
                    }
                </div>
            </div>
            
            <Review></Review>
        </div>
    );
};

export default Home;