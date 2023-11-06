
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
const {createUser} = useContext(AuthContext)
const [errorMessage, setErrorMessage] = useState('')
const navigate =useNavigate();

	const handleRegister= e=> {
        e.preventDefault()
        const form =new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo');
        const email = form.get('email');
        const password =form.get("password");
        console.log(name,photo,email,password)


		//conditional password setup
		if(password.length<6){
			setErrorMessage("password will be at least 6 character")
			return;
		}else if(!/[A-Z]/.test(password)){
			setErrorMessage('Password must be have one Capital Letter')
			return;
		}else if (!/[#_]/.test(password)){
			setErrorMessage('Password must be have #_')
			return;
		}

		createUser(email,password)
		// eslint-disable-next-line no-unused-vars
		.then(result =>{
			Swal.fire(
                'Thanks!',
                'Your Registraion is successful!',
                navigate("/")
              
              )
              e.target.reset();
		})
		.then(error=>{
			console.error(error)
		})





	}

    return (
        <div className="w-full mx-auto bg-amber-50 py-10">
              <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-800 text-gray-100">
	<h1 className="text-2xl font-bold text-center">Register Now</h1>
	<form onSubmit={handleRegister} className="space-y-6">
		<div className="space-y-1 text-sm">
			<label  className="block text-gray-600">Username</label>
			<input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md input-bordered border-1  text-black" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-gray-600">Email</label>
			<input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700   text-black " />
		</div>
		<div className="space-y-1 text-sm">
			<label className="block text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black " />
			
		</div>
		<div className="space-y-1 text-sm">
			<label className="block text-gray-600">Photo Url</label>
			<input type="text" name="photo" id="photo" placeholder="phot Url" className="w-full px-4 py-3 rounded-md border-gray-700  text-black" />
			<div className="flex justify-end text-xs text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-orange-400">Register</button>
	</form>

	<p className="text-red-500  font-bold text-lg px-4 py4">{errorMessage}</p>
	<div className="flex justify-center space-x-4">
	</div>
	<p className="text-xl text-center sm:px-6 text-gray-400">Have You Account Please
		<Link to="/login" className="underline text-blue-400">Login</Link>
	</p>
</div>
            
        </div>
    );
};

export default Register;