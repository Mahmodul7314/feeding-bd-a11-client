import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import FoodTabular from "../../Components/FoodTabular/FoodTabular";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const ManageFood = () => {

    const {user} = useContext(AuthContext);
    const [foods, setFoods] = useState([]);

    const url = `http://localhost:3000/foods?email=${user.email}`;
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
          fetch(`http://localhost:3000/foods/${id}`,{
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