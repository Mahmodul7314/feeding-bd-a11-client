import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import SingleFoodRequest from "../../Components/SingleFoodRequest/SingleFoodRequest";
import Swal from "sweetalert2";


const MyFoodRequest = () => {
    const{user} = useContext(AuthContext)

    const [foods, setFoods] = useState([]);
    const url = `http://localhost:3000/requestFood?email=${user.email}`;
     useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setFoods(data)
        })
     },[])



     const handleDelete= id =>{
        const proceed =confirm(Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }))
        if(proceed){
          fetch(`http://localhost:3000/requestFood/${id}`,{
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
        <div className="py-20  bg-amber-50 px-14">
            <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1">
            {
                foods.map(food=><SingleFoodRequest handleDelete={handleDelete} key={food._id} food={food} ></SingleFoodRequest>)
            }
            </div>
        </div>
    );
};

export default MyFoodRequest;