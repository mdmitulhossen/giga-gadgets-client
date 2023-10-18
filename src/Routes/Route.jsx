import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductsDetails from "../pages/ProductsDetails";
import MyCartPage from "../pages/MyCartPage";
import BrandProductPage from "../pages/BrandProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


const Route = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        errorElement:<NotFoundPage/>,
        children:[
            {
                path: "/",
                element:<HomePage/>
            },
            {
                path: "/product/add",
                element:<AddProductPage/>
            },
            {
                path: "/product/update/:id",
                element:<AddProductPage update={true}/>
            },
            {
                path: "/products/:id",
                element:<ProductsDetails/>
            },
            {
                path: "/brand/:brandName",
                element:<BrandProductPage/>
            },
            {
                path: "/myCart",
                element:<MyCartPage/>
            },
            
        ]
    },
    {
        path: "/signIn",
        element:<LoginPage/>
    },
    {
        path: "/signUp",
        element:<RegisterPage/>
    }
]);

export default Route;