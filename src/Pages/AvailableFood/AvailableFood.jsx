/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleFoodAvailable from "../../Components/Foods/Available/SingleFoodAvailable";




const AvailableFood = () => {

const [foods, setFoods]= useState([]);
const [searchText, setSearchText]= useState(" ");

useEffect(() => {
  fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => {
     setFoods(data)

     console.log(searchText)

    });
}, []);


// var handleSearch =e=>{
//   e.preventDefault();
//   const form = e.target;
//   const searchText = form.search.value;
//   setSearchText(searchText)
// }



//  // Filter foods based on the search text
//  const filteredFoods = foods.filter((food) =>
//  food.foodName.toLowerCase().includes(searchText.toLowerCase())
// );
// console.log(filteredFoods)
// setFoods(filteredFoods)



 

    return (
        <div className="px-2">
            <div className="flex justify-around items-center">
            <div>
            {/* <form onSubmit={handleSearch}>
              <h2>Filter full food name</h2>
                    <input className="border-y-gray-300 border-x border-y py-2" type="text" name="search" id="" />
                    <input type="submit" value="Search" className="btn  bg-yellow-400"/>
                </form> */}
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