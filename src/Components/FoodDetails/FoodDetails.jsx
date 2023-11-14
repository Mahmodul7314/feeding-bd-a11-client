/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleFoodDetail from "./SingleFoodDetail";
import { Helmet } from "react-helmet";

const FoodDetails = () => {

  const [singleFood, setSingleFood] = useState(null);
  const { id } = useParams();
  const _id = id;
  
  useEffect(() => {
    fetch(`https://feeding-bd-server.vercel.app/foods/${_id}`)
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
      <Helmet><title>Feeding BD|Food Details</title></Helmet>
        {
            <SingleFoodDetail food={singleFood}></SingleFoodDetail>
        }
    </div>
  );
};

export default FoodDetails;
