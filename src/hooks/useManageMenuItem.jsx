import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageMenuItem = () => {
    const axiosSecure = useAxiosSecure();

    const { data: menuItem = [], refetch, isLoading } = useQuery({
        queryKey: ['menuItem'],
        queryFn: async () => {
            const resMenu = await axiosSecure.get('/menu');
            return resMenu.data;
        }
    })

    return [menuItem, refetch, isLoading];
};

export default useManageMenuItem;