import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";




const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-96 bg-orange-400 h-screen flex flex-col gap-5">
        <li className="flex justify-center items-center gap-3">
        <FaHome className="text-white" />
        <NavLink className="text-white text-2xl flex flex-col" to="/">Home</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
        <FaUser className="text-white" />
        <NavLink className="text-white text-2xl flex flex-col" to="userProfile">Profile</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
        <FaShoppingCart className="text-white" />
        <NavLink className="text-white text-2xl flex flex-col" to="cart">Cart</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
        <IoLogOut 
        className="text-white" />
        <NavLink className="text-white text-2xl flex flex-col" to="">Log Out</NavLink>
        </li>
        <li className="flex justify-center items-center gap-3">
        <NavLink className="text-white text-2xl flex flex-col" to="toDo">ToDo</NavLink>
        </li>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;