/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const SingleFoodDetail = ({food}) => {
    const  {_id,foodName,image,quantity,pickup,date,note,donatorImage,donatorName,foodStatus} = food || {}
    return (
        <div>
    <div className="card py-20 max-w-full bg-slate-100 shadow-xl">
    <figure ><img src={image} alt="foodImage" /></figure>
     <div className="card-body text-center space-y-2 text-gray-800">
        <div className="flex justify-center gap-10 space-y-2 text-center">
        <h2 className="text-xl">Donator :  {donatorName}</h2>
        <h2 className="text-xl">Pickup Location: {pickup}</h2>
        </div>
        <div className="space-y-2">
        <h2 className="text-xl">Food: {foodName}</h2>
        <h2 className="text-xl">Servibe of People: {quantity}</h2>
        </div>
        <div className="space-y-2">
        <h2 className="text-xl">Expire Date: {date}</h2>
        <h2 className="text-green-500 text-xl font-medium">status: {foodStatus}</h2>
        </div>
        <div className=" pt-10 ">
        <Link to={`/request/${_id}`}><button className="btn btn-block bg-yellow-400 hover:bg-green-300">Request</button></Link>
        </div>
    </div>
</div>
        </div>
    );
};

export default SingleFoodDetail;