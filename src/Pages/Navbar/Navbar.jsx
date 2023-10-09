import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
    }


    return (
        <nav className=" lg:flex justify-between items-center px-4">
            <div className="w-2/3 flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">NetGo</h2>
                </div>
                <ul className="flex justify-center ml-12 items-center gap-x-6">
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
                        <NavLink to="/deals" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Deals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Blog
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="mt-5 ml-14 lg:mt-0">

                {
                    user ? <>

                        <div className="flex gap-2 items-center">
                        <span className="text-xl font-semibold">{user.displayName}</span>
                        <img className="w-[20%] h-[20%] rounded-full" src={user.photoURL} alt="" />
                        <div>
                        <button onClick={handleLogout} className="ml-2 bg-slate-300 rounded-lg text-black px-4 py-2">Logout</button>
                        </div>
                        </div>
                    </>
                        : <div className="w-1/3  items-center">
                            <NavLink to='/login'><button className="bg-slate-300 rounded-lg text-black px-4 py-2">Login</button></NavLink>
                        </div>
                }
            </div>


        </nav>
    );
};

export default Navbar;