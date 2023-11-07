import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";


const Foods = () => {
 
const [foods, setFoods] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/foods')
    .then(res => res.json())
    .then(data => {
      // Sort data by the "quantity" property in descending order
      const sortAllData =data.sort((a, b) => b.quantity - a.quantity);
      setFoods(sortAllData);
    });
}, []);
    
const sixfood = foods.slice(0,6);
console.log(sixfood)




    return (
        <div>
            {
                sixfood.map(food=><SingleFood 
                    key={food} 
                    food={food}></SingleFood>)
            }
        </div>
    );
};

export default Foods;