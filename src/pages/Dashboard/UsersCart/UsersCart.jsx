import { MdOutlineEdit } from "react-icons/md";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useUserCart from "../../../hooks/useUserCart";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const UsersCart = () => {
    const [cart, refetch, isLoading] = useUserCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = parseInt(cart.reduce((cur, prv) => cur + prv.price, 0));

    const handelDeleteItem = async (cart) => {
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
                    const resDelete = await axiosSecure.delete(`/cart/${cart._id}`);
                    if (resDelete.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: `${cart.name} has been deleted.`,
                            icon: "success"
                        });
                        toast.success(`${cart.name} has been delete`);
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
            <SectionHeading heading='Your cart' subHeading='Easily edit or remove items before placing your order.'></SectionHeading>
            <div className="flex justify-around mb-10">
                <p className="text-3xl font-semibold text-cyan-500 text-center">Total order: {cart.length}</p>
                <p className="text-3xl font-semibold text-cyan-500 flex justify-center items-center">Total price: {totalPrice}</p>
                <button disabled className="btn bg-cyan-800 hover:bg-cyan-500">Pay Now</button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((cart, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={cart.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cart.name}</div>
                                                <div className="text-sm opacity-50">{cart.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {cart.category}
                                        <br />
                                        <span className="badge badge-ghost badge-sm text-cyan-500">Rating: {cart.rating}</span>
                                    </td>
                                    <td className="text-cyan-500 flex items-center gap-2"><FaBangladeshiTakaSign></FaBangladeshiTakaSign> {cart.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateMenuItem/${cart._id}`}>
                                            <button title="Edit Item" className="btn bg-cyan-700"><MdOutlineEdit></MdOutlineEdit></button>
                                        </Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handelDeleteItem(cart)} title="Delete Item" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
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

export default UsersCart;