/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleFoodAvailable from "../../Components/Foods/Available/SingleFoodAvailable";
import { Helmet } from "react-helmet";




const AvailableFood = () => {

const [foods, setFoods]= useState([]);

useEffect(() => {
  fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => {
     setFoods(data)

    });
}, []);

// const handleSort=(foods)=>{
// const allFoods = foods;
// allFoods.map(food=>{
//   const dateString= food.date
//   const dateObject = new Date(dateString);
//    const numericDate = dateObject.getTime();

//    const sortAllData =allFoods.sort((a, b) => b.numericDate - a.numericDate);
// //  setFoods(sortAllData);
// console.log(sortAllData)

// })



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
          <Helmet>{AvailableFood}</Helmet>
            <div className="flex justify-center items-center">
            <div>

              <div>
                {/* <button className="btn btn-primary" onClick={()=>handleSort(foods)}>Sorting ood</button> */}
              </div>
        
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