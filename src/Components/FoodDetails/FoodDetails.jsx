import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFoodDetail from "./SingleFoodDetail";

const FoodDetails = () => {
  const [singleFood, setSingleFood] = useState(null);
  const { id } = useParams();
  const _id = id;
  
  useEffect(() => {
    fetch(`http://localhost:3000/foods/${_id}`)
      .then(res => res.json())
      .then(data => {
        setSingleFood(data);
      })
      .catch(error => {
        console.error('Error fetching food details:', error);
      });
  }, [_id]); 

  return (
    <div>
        {
            <SingleFoodDetail food={singleFood}></SingleFoodDetail>
        }
    </div>
  );
};

export default FoodDetails;