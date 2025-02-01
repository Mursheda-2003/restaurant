import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/contact";
import OurMenu from "../pages/ourMenu/ourMenu";
import OurShop from "../pages/ourShop/ourShop";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import ToDo from "../pages/Dashboard/ToDo/ToDo";

    
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },

            {
                path: "ourMenu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "ourShop",
                element: <OurShop></OurShop>
            },
          
        ],
        
    },
    {
        path: "/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
           { path: "cart",
            element: <Cart></Cart>
        },
        { path: "userprofile",
            element: <UserProfile></UserProfile>
        },
        { path: "toDo",
            element: <ToDo></ToDo>
        }
        ]
    }
]);
export default router;