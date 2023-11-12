import { useEffect, useState } from "react";
import SingleFood from "./SingleFood";
import { Link } from "react-router-dom";


const Foods = () => {
 
const [foods, setFoods] = useState([]);

useEffect(() => {
    fetch('https://feeding-bd-server.vercel.app/foods')
      .then(res => res.json())
      .then(data => {
        const sortAllData =data.sort((a, b) => b.quantity - a.quantity);
        setFoods(sortAllData);
      });
  }, []);
      
const sixfood = foods.slice(0,6);
    return (
        <div className="max-w-7xl px-14 bg-amber-50 py-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {
                sixfood.map(food=><SingleFood 
                    key={food._id} 
                    food={food}></SingleFood>)
            }
        </div>
        <div className=" pt-14 pb-10 flex justify-center">
        <Link to="/availablefood" className="btn bg-yellow-500 shadow-xl">Show All</Link>
        </div>
        </div>
    );
};

export default Foods;