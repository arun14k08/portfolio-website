import React from "react";
import { HeroImage, Lines } from "../assets";

const Hero = () => {
    return (
        <div className="bg-hero bg-contain bg-no-repeat flex  flex-1 w-full h-[650px] mt-4 sm:flex-row flex-col items-center justify-center relative overflow-hidden">
            {/* <img src={Lines} alt="lines" className="" /> */}
            <div className="w-full h-full"></div>
            <div className=" flex justify-center items-center  w-full h-full">
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
