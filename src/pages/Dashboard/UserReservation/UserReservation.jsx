import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useManageReservation from "../../../hooks/useManageReservation";

const UserReservation = () => {
    const [reservation, refetch, isLoading] = useManageReservation();

    return (
        <div>
            <SectionHeading heading='Your Reservation' subHeading='Manage your bookings and stay updated with your reservations.'></SectionHeading>
            <div className="flex justify-around mb-10">
                <p className="text-3xl font-semibold text-cyan-500 text-center">Total Reservation: {reservation.length}</p>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservation.map((reserv, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={reserv.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{reserv.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-semibold">{reserv.email}</td>
                                    <td>
                                        {reserv.date}
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-cyan-500">Table: {reserv.tableNo}</span>
                                    </td>
                                    <td>
                                        {reserv.booking === 'confirm' ? <p className="text-cyan-500 font-semibold text-center">Confirm</p> : <p className="text-yellow-400 font-semibold text-center">Pending</p>}
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteItem(reserv)} title="Delete Item" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserReservation;