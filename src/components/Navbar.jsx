import React from "react";
import { navLinks } from "../constants/index";

const Navbar = () => {
    return (
        <div className="border-solid border-2  w-full flex justify-center items-center px-4 py-2">
            <span className="text-[24px]">ARUN KUMAR DHANARAJ</span>
            <ul className="flex ml-auto text-[18px] font-normal list-none flex-1 items-center justify-end text-[#1D2130]">
                {navLinks.map((navLink) => {
                    const LinkElem = (
                        <li id={navLink.id} className={`mr-4`}>
                            <a href="#">{navLink.title}</a>
                        </li>
                    );
                    return LinkElem;
                })}
                <button className="text-white px-4 py-2 rounded-lg bg-[#7DE0EA]">
                    Resume
                </button>
            </ul>
        </div>
    );
};

export default Navbar;
