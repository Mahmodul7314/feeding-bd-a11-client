/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


const ManageFoodOne = ({food}) => {
const{_id,userEmail,date,foodStatus,userName,userImage}=food;

const handleConfirm = id =>{
  fetch(`http://localhost:requestFood/${id}`,{
   method:'PATCH',
   headers:{
     'content-type': 'application/json'
   },
   body: JSON.stringify({foodStatus:'Delivered'})
  })
 .then(res=> res.json())
 .then(data =>{
  console.log(data)
  if(data.modifiedCount > 0){
    alert('statu change successfull')
  }
 })
  


  

}
    return (
      <div>
      {foodStatus ==='Available'?<>
        <div className="bg-amber-50 py-20">
            <div className="px-4 py-8 relative bg-gradient-to-r from-indigo-200 ... shadow-xl flex w-full max-w-[30rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700">
  <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
    <img
      src={userImage}
      alt="tania andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         RequesterName: {userName}
        </h5>
        <div>
        <h5 className="block font-sans text-lg antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
         Request Date: {date}
        </h5>

        </div>
      </div>
      <p className="block font-sans text-base text-gray-900 antialiased font-light leading-relaxed ">
       Requester Email: {userEmail}
      </p>
    </div>
  </div>
  <div className=" text-center mb-6">
    
        { 
          foodStatus === 'Available'? <button className="font-bold btn btn-warning ">Status Available</button>
           : <button onClick={()=>handleDelivered(_id)} className="btn btn-success">Delivered</button>
      }
    
  </div>
</div>
        </div>
        </>
        :
        <div className="w-full bg-amber h-[60vh]">
          <h2 className="text-center text-4xl text-gray-800">This food is No Requested</h2>
        </div>}
        </div>
    );
};

export default ManageFoodOne;