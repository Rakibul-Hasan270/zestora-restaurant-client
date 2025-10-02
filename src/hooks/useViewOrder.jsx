import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useViewOrder = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: order = [], isLoading, refetch } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const resOrder = await axiosSecure.get('/cart');
            return resOrder.data;
        }
    })

    return [order, isLoading, refetch];
};

export default useViewOrder;