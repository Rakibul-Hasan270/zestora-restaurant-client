import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageReservation = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: reservation = [], refetch, isLoading } = useQuery({
        queryKey: ['reservation', user?.email],
        queryFn: async () => {
            try {
                const resReserv = await axiosSecure.get('/reservation');
                return resReserv.data;
            } catch (err) {
                console.log(err);
            }
        }
    })

    const handelDeleteReserv = reserv => {
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
                    const resDelete = await axiosSecure.delete(`/reservation/${reserv._id}`);
                    if (resDelete.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `Mr. ${reserv.name} your reservation has been deleted`,
                            icon: "success"
                        });
                        toast.success(`Mr. ${reserv.name} your reservation has been deleted`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }

    const handelConfirmReserv = reserv => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const resDelete = await axiosSecure.patch(`/reservation/${reserv._id}`);
                    if (resDelete.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Confirmed!",
                            text: `Mr. ${reserv.name} your reservation has been confirm`,
                            icon: "success"
                        });
                        toast.success(`Mr. ${reserv.name} your reservation has been confirm`);
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }

    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16 mb-10">Loading...</p>
    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            No
                                        </th>

                                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Date
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Customer
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                            Status
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            Action
                                        </th>
                                        <th className="relative py-3.5 px-4">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="">
                                    {
                                        reservation.map((reserv, idx) =>
                                            <tr key={reserv._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    <div className="inline-flex items-center gap-x-3">
                                                        <span>{idx + 1}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {reserv.date}
                                                </td>

                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <img
                                                            className="object-cover w-8 h-8 rounded-full"
                                                            src={reserv.image}
                                                            alt=""
                                                        />
                                                        <div>
                                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                                                {reserv.name}
                                                            </h2>
                                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                {reserv.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    {reserv.booking === 'confirm' ? <p className="text-cyan-500 font-semibold text-center">Confirm</p> : <p onClick={() => handelConfirmReserv(reserv)} title="confirm reservation" className="text-yellow-500 px-3 py-1.5 rounded-2xl hover:bg-yellow-700 hover:text-white cursor-pointer text-center">Pending</p>}
                                                </td>

                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <button onClick={() => handelDeleteReserv(reserv)} title="Delete reservation" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    );
};

export default ManageReservation;