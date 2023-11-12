import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Firebase/AuthProvider";


const Navbar = () => {

  const {user, logOut } = useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then()
    .catch();
  }


// console.log(user.photoURL)
	const NavLinks = <>
     <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-yellow-500 font-medium text-lg" : " text-white font-normal  text-lg"
  }
>
  Home
</NavLink></li>
<li><NavLink
 to="/availablefood"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ?  "active text-yellow-500 font-medium text-lg" : " text-white font-normal  text-lg"
  }
>
Available Foods
</NavLink></li>
    
 <li><NavLink
 to="/addfood"

  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-yellow-500 font-medium text-lg" : " text-white font-normal  text-lg"
  }
>
Add Food
</NavLink></li>
 <li><NavLink
to="/managefood"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-yellow-500 font-medium text-lg" : " text-white font-normal  text-lg"
  }
>
Manage Foods
</NavLink></li>
 <li><NavLink
to="/foodrequest"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-yellow-500 font-medium text-lg" : " text-white font-normal  text-lg"
  }
>
My Food Request
</NavLink></li>
  
   
	</>
    return (
		<div className=" w-full mx-auto">
       <div className="navbar md-flex md:justify-center md:gap-40 justify-evenly bg-gray-800 h-44 ">
		<div className="lg:w-4/6 w-2/5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className=" lg:hidden text-yellow-600 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm w-48 dropdown-content bg-black mt-3 z-[1] p-2 s">
		{NavLinks}
      </ul>
    </div>
   <div className="lg:w-80 w-72 pb-4">
   <p className="text-yellow-400 lg:font-bold text-[1.5rem]  break-keep flex items-center">
	<img className="lg:w-[5rem] w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] lg:h-[5rem]" src="https://i.ibb.co/c3Yb1ys/6039575.png" alt="" /><span className="text-red-400 pl-6 text-3xl">F</span>eeding BD</p>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1 gap-5">
	{NavLinks}
    </ul>
  </div>
  </div>
  <div className="navbar-end w-1/5 lg:pr-8 gap-6 pr-16 lg:flex lg:justify-end justify-center md:justify-end lg:gap-6">

  { user?  <>
          <div className="w-20 lg:pt-8 pt-10 flex-wrap"> 
          
            <div className="lg:pl-8 md:pl-8 pl-14 overflow-x-hidden"><img className="lg:w-[4rem] w-[2rem] lg:h-[3rem] h-[2rem] rounded-full" src={user?.photoURL} alt="" /></div>
          <p className="text-white lg:text-[1rem] tracking-tighter pr-8 text-left md:text-sm text-sm pt-3">{user?.email}</p>
            </div>
            <div onClick={handleLogout} className="lg:btn lg:btn-warning lg:w-20 lg:font-bold font-bold md:btn md:btn-warning btn btn-warning w-14 h-6 lg:h-0 lg:rounded-md lg:text-center md:text-bold text-center lg:rounded-0 md:rounded-sm"> <NavLink
        to="/"
          className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active lg:text-black text-black md:font-medium font-medium lg:font-bold lg:px-4 lg:py-2 p-2 " : "font-normal lg:font-bold lg:px-4 p-2 lg:py-4 "
          }
          >
        Log Out
      </NavLink></div>
      </>
        :
  <NavLink to="/login" className="lg:btn lg:btn-warning lg:w-32 lg:font-bold font-bold md:btn md:btn-warning btn btn-warning w-14 h-6 lg:h-0 lg:text-center md:text-bold text-center lg:rounded-0 md:rounded-sm">Login</NavLink>

  }

  </div>
</div>
</div>
    );
};

export default Navbar;