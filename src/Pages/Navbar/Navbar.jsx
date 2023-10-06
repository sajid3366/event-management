import { NavLink } from "react-router-dom";

const Navbar = () => {


    return (
        <nav className="flex justify-between items-center ">
            <div className="w-2/3 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">NetGo</h2>
                </div>
                <ul className="flex justify-center items-center  mt-8 lg:mt-0 gap-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            About
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/service" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Service
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-1/3 flex justify-end items-center">
                <NavLink to='/login'><button className="bg-slate-300 rounded-lg text-black px-4 py-2">Login</button></NavLink>
            </div>

        </nav>
    );
};

export default Navbar;