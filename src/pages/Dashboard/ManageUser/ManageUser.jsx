import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useManageUsers from "../../../hooks/useManageUsers";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const [users, refetch, isLoading] = useManageUsers();


    const handelDeleteUser = user => {
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
                    const resDelete = await axiosSecure.delete(`/users/${user._id}`);
                    if (resDelete.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${user.name} has been deleted.`,
                            icon: "success"
                        });
                        toast.success(`${user.name} has been delete`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }

    const handelMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it admin now!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const resPatch = await axiosSecure.patch(`/users/admin/${user._id}`);
                    if (resPatch.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Yes Admin!",
                            text: `${user.name} has been Admin now.`,
                            icon: "success"
                        });
                        toast.success(`${user.name} has been admin now`);
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
            <SectionHeading heading='Manage Your People' subHeading='Empower admins, organize members, and streamline access'></SectionHeading>

            <div className="md:flex justify-around mb-8">
                <p className="text-xl text-center md:text-3xl text-cyan-500 font-semibold">Total Admin: {users.filter(user => user.role === 'admin').length}</p>
                <p className="text-xl text-center md:text-3xl text-cyan-500 font-semibold">Total User: {users.filter(user => user.role !== 'admin').length}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image/Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =>
                                <tr key={user._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.role === 'admin' ? <p className="text-cyan-500">Admin</p> : <button onClick={() => handelMakeAdmin(user)} title="Make Admin" className="btn"><FaUsers className="text-cyan-400"></FaUsers></button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteUser(user)} title="Delete User" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;