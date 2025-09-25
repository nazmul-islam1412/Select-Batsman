import React from 'react';
import bgShadow from "../assets/bg-shadow.png";
import bannerImg from "../assets/banner-main.png";

const Banner = () => {
    return (
        <div
            className="hero container mx-auto rounded-2xl overflow-hidden relative mt-5"
            style={{
                backgroundImage: `url(${bgShadow})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
            <div className="hero-overlay bg-black bg-opacity-30 p-20"></div>

            
            <div className="hero-content text-neutral-content text-center relative z-10  bg-black">
                <div className="max-w-md flex flex-col items-center justify-center">
                    <img src={bannerImg} alt="" className="mb-2" />
                    <h3 className="mt-5 text-xl font-semibold">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h3>
                    <p className="mb-5 mt-2">Beyond Boundaries Beyond Limits</p>
                    <button className="btn bg-yellow-300 border-none shadow-lg rounded-xl shadow-yellow-300">
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
