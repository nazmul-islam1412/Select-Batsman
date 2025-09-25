import React from 'react';
import navImg from "../assets/logo.png";
import coinImg from "../assets/realistic-lottery-symbol-isolated_23-2151177245.jpg";

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="flex-1">
                    <img src={navImg} alt="logo" className="h-10" />
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <a href="" className="text-[rgba(19,19,19,0.7)]">Home</a>
                    <a href="" className="text-[rgba(19,19,19,0.7)]">Fixture</a>
                    <a href="" className="text-[rgba(19,19,19,0.7)]">Teams</a>
                    <a href="" className="text-[rgba(19,19,19,0.7)]">Schedule</a>
                    <button className="btn btn-ghost flex items-center gap-2 mr-5 shadow rounded-l">
                        <span className="font-bold">0</span> 
                        <span className="font-bold">Coin</span> 
                        <img src={coinImg} alt="coin" className="w-5 h-5 object-contain"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
