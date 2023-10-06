import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Home = () => {

    const events = useLoaderData();
    console.log(events);

    return (
        <div>
            <div className="mt-[300px] ml-[500px] text-black text-center absolute">
                <h2 className="text-4xl font-bold mb-4 text-center">Welcome to NetGo</h2>
                <p>We can manage our service. Check it out</p>
            </div>
            <img style={{
                backgroundImage: `url('https://i.ibb.co/kX4QCmK/bannermedium.jpg')`,
                opacity: 0.3,

            }} className="h-[80vh] w-[500px] lg:w-full rounded-lg" alt="" />

            <div className="">
            <h2 className="text-4xl font-bold mt-[100px] text-center">Check the Events</h2>
            <p className="text-center max-w-2xl mx-auto mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quisquam cupiditate ducimus? Eius dolorum rem deserunt, aliquid pariatur porro enim!</p>
            <div className="grid grid-cols-3 mt-14 gap-5">

                {
                    events.map(event => <Service key={event.id} event={event}></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;