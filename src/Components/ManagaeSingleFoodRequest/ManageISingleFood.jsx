import { useLoaderData } from "react-router-dom";
import ManageFoodOne from "./ManageFoodOne";
// eslint-disable-next-line no-unused-vars
import { Swal } from 'sweetalert2';
// eslint-disable-next-line no-unused-vars
import SingleFoodRequest from './../SingleFoodRequest/SingleFoodRequest';


const ManageISingleFood = () => {
const singleFoodRequest = useLoaderData()|| ['This Food is not requested']  





    return (
        <div className="px-14 bg-amber-50" >
        <div>
           
            {
                singleFoodRequest?.map(food=><ManageFoodOne key={food._id} food={food}></ManageFoodOne>)
               
            }
        </div>
        </div>
    );
};

export default ManageISingleFood;
