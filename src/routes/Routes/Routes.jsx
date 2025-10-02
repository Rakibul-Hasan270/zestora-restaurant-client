import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Reservation from "../../pages/Reservation/Reservation";
import Contact from "../../pages/Contact/Contact";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import MenuDetails from "../../components/MenuDetails/MenuDetails";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import UsersCart from "../../pages/Dashboard/UsersCart/UsersCart";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ManageMenuItem from "../../pages/Dashboard/ManageMenuItem/ManageMenuItem";
import AddNewDesh from "../../pages/Dashboard/AddNewDesh/AddNewDesh";
import ManageReservation from "../../pages/Dashboard/ManageReservation/ManageReservation";
import ViewOrder from "../../pages/Dashboard/ViewOrder/ViewOrder";
import ManageUser from "../../pages/Dashboard/ManageUser/ManageUser";
import UpdateMenuItem from "../../pages/Dashboard/UpdateMenuItem/UpdateMenuItem";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/menuDetails/:id',
                element: <PrivateRoutes><MenuDetails></MenuDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:9000/menu/${params.id}`)
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // admin role 
            {
                path: 'manageMenuItem',
                element: <ManageMenuItem></ManageMenuItem>
            },
            {
                path: 'updateMenuItem/:id',
                element: <UpdateMenuItem></UpdateMenuItem>,
                loader: ({ params }) => fetch(`http://localhost:9000/menu/${params.id}`)
            },
            {
                path: 'addDesh',
                element: <AddNewDesh></AddNewDesh>
            },
            {
                path: 'manageReservation',
                element: <ManageReservation></ManageReservation>
            },
            {
                path: 'viewOrder',
                element: <ViewOrder></ViewOrder>
            },
            {
                path: 'manageUser',
                element: <ManageUser></ManageUser>
            },
            // user role 
            {
                path: 'cart',
                element: <UsersCart></UsersCart>
            }
        ]
    }
])