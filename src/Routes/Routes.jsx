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
import Update from "../Components/Update/Update";
import ManageISingleFood from "../Components/ManagaeSingleFoodRequest/ManageISingleFood";
import ManageFoodOne from "../Components/ManagaeSingleFoodRequest/ManageFoodOne";



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
          element:<PrivateRoute><ManageFood></ManageFood></PrivateRoute>
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
        },
        {
          path:"/update/:id",
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/foods/${params.id}`)

        },
        {
          path:"/managesinglefood/:id",
          element:<PrivateRoute><ManageISingleFood></ManageISingleFood></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:3000/requestFood/${params.id}`)
        },
        {
          path:"/managefoodOne",
          element:<PrivateRoute><ManageFoodOne></ManageFoodOne></PrivateRoute>
        }

      ]
    },
  ]);



  export default router;