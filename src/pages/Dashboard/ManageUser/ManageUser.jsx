import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            try {
                const resUser = await axiosSecure.get('/users');
                return resUser.data;
            } catch (err) {
                console.log(err);
            }
        }
    })

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
                                        <button title="Make Admin" className="btn"><FaUsers className="text-cyan-400"></FaUsers></button>
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