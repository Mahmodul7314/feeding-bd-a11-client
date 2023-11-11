/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const FoodTabular = ({food,handleDelete}) => {
    const  {_id,foodName,image,quantity,pickup,date,note,donatorImage,donatorName,foodStatus} = food || {}
    return (
        <div className="bg-amber-50">
<div className="overflow-x-auto">
  <table className="table">
   
  
    <tbody>
      <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn w-10 h-6 btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th>
        <td className=" w-[14rem]">
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14 ">
                 
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{foodName}</div>
              <div className="text-sm opacity-50">{quantity}</div>
            </div>
          </div>
        </td>
        <td className="w-[14rem]">
          {pickup}
         <br />
          <span className="badge badge-ghost badge-sm">{date}</span>
        </td>
        <td className="text-green-500 ">{foodStatus}</td>
        <th className=" flex gap-12 ">
          <Link to={`/update/${_id}`}  className="btn btn-warning btn-xs">Update</Link>
          <Link to={`/managesinglefood/${_id}`}><button className="btn btn-success btn-xs">Manage Food</button></Link>
        </th>
      </tr>
    </tbody>
    <tfoot>


    </tfoot>
    
  </table>
</div>
            
        </div>
    );
};

export default FoodTabular;