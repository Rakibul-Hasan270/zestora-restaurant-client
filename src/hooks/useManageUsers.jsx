import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useManageUsers = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            try {
                const resUser = await axiosSecure.get('/users', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
                });
                return resUser.data;
            } catch (err) {
                console.log(err);
            }
        }
    })

    return [users, refetch, isLoading];
};

export default useManageUsers;