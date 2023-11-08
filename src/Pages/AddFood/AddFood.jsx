/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
 const {user } = useContext(AuthContext);

const handleAddFood = e =>{
e.preventDefault();
const form = e.target;
// eslint-disable-next-line no-unused-vars
const foodName = form.foodName.value;
const image = form.image.value;
const quantity = form.quantity.value;
const pickup = form.pickup.value;
const date = form.date.value;
const note = form.note.value;
const status = form.status.value
const donatorImage = form.donatorImage.value;
const donatorName = form.donatorName.value;
const donatorEmail = form.donatorEmail.value;



const food ={foodName,
    image,
    quantity,
    pickup,
    date,
    note,
    status,
    donatorImage,
    donatorName,
    donatorEmail}

console.log(food);
fetch('http://localhost:3000/foods',{
    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(food)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Thanks!',
                'Your Registraion is successful!',
                navigate("/")
              
              )
        }
    })



}


    return (
        <div className="lg:my-20 my-6 lg:px-8 px-2">
        <form onSubmit={handleAddFood}>
           {/* form Name and Image row */}
           <div className="md:flex mb-8">
       
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Food Name</span>
           </label>
           <label className="input-group">
               <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" required/>
           </label>
       </div>
       <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Food Image</span>
           </label>
           <label className="input-group">
               <input type="text" name="image" placeholder="Food Image" className="input input-bordered w-full" required />
           </label>
     </div>
     </div>

           {/* quantity and pickup location row */}
           <div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Quantity of Served</span>
           </label>
           <label className="input-group">
               <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
           </label>
       </div>
        <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Pickup Location</span>
           </label>
           <label className="input-group">
               <input type="text" name="pickup" placeholder="Pickup Location" className="input input-bordered w-full" required />
           </label>
       </div>
 </div>
{/* expire date and additional note */}
<div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Expired Date</span>
             </label>
             <label className="input-group">
               <input type="date" name="date" placeholder="Expire date" className="input input-bordered w-full" required />
           </label>
       </div>
    
           <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Additional Note</span>
           </label>
           <label className="input-group">
               <input type="text" name="note" placeholder="Additional Note" className="input input-bordered w-full" required />
           </label>
        </div>
    </div>
    {/* donator name donator image row */}
    <div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Donator-Image</span>
           </label>
           <label className="input-group">
               <input type="text" name="donatorImage" disabled placeholder="Donator-image" defaultValue={user.photoURL} className="input input-bordered w-full" required />
           </label>
       </div>
       <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Donator-name:</span>
           </label>
           <label className="input-group">
               <input type="text" name="donatorName" disabled placeholder="Donator-name" defaultValue={user.displayName} className="input input-bordered w-full" required />
           </label>
       </div>
    </div>
  
           {/*  Donator Email row */}
        <div className="md:flex mb-8 ">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Email</span>
           </label>
           <label className="input-group">
               <input type="text" name="donatorEmail" disabled placeholder="Email"  defaultValue={user.email} className="input input-bordered w-full" required />
           </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Food Status</span>
           </label>
           <label className="input-group">
               <input type="text" name="status" placeholder="Food Status" className="input input-bordered w-full" required />
           </label>
        </div>
    </div>

    <input type="submit" value="Add Product" className="btn bg-yellow-500 text-white btn-block" />
       </form>
    

   </div>
    );
};

export default AddFood;