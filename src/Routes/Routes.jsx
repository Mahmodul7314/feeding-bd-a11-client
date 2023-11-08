import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "./MainLayout/MainLayout";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import Request from "../Components/FoodRequest/Request";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:"/availablefood",
          element:<AvailableFood></AvailableFood>
        },
        {
          path:"/addfood",
          element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:"/managefood",
          element:<ManageFood></ManageFood>
        },
        {
        path:"/foodrequest",
        element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/fooddetails/:id",
          element:<PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
        },
        {
          path:"/request/:id",
          element:<PrivateRoute><Request></Request></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`)
        }
      ]
    },
  ]);



  export default router;