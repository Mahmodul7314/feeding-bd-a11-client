import { Link } from "react-router-dom";


const SingleFoodRequest = ({food,handleDelete}) => {

    const{_id,foodName,image,donatorName,donatorEmail,userEmail,date2,pickup,date,note,donation,foodId,foodStatus}= food || {}
    return (
 <div>         
    <div className="card bg-gradient-to-r from-indigo-100 ... shadow-xl">
        <figure className=""><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <div className="space-y-2 text-center flex justify-center">
            <h2 className="card-title text-xl text-gray-800">{foodName}</h2>
            </div>
        <div className="text-[1rem] text-gray-600 font-medium space-y-2 text-center">
             <p>PickUp Location: {pickup}</p>
            <p>Expire Date: {date}</p>
            <p>Request Date: {date2}</p>
            <p>Donation Amoutn: {donation}</p>
            <p className="text-green-600">Food Status: {foodStatus}</p>

        </div>
    
            <div className="card-actions flex justify-center pt-6">
            <Link>
            <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Cancel Request</button>
            </Link>
            </div>
        </div>
    </div>
   

        </div>
    );
};

export default SingleFoodRequest;