import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Review = ({ review }) => {

    // const {title, description, image} = review;



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="mt-20 mb-12">
            <h2 className="text-4xl font-bold text-center">Clients Review</h2>
            <p className="text-[#706F6F] max-w-2xl mx-auto  mt-4 text-center mb-12">Customer reviews provide valuable insights, reflecting experiences with products or services.</p>

            <Carousel className='text-center' responsive={responsive}>
                <div>
                    <img className='ml-[140px]' src="https://i.ibb.co/h8cb3n6/member1.png" alt="" />
                    <h2 className="text-2xl font-semibold">Alice Johnson</h2>
                    <p className='max-w-sm mx-auto'>Innovative strategies, excellent leadership. Transformed our company's efficiency and productivity</p>
                </div>
                <div>
                    <img className='ml-[140px]' src="https://i.ibb.co/Nm0gfMd/member2.png" alt="" />
                    <h2 className="text-2xl font-semibold">Eva Davis</h2>
                    <p className='max-w-sm mx-auto'>Exceptional corporate governance. Their expertise elevated our business performance significantly</p>
                </div>
                <div>
                    <img className='ml-[140px]' src="https://i.ibb.co/fM6RSYB/member3.png" alt="" />
                    <h2 className="text-2xl font-semibold">David Smith</h2>
                    <p className='max-w-sm mx-auto'>Professional team, strategic vision. Their advice reshaped our management approach</p>
                </div>

                <div className=''>
                    <img className='ml-[140px]' src="https://i.ibb.co/svPy3YY/member4.png" alt="" />
                    <h2 className="text-2xl font-semibold">Sophia Brown</h2>
                    <p className='max-w-sm mx-auto'>Outstanding executive coaching. Enhanced our leadership skills and team dynamics.</p>
                </div>

            </Carousel>



        </div>
    );
};

export default Review;