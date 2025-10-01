import {  MdMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { RiAddLargeLine } from "react-icons/ri";
import {  FaWindowRestore } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";


const Dashboard = () => {


    return (
        <div className="max-w-6xl mx-auto md:flex gap-6 mt-10">

            {/* admin role  */}
            <div className="md:w-80 bg-cyan-900 text-white list-none p-5 space-y-2">
                <li>
                    <NavLink className={({ isActive }) => `flex items-center gap-[7px] px-3 py-2 rounded-md transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/dashboard/manageMenuItem'><span className="flex items-center gap-[7px]"><MdMenu></MdMenu>Manage Menu Item</span></NavLink>
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
                    } to='/dashboard/manageReservation'><span className="flex items-center gap-[7px]"><FaWindowRestore></FaWindowRestore>Manage Reservation</span></NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/dashboard/viewOrder'><span className="flex items-center gap-[7px]"><HiViewGridAdd></HiViewGridAdd>View Order</span></NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) =>
                        `flex items-center gap-[7px] px-3 py-2 rounded-md transition 
                            ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`
                    } to='/dashboard/manageUser'><span className="flex items-center gap-[7px]"><FaUserEdit></FaUserEdit>Manage User</span></NavLink>
                </li>
            </div>

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;