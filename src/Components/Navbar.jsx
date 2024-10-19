import React from "react";
import { LogoIcon } from "../icons/Icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center justify-center">
      <div className="wrapper-container w-full flex items-center justify-center">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>

          <LogoIcon />
          <p className="font-semibold"> 
            <span className="text-yellow-500">C</span>rypto{" "}
            <span className="text-yellow-500">U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
