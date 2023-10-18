import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";


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
                path: "/myCart",
                element:<h1>myCart</h1>
            }
        ]
    }
]);

export default Route;