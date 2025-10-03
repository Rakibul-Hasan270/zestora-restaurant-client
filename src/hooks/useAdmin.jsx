import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email, // 👈 শুধু যখন user আছে তখনই কল হবে
        queryFn: async () => {
            const resAdmin = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(resAdmin.data, 'from useAdmin.jsx');
            return resAdmin.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;