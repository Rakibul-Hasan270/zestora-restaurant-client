import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserCart = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: cart = [], refetch, isLoading } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const resCard = await axiosSecure.get(`/cart/${user.email}`);
            return resCard.data;
        }
    })
    return [cart, refetch, isLoading];
};

export default useUserCart;