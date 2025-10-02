import { MdMenu } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { RiAddLargeLine } from "react-icons/ri";
import { FaWindowRestore } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { FaHome, FaShoppingCart, FaUserEdit } from "react-icons/fa";
import useManageUsers from "../../../hooks/useManageUsers";
import useManageReservation from "../../../hooks/useManageReservation";
import useManageMenuItem from "../../../hooks/useManageMenuItem";
import useViewOrder from "../../../hooks/useViewOrder";
import { RiPresentationFill } from "react-icons/ri";


const Dashboard = () => {
    const [users] = useManageUsers();
    const [reservation] = useManageReservation();
    const [menuItem] = useManageMenuItem();
    const [order] = useViewOrder();
    const isAdmin = false;

    return (
        <div className="max-w-6xl mx-auto md:flex gap-6">
            <div className="md:w-80 bg-cyan-900 min-h-screen text-white list-none p-5 space-y-2">
                <div>
                    <div className="text-center text-3xl font-bold mb-12 text-cyan-300">
                        <Link to='/'>
                            <p>Zeastora <br /> Restaurant</p>
                        </Link>
                    </div>

                    {isAdmin ? <>
                        {/* admin role  */}
                        <li>
                            <NavLink className={({ isActive }) => `flex items-center gap-[7px] px-3 py-2 rounded-md transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/manageMenuItem'><span className="flex items-center gap-[7px]"><MdMenu></MdMenu>Menu Item ({menuItem.length})</span></NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/addDesh'><span className="flex items-center gap-[7px]"><RiAddLargeLine></RiAddLargeLine>Add New Desh</span></NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/manageReservation'><span className="flex items-center gap-[7px]"><FaWindowRestore></FaWindowRestore>Reservation ({reservation.length})</span></NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/viewOrder'><span className="flex items-center gap-[7px]"><HiViewGridAdd></HiViewGridAdd>View Order ({order.length})</span></NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/manageUser'><span className="flex items-center gap-[7px]"><FaUserEdit></FaUserEdit>Manage User ({users.length})</span></NavLink>
                        </li>
                    </>
                        :
                        // user role
                        <>
                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/userCart'><span className="flex items-center gap-[7px]"><FaShoppingCart></FaShoppingCart>My Cart({ })</span></NavLink>

                            <NavLink className={({ isActive }) =>
                                `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                            } to='/dashboard/userReservation'><span className="flex items-center gap-[7px]"><RiPresentationFill></RiPresentationFill>Reserv Table({ })</span></NavLink>
                        </>}
                </div>
                <div className="divider divider-accent">zestora</div>
                {/* home menu  */}
                <div>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/'><span className="flex items-center gap-[7px]"><FaHome></FaHome>Home</span>
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/menu'><span className="flex items-center gap-[7px]"><MdMenu></MdMenu>Menu</span>
                    </NavLink>

                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/reservation'><span className="flex items-center gap-[7px]"><RiPresentationFill></RiPresentationFill>Reservation</span>
                    </NavLink>
                </div>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;