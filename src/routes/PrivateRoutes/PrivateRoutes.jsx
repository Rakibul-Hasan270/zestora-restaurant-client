import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p className='text-center mt-16 text-2xl mb-24 text-cyan-500'>Loading...</p>;
    if (user) {
        return children;
    }
    return <Navigate to='/signIn' state={{ from: location }} replace></Navigate >
};

export default PrivateRoutes;