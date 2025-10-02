import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useManageReservation = () => {
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

    return [reservation, refetch, isLoading];
};

export default useManageReservation;