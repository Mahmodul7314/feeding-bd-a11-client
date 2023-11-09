import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import FoodTabular from "../../Components/FoodTabular/FoodTabular";
import Swal from "sweetalert2";


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
        <div>
            {
                foods.map(food=><FoodTabular
                     key={food._id} 
                     food={food}>
                    handleDelete={handleDelete}
                     </FoodTabular>)
            }
        </div>
    );
};

export default ManageFood;