import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Home/Header/Navbar";
import Footer from "../../Pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;