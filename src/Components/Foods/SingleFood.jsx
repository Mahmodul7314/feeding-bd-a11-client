/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleFood = ({food}) => {
  const  {_id,foodName,image,quantity,pickup,date,note,donatorImage,donatorName,foodStatus} = food || {}
    return (
        <div>
    <div className="card bg-gradient-to-r from-indigo-100 ... shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <div className="flex justify-between">
            <h2 className="card-title text-xl text-gray-800">{foodName}</h2>
            <h2 className="card-title text-xl text-gray-800">Quantity: {quantity}</h2>
            </div>
        <div className="text-[1rem] text-gray-600 font-medium space-y-2">
             <p>PickUp Location: {pickup}</p>
            <p>Expire Date: {date}</p>
            <p>Additional Info: {note}</p>
            <p className="text-green-600">Food Status: {foodStatus}</p>

        </div>
        <div>
            <div className=" text-gray-600">
                <h2>Donator:</h2>
            <div>{donatorName}</div>
            <div className="py-2"><img className="w-[2rem] h-[2rem] rounded-lg" src={donatorImage} alt="" /></div>
            </div>
        </div>
            <div className="card-actions flex justify-center">
            <button className="btn btn-warning">View Details</button>
            </div>
        </div>
    </div>
   
</div>
    );
};

export default SingleFood;