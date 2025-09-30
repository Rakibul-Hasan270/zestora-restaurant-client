import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import Menu from "../../pages/Menu/Menu";
import Reservation from "../../pages/Reservation/Reservation";
import Contact from "../../pages/Contact/Contact";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import MenuDetails from "../../components/MenuDetails/MenuDetails";


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
                element: <MenuDetails></MenuDetails>,
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
    }
])