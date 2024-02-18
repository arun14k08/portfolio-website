import React from "react";
import { HeroImage, Lines } from "../assets";

const Hero = () => {
    return (
        <div className="bg-hero bg-contain bg-no-repeat flex  flex-1 w-full h-[650px] mt-4 sm:flex-row flex-col items-center justify-center relative border-green-600 border-2 border-solid overflow-hidden">
            {/* <img src={Lines} alt="lines" className="" /> */}
            <div className="border-blue-600 border-2 border-solid w-full h-full"></div>
            <div className=" flex justify-center items-center border-red-600 border-2 border-solid w-full h-full">
                <img
                    src={HeroImage}
                    alt="circle"
                    className="w-[500px] h-[550px]"
                />
            </div>
        </div>
    );
};

export default Hero;
