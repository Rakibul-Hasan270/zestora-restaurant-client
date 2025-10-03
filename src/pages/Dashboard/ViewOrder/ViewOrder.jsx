import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useViewOrder from "../../../hooks/useViewOrder";

const ViewOrder = () => {
    const [order, isLoading, refetch] = useViewOrder();

    if (isLoading) return <p className="text-center text-2xl font-serif text-cyan-500 mt-16 mb-10">Loading...</p>
    return (
        <div>
            <SectionHeading heading='Manage Order' subHeading='Stay on top of customer requests — confirm, cancel or complete orders easily.'></SectionHeading>

            <div className="mb-8">
                <p className="text-xl md:text-3xl text-center text-cyan-500 font-semibold">Total Order: {order.length}</p>
            </div>
            <p>Order page is ready. Firsly finish payment page then order. cause payment history notification come, then confirm, cansel or finish order_</p>
        </div>
    );
};

export default ViewOrder;