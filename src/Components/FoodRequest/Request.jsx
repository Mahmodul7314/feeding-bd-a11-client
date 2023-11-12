/* eslint-disable no-undef */
import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";


const Request = () => {
    const foodInfo = useLoaderData();
    const {user}= useContext(AuthContext);
    const  {_id,foodName,image,quantity,pickup,date, note,donatorImage,donatorEmail,donatorName,foodStatus} = foodInfo || {}
    console.log(user)
    //current date
    const currentDate = new Date().toISOString().split('T')[0]; 

    const handleRequest = e =>{
        e.preventDefault();
        const form = e.target;
    const foodName = form.foodName.value;
        const image = form.image.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const userEmail = form.userEmail.value;
        const date2 = form.date2.value;
        const pickup = form.pickup.value;
        const date = form.date.value;
        const note = form.note.value;
        const donation = form.donation.value;
        const foodId = form.foodId.value;
        const userName = form.userName.value;
        const userImage= form.userImage.value;
        
        
        const requestFood ={
            foodName,
            image,
            donatorName,
            donatorEmail,
            userEmail,
            date2,
            pickup,
            date,
            note,
            donation,
            foodId,
            foodStatus,
            userName,
            userImage
        }
        
        console.log(requestFood);
        fetch('https://feeding-bd-server.vercel.app/foodsrequest',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(requestFood)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire(
                        'Thanks!',
                        'Your Food Request is successful!',
                      
                      
                      )
                }
            })
        
        }

    return (
        <div>
      <div className="lg:my-20 my-6 lg:px-8 px-2">
        <form onSubmit={handleRequest} >
           {/* form food Name and Image row */}
           <div className="md:flex mb-8">
       
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Food Name</span>
           </label>
           <label className="input-group">
               <input type="text" name="foodName" placeholder="Food Name" defaultValue={foodName} disabled className="input input-bordered w-full" required/>
           </label>
       </div>
       <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Food Image</span>
           </label>
           <label className="input-group">
               <input type="text" name="image" placeholder="Food Image" defaultValue={image} disabled className="input input-bordered w-full" required />
           </label>
     </div>
     </div>

           {/* quantity and pickup location row */}
           <div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Donator Name</span>
           </label>
           <label className="input-group">
               <input type="text" name="donatorName" placeholder="Donator Name" defaultValue={donatorName} disabled className="input input-bordered w-full" required />
           </label>
       </div>
        <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Donator Email</span>
           </label>
           <label className="input-group">
               <input type="email" name="donatorEmail" placeholder="Donator Email" defaultValue={donatorEmail} disabled className="input input-bordered w-full" required />
           </label>
       </div>
 </div>
{/*  User Email  and current date */}
<div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">User Email</span>
             </label>
             <label className="input-group">
               <input type="email" name="userEmail" defaultValue={user.email} disabled placeholder="User Email" className="input input-bordered w-full" required />
           </label>
       </div>
    
           <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Request Date</span>
           </label>
           <label className="input-group">
               <input type="date" name="date2" placeholder="Request Date" disabled  className="input input-bordered w-full" required defaultValue={currentDate}/>
           </label>
        </div>
    </div>
    {/* donator name donator image row */}
    <div className="md:flex mb-8">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Pickup Location</span>
           </label>
           <label className="input-group">
               <input type="text" name="pickup" disabled placeholder="Pickup Location" defaultValue={pickup} className="input input-bordered w-full" required />
           </label>
       </div>
       <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Expire Date</span>
           </label>
           <label className="input-group">
               <input type="date" name="date" disabled placeholder="Expire Date" defaultValue={date} className="input input-bordered w-full" required />
           </label>
       </div>
    </div>
  
           {/*  Additional Note Donation Money row */}
        <div className="md:flex mb-8 ">
           <div className="form-control md:w-1/2">
           <label className="label">
               <span className="label-text">Additional Note</span>
           </label>
           <label className="input-group">
               <input type="text" name="note" defaultValue={note} placeholder="Additional Note" className="input input-bordered w-full" required />
           </label>
        </div>
        <div className="form-control md:w-1/2 ml-4">
           <label className="label">
               <span className="label-text">Donation Money</span>
           </label>
           <label className="input-group">
               <input type="number" name="donation" placeholder="Donation Money" className="input input-bordered w-full" required />
           </label>
        </div>
        </div>
        <div className="md:flex mb-8 ">
       <div className="form-control md:w-1/2 ">
       <label className="label">
               <span className="label-text">Food id</span>
           </label>
           <label className="input-group">
               <input type="text" name="foodId" placeholder="Food id" defaultValue={_id} disabled className="input input-bordered w-full" required />
           </label>
          </div>
       <div className="form-control md:w-1/2 ml-4">
       <label className="label">
               <span className="label-text">Food Status</span>
           </label>
           <label className="input-group">
               <input type="text" name="foodStatus" placeholder="Food Status" defaultValue={foodStatus} disabled className="input input-bordered w-full" required />
           </label>
          </div>
    </div>
    <div className="pb-8 md:flex">
    <div className="form-control md:w-1/2">
       <label className="label">
               <span className="label-text">User Image</span>
           </label>
           <label className="input-group">
               <input type="text" name="userImage" placeholder="User Image" defaultValue={user.photoURL} disabled className="input input-bordered w-full" required />
           </label>
          </div>
    <div className="form-control md:w-1/2 ml-4">
       <label className="label">
               <span className="label-text">User Name</span>
           </label>
           <label className="input-group">
               <input type="text" name="userName" placeholder="User Name" defaultValue={user.displayName} disabled className="input input-bordered w-full" required />
           </label>
          </div>
    </div>

    <input type="submit" value="Request" className="btn bg-yellow-400 hover:bg-green-300 text-white btn-block" />
       </form>
    

   </div>
            
        </div>
    );
};

export default Request;