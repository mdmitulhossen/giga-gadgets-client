import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../pages/HomePage";


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
                element:<h1>addProduct</h1>
            },
            {
                path: "/myCart",
                element:<h1>myCart</h1>
            }
        ]
    }
]);

export default Route;