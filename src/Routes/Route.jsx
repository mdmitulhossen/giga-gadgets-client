import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import ProductsDetails from "../pages/ProductsDetails";
import MyCartPage from "../pages/MyCartPage";
import BrandProductPage from "../pages/BrandProductPage";


const Route = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path: "/",
                element:<HomePage/>
            },
            {
                path: "/addProduct",
                element:<AddProductPage/>
            },
            {
                path: "/products/:id",
                element:<ProductsDetails/>
            },
            {
                path: "/apple",
                element:<BrandProductPage/>
            },

            {
                path: "/myCart",
                element:<MyCartPage/>
            }
        ]
    }
]);

export default Route;