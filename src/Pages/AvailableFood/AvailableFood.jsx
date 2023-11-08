/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleFoodAvailable from "../../Components/Foods/Available/SingleFoodAvailable";




const AvailableFood = () => {

const [foods, setFoods]= useState([]);

useEffect(() => {
  fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => {
     setFoods(data)


    });
}, []);


// const handleSort =()=>{
 
//     fetch('http://localhost:3000/foods')
//       .then(res => res.json())
//       .then(data => {
//         const sortAllData =data.sort((a, b) => a.date - b.date);
//         setFoods(sortAllData);
    
  
  
//       });
//   }
 


    return (
        <div className="px-2">
            <div className="flex justify-evenly">
            <div>
              {/* <button onClick={handleSort}>Sorting near Expire date</button> */}
            </div>

           
            <div>
            <h2 className="text-3xl font-bold flex justify-center text-yellow-400 py-10 ">Available Foods</h2>
            </div>
            </div>
           
        
          <div className ="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-34 pb-14">
          {
            foods.map(food=><SingleFoodAvailable key={food._id} food={food}></SingleFoodAvailable>)
          }
         
          </div>
         
        </div>
    );
};

export default AvailableFood;