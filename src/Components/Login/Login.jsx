/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";




const Login = () => {

    const [errorMessage, setErrorMessage] = useState()
const {signIn,signInWithGoogle} = useContext(AuthContext);
const navigate =useNavigate();
const handleLogin = e =>{
    e.preventDefault();
    const form =new FormData(e.currentTarget);
    const email = form.get('email');
    const password =form.get("password");
    console.log(email,password) 



    signIn(email,password)
    .then(result=>{
        console.log(result.user)
        Swal.fire(
            'Thanks!',
            'Your login is successful!',
            'success'
          )
          e.target.reset();
          navigate('/')
   
        
    })
    .catch(error => {
        setErrorMessage(error.message); 
      });
}


    //signinWith Google
    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            // console.log(result.user)
            Swal.fire(
                'Good job!',
                'You Sign In with google!',
                'Ok'
              )
          navigate('/')
       
        
        })
        .catch(error=>{
            setErrorMessage(error.message)
        } )
      }
   


    

    return (
        <div className="py-10">
            <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin} className="space-y-6">
		<div className="space-y-1 text-sm">
			<label for="Email" className="block text-gray-400">Email</label>
			<input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md input-bordered border-1  text-black" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password"className="w-full px-4 py-3 rounded-md input-bordered border-1 text-black" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-yellow-500">Login</button>
	</form>
    <p className="text-red-500  font-bold text-lg px-4 py4">{errorMessage}</p>
	<div className="flex justify-center py-4">
		<p className=" text-xl  text-gray-400">Login with <span onClick={handleGoogleLogin} className="text-blue-500">google</span> Account</p>
	</div>
	<p className="text-lg text-center sm:px-6 text-gray-400">Dont have an account?
		<Link to="/register" className="underline text-gray-100"> Register</Link>
	</p>
</div>
  
        </div>
    );
};

export default Login;