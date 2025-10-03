import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdOutlineEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useManageMenuItem from "../../../hooks/useManageMenuItem";

const ManageMenuItem = () => {
    const axiosSecure = useAxiosSecure();
    const [menuItem, refetch, isLoading] = useManageMenuItem();

    const handelDeleteMenu = menu => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const resDelete = await axiosSecure.delete(`/menu/${menu._id}`);
                    if (resDelete.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${menu.name} has been deleted.`,
                            icon: "success"
                        });
                        toast.success(`${menu.name} has been delete`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }

    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16 mb-10">Loading...</p>
    return (
        <div>
            <SectionHeading heading='Edit Menu Item' subHeading='Edit Menu Item lets you quickly update dish details like name, category, description, image, price, and rating. This feature ensures menu information stays accurate and up to date, helping staff manage changes easily and customers always see the latest offerings.'></SectionHeading>
            <div className="mb-10">
                <p className="text-xl md:text-3xl font-semibold text-cyan-500 text-center">Total Menu Item: {menuItem.length}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image/Name</th>
                            <th>Category</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menuItem.map((menu, idx) =>
                                <tr key={menu._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={menu.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{menu.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {menu.category}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateMenuItem/${menu._id}`}>
                                            <button className="btn bg-cyan-700"><MdOutlineEdit></MdOutlineEdit></button>
                                        </Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteMenu(menu)} title="Delete User" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMenuItem;