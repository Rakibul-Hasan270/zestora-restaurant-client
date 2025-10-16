import { Link, NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RiAddLargeLine, RiPresentationFill } from "react-icons/ri";
import { FaWindowRestore } from "react-icons/fa6";
import { HiViewGridAdd } from "react-icons/hi";
import { FaHome, FaShoppingCart, FaUserEdit } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import useManageUsers from "../../../hooks/useManageUsers";
import useManageReservation from "../../../hooks/useManageReservation";
import useManageMenuItem from "../../../hooks/useManageMenuItem";
import useViewOrder from "../../../hooks/useViewOrder";
import useUserCart from "../../../hooks/useUserCart";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const { user, logOut } = useAuth();
    const [users] = useManageUsers();
    const [reservation] = useManageReservation();
    const [menuItem] = useManageMenuItem();
    const [order] = useViewOrder();
    const [cart] = useUserCart();
    const [isAdmin] = useAdmin();

    const links = (
        <ul className="menu p-2 w-full">
            {isAdmin ? (
                <>
                    <li>
                        <NavLink to="/dashboard/manageMenuItem" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`} >
                            <MdMenu /> Menu Item ({menuItem.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addDesh" className={({ isActive }) =>
                            `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`} >
                            <RiAddLargeLine /> Add New Desh
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageReservation" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                            <FaWindowRestore /> Reservation ({reservation.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/viewOrder" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                            <HiViewGridAdd /> View Order ({order.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageUser" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                            <FaUserEdit /> Manage User ({users.length})
                        </NavLink>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to="/dashboard/userCart" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                            <FaShoppingCart /> My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userReservation" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                            <RiPresentationFill /> Reserv Table
                        </NavLink>
                    </li>
                </>
            )}

            <div className="divider divider-accent">Zestora</div>

            {/* Normal Menu */}
            <li>
                <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                    <FaHome /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/menu" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`}>
                    <MdMenu /> Menu
                </NavLink>
            </li>
            <li>
                <NavLink to="/reservation" className={({ isActive }) => `flex items-center gap-2 rounded-md px-3 py-2 transition ${isActive ? "bg-cyan-600 font-semibold" : "hover:bg-cyan-500"}`} >
                    <RiPresentationFill /> Reservation
                </NavLink>
            </li>
        </ul>
    );

    return (
        <div className="drawer lg:drawer-open max-w-6xl mx-auto">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Main Content Area */}
            <div className="drawer-content flex flex-col">

                {/* Top Navbar */}
                <div className="w-full navbar bg-base-100 flex justify-between lg:hidden">

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                            <MdMenu size={24} />
                        </label>
                    </div>

                    {/* User Avatar */}
                    <div className="block lg:hidden dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                            title={user ? user.displayName : "Profile"}
                        >
                            <div className="w-10 rounded-full">
                                {user ? (
                                    <img src={user.photoURL} alt="User" />
                                ) : (
                                    <img
                                        alt="Default Avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                )}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                        > <li>
                                {user && (
                                    <li>
                                        <Link to='/' className="hover:bg-cyan-700 text-[14px]">
                                            <FaHome /> Home
                                        </Link>
                                    </li>
                                )}
                            </li>

                            <li>
                                {user && (
                                    <li onClick={() => logOut()}>
                                        <a className="hover:bg-cyan-700 text-[14px]">
                                            <BiLogOutCircle /> Logout
                                        </a>
                                    </li>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Nested Route Content */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar / Drawer Menu */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <div className="w-72 bg-cyan-900 text-white min-h-screen">
                    <div className="text-center text-2xl font-bold py-6 text-cyan-300">
                        <Link to='/'>Dashboard</Link>
                    </div>
                    {links}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;