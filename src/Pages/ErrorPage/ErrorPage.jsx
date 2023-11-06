/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="">
           <div className="flex items-center justify-center px-4">
           <h2 className="text-3xl font-bold text-center text-red-500">Oops Error!! <br /> There Haven't Any Data</h2>
            <img className="" src="https://i.ibb.co/J5cGpmq/404.gif" alt="" />
           </div>
           <Link className="flex justify-center" to="/"><button className="btn btn-warning text-bold text-xl">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;