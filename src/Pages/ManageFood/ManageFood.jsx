import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import FoodTabular from "../../Components/FoodTabular/FoodTabular";
import Swal from "sweetalert2";
import { Helmet } from 'react-helmet-async';
const ManageFood = () => {

    const {user} = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const url = `https://feeding-bd-server.vercel.app/foods?email=${user.email}`;
     useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setFoods(data)
        })
     },[])


     const handleDelete= id =>{
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
          fetch(`https://feeding-bd-server.vercel.app/foods/${id}`,{
            method:'DELETE'
          })
              .then(res => res.json())
              .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Success!',
                        'Your Food is successfully delete!',
                      )
              const remaining = foods.filter(food => food._id !== id);
              setFoods(remaining);
            }
          })
        }
      }
    return (
        <div className="px-24 bg-amber-50 py-10">
          <Helmet><title>Feeding BD | Manage Foods</title></Helmet>
          <div className="py-4">
          <table>
        <thead>
         <tr className="flex lg:gap-[4rem] text-left bg-amber-300 mb-5 py-1">
        <th>
       
        </th>
        <th>Food Name & Quantity</th>
        <th>Location & Expire Date</th>
        <th>Food Status</th>
        <th>Update</th>
        <th>Manage</th>
        <th></th>
      </tr>
    </thead>
            </table>
          </div>
            {
                foods.map(food=><FoodTabular
                     key={food._id} 
                     food={food}
                     handleDelete={handleDelete}
                     >
                     </FoodTabular>)
            }
        </div>
    );
};

export default ManageFood;