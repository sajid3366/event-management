import { NavLink } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';


const ErrorPage = () => {
    return (
        <div >
            <div className='max-w-7xl mx-auto my-12'>
                <Navbar></Navbar>
                <div className='mt-12 mb-12 text-center '>
                    <h2 className="text-8xl my-4">404</h2>
                    <h2 className='text-3xl my-4'>SORRY WE CAN'T FIND THAT PAGE!</h2>
                    <NavLink to='/'><button className='btn btn-primary'>Go Home</button></NavLink>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default ErrorPage;